const $ = (id) => document.getElementById(id);

let currentJobId = null;
let selectedStack = null;
let pollTimer = null;
let eventSource = null;
let globalEventSource = null;
let queueFilter = "active";
let chartHistory = [];
let lastGlobalStats = null;
let lastJob = null;

const STACK_LABELS = {
  static: "Static HTML Mirror",
  "react-vite": "React.js 19 + Vite",
  "react-architecture": "React.js Full Architecture",
  nextjs: "Next.js 15",
  laravel: "Laravel 11",
};

function getScrapeMode() {
  const picked = document.querySelector('input[name="scrapeMode"]:checked');
  return picked ? picked.value : "full";
}

function updateScrapeUi() {
  const mode = getScrapeMode();
  const fullOpts = $("fullSiteOptions");
  if (fullOpts) fullOpts.hidden = mode !== "full";
  $("scrapeBtn").textContent = mode === "full" ? "Scrape full website" : "Scrape first page";
}

document.querySelectorAll('input[name="scrapeMode"]').forEach((el) => {
  el.addEventListener("change", updateScrapeUi);
});
updateScrapeUi();

const STAGE_LABELS = {
  queued: "Queued",
  browser: "Browser",
  capture: "HTML capture",
  download: "Asset download",
  save: "Save files",
  analyze: "Tech & language",
  complete: "Complete",
  convert: "Conversion",
  converted: "Project ready",
};

const ACTIVE_STATUSES = new Set(["queued", "scraping", "analyzing", "converting"]);

function closeSSE() {
  if (eventSource) {
    eventSource.close();
    eventSource = null;
  }
}

function closeGlobalSSE() {
  if (globalEventSource) {
    globalEventSource.close();
    globalEventSource = null;
  }
}

function connectGlobalSSE() {
  if (globalEventSource) return;
  globalEventSource = new EventSource("/api/stream");
  globalEventSource.onmessage = (ev) => {
    try {
      const data = JSON.parse(ev.data);
      if (data.type === "job_update" && data.job) {
        if (!currentJobId || data.job.id === currentJobId) handleJobUpdate(data.job);
        refreshGlobalStats();
      } else if (data.type === "heartbeat") {
        handleHeartbeat(data);
      }
    } catch (_) { /* ignore */ }
  };
}

function connectSSE(jobId) {
  closeSSE();
  eventSource = new EventSource(`/api/jobs/${jobId}/stream`);
  eventSource.onmessage = (ev) => {
    try {
      const data = JSON.parse(ev.data);
      if (data.type === "job_update" && data.job) {
        handleJobUpdate(data.job);
      } else if (data.type === "heartbeat") {
        handleHeartbeat(data);
      }
    } catch (_) { /* ignore */ }
  };
  eventSource.onerror = () => closeSSE();
}

function fmtNum(n) {
  return (n ?? 0).toLocaleString();
}

function handleHeartbeat(data) {
  renderSystemMonitor(data);
  if (data.stats) {
    lastGlobalStats = data.stats;
    renderGlobalStats(data.stats);
  }
  if (data.history?.length) {
    chartHistory = data.history;
    renderCharts(chartHistory, lastJob);
  }
}

function renderGlobalStats(stats) {
  const el = $("globalStats");
  if (!el || !stats) return;
  const items = [
    ["Total Jobs", stats.total_jobs, ""],
    ["Running", stats.running_jobs, "running"],
    ["Queued", stats.queued_jobs, ""],
    ["Completed", stats.completed_jobs, "success"],
    ["Failed", stats.failed_jobs, "danger"],
    ["Cancelled", stats.cancelled_jobs, ""],
    ["Active Workers", stats.active_workers, "running"],
    ["Proc. Speed", stats.processing_speed_human || "—", ""],
    ["Files Downloaded", fmtNum(stats.total_files_downloaded), ""],
    ["Data Downloaded", stats.total_data_downloaded_human || "0 B", ""],
    ["URLs Crawled", fmtNum(stats.total_urls_crawled), ""],
  ];
  el.innerHTML = items.map(([label, val, cls]) =>
    `<div class="global-stat ${cls}"><div class="label">${label}</div><div class="value">${val}</div></div>`
  ).join("");
  const timeEl = $("globalStatsTime");
  if (timeEl) timeEl.textContent = new Date().toLocaleTimeString();
  renderQueueSummary(stats);
}

function renderSystemMonitor(m) {
  if (!m) return;
  const cpu = m.cpu_percent ?? m.cpu ?? 0;
  const mem = m.memory_percent ?? m.memory ?? 0;
  const disk = m.disk_percent ?? m.disk ?? 0;
  const netDown = m.network_down_human || m.network_down || "0 B/s";
  const gpu = m.gpu_percent;
  const gpuName = m.gpu_name || "GPU";
  const el = $("systemResources");
  if (el) {
    el.innerHTML = `
      <div class="sys-resource"><div class="label">CPU</div><div class="value">${cpu.toFixed(1)}%</div><div class="mini-bar"><div style="width:${Math.min(cpu,100)}%"></div></div></div>
      <div class="sys-resource"><div class="label">RAM</div><div class="value">${mem.toFixed(1)}%</div><div class="mini-bar"><div style="width:${Math.min(mem,100)}%"></div></div></div>
      <div class="sys-resource"><div class="label">Disk</div><div class="value">${disk.toFixed(1)}%</div><div class="sub">${m.disk_used_human || ""} / ${m.disk_total_human || ""}</div><div class="mini-bar"><div style="width:${Math.min(disk,100)}%"></div></div></div>
      <div class="sys-resource"><div class="label">Network ↓</div><div class="value">${netDown}</div><div class="sub">↑ ${m.network_up_human || "0 B/s"}</div></div>
      <div class="sys-resource" style="grid-column:1/-1"><div class="label">${gpuName}</div><div class="value">${gpu != null ? `${gpu.toFixed(0)}%` : "N/A"}</div>${gpu != null ? `<div class="mini-bar"><div style="width:${Math.min(gpu,100)}%"></div></div>` : '<div class="sub">No GPU detected</div>'}</div>`;
  }
}

function drawSparkline(canvasId, values, maxVal, color = "#111") {
  const canvas = $(canvasId);
  if (!canvas || !values.length) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.clientWidth || 180;
  const h = canvas.height;
  canvas.width = w;
  ctx.clearRect(0, 0, w, h);
  const max = maxVal || Math.max(...values, 1);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  values.forEach((v, i) => {
    const x = (i / Math.max(values.length - 1, 1)) * w;
    const y = h - (v / max) * (h - 4) - 2;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function renderCharts(history, job) {
  const tel = job?.telemetry || {};
  const dlSpeed = history.map((h) => h.download_speed || tel.download_speed_bps || 0);
  const procSpeed = history.map((h) => h.processing_speed || tel.processing_speed || 0);
  const cpu = history.map((h) => h.cpu || 0);
  const mem = history.map((h) => h.memory || 0);
  const jobs = history.map((h) => h.jobs_per_min || (lastGlobalStats?.running_jobs || 0));
  drawSparkline("chartDownload", dlSpeed, null, "#2563eb");
  drawSparkline("chartProcessing", procSpeed, null, "#16a34a");
  drawSparkline("chartCpu", cpu, 100, "#111");
  drawSparkline("chartMemory", mem, 100, "#7c3aed");
  drawSparkline("chartJobs", jobs, Math.max(...jobs, 1), "#ea580c");
}

function renderLiveDownloadMonitor(tel) {
  const el = $("liveDownloadMonitor");
  if (!el) return;
  const dl = tel?.current_download || {};
  const name = dl.name || "Waiting for download…";
  const pct = dl.percent || 0;
  const bars = "█".repeat(Math.floor(pct / 10)) + "░".repeat(10 - Math.floor(pct / 10));
  el.innerHTML = `
    <div class="dl-label">Downloading:</div>
    <div class="dl-name">${name.replace(/</g, "")}</div>
    <div class="dl-bar"><div class="dl-bar-fill" style="width:${pct}%"></div></div>
    <div class="dl-meta">
      <span>${bars} <strong>${pct}%</strong></span>
      <span><strong>${dl.downloaded_human || "0 B"}</strong> / ${dl.total_human || "—"}</span>
      <span>Speed: <strong>${dl.speed_human || tel.download_speed_human || "0 B/s"}</strong></span>
      <span>Remaining: <strong>${dl.eta_human || tel.eta_fmt || "—"}</strong></span>
      <span>Concurrent: <strong>${tel.concurrent_downloads ?? 0}</strong></span>
    </div>`;
}

function renderAssetCounters(tel) {
  const assets = tel?.assets || {};
  const el = $("assetCounters");
  if (!el) return;
  const rows = [
    ["Images", assets.images_found, assets.images_downloaded],
    ["Videos", assets.videos_found, assets.videos_downloaded],
    ["CSS Files", assets.css_found, assets.css_downloaded],
    ["JS Files", assets.js_found, assets.js_downloaded],
    ["Fonts", assets.fonts_found, assets.fonts_downloaded],
    ["Documents", assets.documents_found, assets.documents_downloaded],
  ];
  el.innerHTML = rows.map(([label, found, done]) =>
    `<div class="asset-counter"><span>${label}</span><span class="nums">${fmtNum(done)} / ${fmtNum(found)}</span></div>`
  ).join("");
}

function renderAiPanel(tel) {
  const el = $("aiStatusPanel");
  if (!el) return;
  const ai = tel?.ai || {};
  const comp = ai.components_generated ?? 0;
  const compTotal = ai.components_total || 0;
  el.innerHTML = `
    <div class="ai-row"><span>Current Task</span><strong>${ai.current_task || "—"}</strong></div>
    <div class="ai-row"><span>Current Module</span><strong>${ai.current_module || "—"}</strong></div>
    <div class="ai-row"><span>Components</span><strong>${fmtNum(comp)}${compTotal ? ` / ${fmtNum(compTotal)}` : ""}</strong></div>
    <div class="ai-row"><span>React Files</span><strong>${fmtNum(ai.react_files_created ?? 0)}</strong></div>
    <div class="ai-row"><span>Pages Generated</span><strong>${fmtNum(ai.pages_generated ?? 0)}</strong></div>
    <div class="ai-row"><span>Layouts</span><strong>${fmtNum(ai.layouts_generated ?? 0)}</strong></div>
    <div class="ai-row"><span>AI Tokens</span><strong>${fmtNum(ai.tokens_processed ?? 0)}</strong></div>`;
}

function renderWorkers(tel) {
  const el = $("workerPanel");
  if (!el) return;
  const workers = tel?.workers || [];
  el.innerHTML = workers.length
    ? workers.map((w) =>
        `<div class="worker-row ${w.status === "busy" ? "busy" : ""}">
          <span><span class="dot"></span>${w.name}</span>
          <span>${w.task}</span>
        </div>`
      ).join("")
    : "<div class='worker-row'>No active workers</div>";
}

function renderQueueSummary(stats) {
  const el = $("queueSummary");
  if (!el || !stats) return;
  el.innerHTML = `
    <div class="queue-stat"><strong>${fmtNum(stats.pending_jobs)}</strong><span>Pending Jobs</span></div>
    <div class="queue-stat"><strong>${fmtNum(stats.running_jobs)}</strong><span>Running Jobs</span></div>
    <div class="queue-stat"><strong>${fmtNum(stats.completed_today)}</strong><span>Completed Today</span></div>`;
}

function renderErrorSummary(tel) {
  const el = $("errorSummary");
  if (!el) return;
  const tracking = tel?.error_tracking || {};
  const count = tracking.count || (tel?.error_log || []).length;
  const skipped = tel?.skipped_downloads || 0;
  if (!count) {
    el.className = "error-summary none";
    el.innerHTML = skipped
      ? `<strong>Errors Found:</strong> 0 — ${fmtNum(skipped)} unavailable URL(s) skipped silently`
      : "<strong>Errors Found:</strong> 0 — No errors detected";
    return;
  }
  el.className = "error-summary";
  const latest = tracking.latest || (tel.error_log || []).slice(-1)[0]?.message || "—";
  el.innerHTML = `
    <div><strong>Errors Found:</strong> ${count}</div>
    <div style="margin-top:0.35rem"><strong>Latest:</strong> ${latest}</div>
    <div style="margin-top:0.25rem">Retry Count: ${tracking.retry_count ?? 0} · Status: ${tracking.status || "Failed"}</div>
    ${skipped ? `<div style="margin-top:0.25rem;color:var(--muted)">${fmtNum(skipped)} recoverable download(s) skipped</div>` : ""}`;
}

function renderJobMetrics(job) {
  const tel = job.telemetry || {};
  const el = $("jobMetrics");
  if (!el) return;
  const cells = [
    ["Job ID", job.id],
    ["Project", tel.project_name || job.url],
    ["Status", job.status],
    ["Stage", (tel.current_stage || "—").replace(/_/g, " ")],
    ["Progress", `${job.progress || 0}%`],
    ["Current URL", tel.current_url || job.url],
    ["Files done", fmtNum(tel.files_downloaded)],
    ["Files left", fmtNum(tel.files_remaining)],
    ["Data", tel.data_downloaded_human || "0 B"],
    ["DL speed", tel.download_speed_human || "—"],
    ["Proc. speed", `${tel.processing_speed || 0} ops`],
    ["Started", tel.started_at_fmt || job.created_at],
    ["ETA", tel.eta_fmt || "—"],
    ["CPU", tel.cpu_percent != null ? `${tel.cpu_percent.toFixed(1)}%` : "—"],
    ["Memory", tel.memory_percent != null ? `${tel.memory_percent.toFixed(1)}%` : "—"],
  ];
  el.innerHTML = cells.map(([l, v]) =>
    `<div class="metric-cell"><span class="label">${l}</span><span class="value">${String(v).replace(/</g, "")}</span></div>`
  ).join("");
}

function renderPipeline(telemetry) {
  const el = $("pipelineVisual");
  if (!el || !telemetry?.pipeline) return;
  el.innerHTML = telemetry.pipeline.map((s) =>
    `<div class="pipe-step ${s.status}">
      <div class="pipe-label">${s.label}</div>
      <div class="pipe-pct">${s.progress || 0}%</div>
      <div class="pipe-msg">${(s.message || "").slice(0, 40)}</div>
    </div>`
  ).join("");
}

function renderExtraction(telemetry) {
  const ext = telemetry?.extraction || {};
  const el = $("extractionProgress");
  if (!el) return;
  const items = [
    ["HTML", ext.html], ["CSS", ext.css], ["JS", ext.js],
    ["Images", ext.images], ["Videos", ext.videos], ["Fonts", ext.fonts],
  ];
  el.innerHTML = items.map(([l, n]) =>
    `<div class="ext-item"><strong>${fmtNum(n ?? 0)}</strong><span>${l}</span></div>`
  ).join("");
}

function renderActiveDownloads(telemetry) {
  const el = $("activeDownloads");
  if (!el) return;
  const dl = telemetry?.active_downloads || [];
  el.innerHTML = dl.length
    ? `<div class="dl-recent-label">Recent files</div>` + dl.slice().reverse().map((d) =>
        `<div class="dl-row"><span>${d.folder}/${d.name}</span><span>${d.percent ?? 100}% · ${d.size_human || ""}</span></div>`
      ).join("")
    : "";
}

function renderCrawlStatus(job) {
  const el = $("crawlStatus");
  if (!el) return;
  const tel = job.telemetry || {};
  const crawl = tel.crawl || {};
  el.innerHTML = `
    <div><strong>Current URL</strong></div>
    <div class="current-url">${crawl.current_url || tel.current_url || job.url}</div>
    <div class="crawl-grid">
      <div>Pages Found: <strong>${fmtNum(crawl.pages_found ?? job.pages_total ?? 0)}</strong></div>
      <div>Pages Processed: <strong>${fmtNum(crawl.pages_processed ?? job.pages_done ?? 0)}</strong></div>
      <div>Pages Remaining: <strong>${fmtNum(crawl.pages_remaining ?? Math.max(0, (job.pages_total || 0) - (job.pages_done || 0)))}</strong></div>
      <div>Links Discovered: <strong>${fmtNum(crawl.links_discovered ?? tel.discovered_links ?? 0)}</strong></div>
      <div>Links Crawled: <strong>${fmtNum(crawl.links_crawled ?? tel.urls_crawled ?? job.pages_done ?? 0)}</strong></div>
    </div>`;
}

function renderActivityFeed(logs) {
  const el = $("activityFeed");
  if (!el) return;
  el.innerHTML = (logs || []).slice(-50).reverse().map((e) =>
    `<li><span class="time">[${e.time}]</span><span class="level-${e.level}">${e.message}</span></li>`
  ).join("") || "<li>No activity yet</li>";
  el.scrollTop = 0;
}

function renderErrorFeed(errors) {
  const el = $("errorFeed");
  if (!el) return;
  el.innerHTML = (errors || []).slice(-20).reverse().map((e) =>
    `<li><span class="time">[${e.time}]</span>${e.message}${e.retry_count ? ` (retry ${e.retry_count})` : ""}</li>`
  ).join("") || "<li>No errors</li>";
}

async function refreshGlobalStats() {
  try {
    const data = await api("/api/stats");
    lastGlobalStats = data.stats;
    renderGlobalStats(data.stats);
    renderSystemMonitor(data);
    if (data.history?.length) {
      chartHistory = data.history;
      renderCharts(chartHistory, lastJob);
    }
  } catch (_) { /* ignore */ }
}

function renderFilesExplorer(tree) {
  const el = $("filesExplorer");
  if (!el) return;
  el.textContent = (tree || []).join("\n") || "Files will appear as they are saved…";
}

async function refreshJobQueue() {
  try {
    const { jobs } = await api("/api/jobs");
    renderJobQueue(jobs || []);
  } catch (_) { /* ignore */ }
}

function statusLabel(job) {
  const tel = job.telemetry || {};
  const stage = (tel.current_stage || "").replace(/_/g, " ");
  if (job.status === "queued" && stage && stage !== "queued") {
    return stage;
  }
  const map = {
    scraping: "Scraping",
    analyzing: "Analyzing",
    converting: "Converting",
    ready: "Ready",
    converted: "Converted",
    failed: "Failed",
    queued: "Queued",
  };
  return map[job.status] || job.status;
}

function renderJobQueue(jobs) {
  const el = $("jobQueueList");
  if (!el) return;
  const filtered = jobs.filter((j) => {
    if (queueFilter === "active") return ACTIVE_STATUSES.has(j.status);
    if (queueFilter === "pending") return j.status === "queued" && !(j.telemetry?.current_stage && j.telemetry.current_stage !== "queued");
    if (queueFilter === "completed") return j.status === "ready" || j.status === "converted";
    if (queueFilter === "failed") return j.status === "failed";
    return true;
  });
  el.innerHTML = filtered.length
    ? filtered.map((j) => {
        const tel = j.telemetry || {};
        const pct = j.progress || tel.pipeline?.find((s) => s.status === "running")?.progress || 0;
        const stage = (tel.current_stage || j.status || "").replace(/_/g, " ");
        return `<div class="queue-item status-${j.status}">
          <div><strong>${tel.project_name || j.url}</strong><div class="q-id">${j.id}</div></div>
          <div class="q-status">${statusLabel(j)} · ${pct}%</div>
          <div style="grid-column:1/-1;font-size:0.72rem;color:var(--muted)">${stage} — ${j.message || ""}</div>
        </div>`;
      }).join("")
    : "<div class='queue-item'>No jobs in this queue</div>";
}

function renderOpsDashboard(job) {
  lastJob = job;
  show($("opsDashboard"));
  const tel = job.telemetry || {};
  renderJobMetrics(job);
  renderLiveDownloadMonitor(tel);
  renderAssetCounters(tel);
  renderPipeline(tel);
  renderExtraction(tel);
  renderActiveDownloads(tel);
  renderCrawlStatus(job);
  renderAiPanel(tel);
  renderWorkers(tel);
  renderActivityFeed(tel.activity_log);
  renderErrorSummary(tel);
  renderErrorFeed(tel.error_log);
  renderFilesExplorer(job.folder_tree);
  renderCharts(chartHistory, job);
  if (lastGlobalStats) renderGlobalStats(lastGlobalStats);
  if (!window._lastQueueRefresh || Date.now() - window._lastQueueRefresh > 2000) {
    window._lastQueueRefresh = Date.now();
    refreshJobQueue();
    refreshGlobalStats();
  }
}

function handleJobUpdate(job) {
  updateJobUI(job);
  renderOpsDashboard(job);
  const status = job.status;
  if (["queued", "scraping", "analyzing"].includes(status)) {
    setProgress(job.progress || 30, status === "analyzing" ? "Analyzing" : "Scraping", job.message);
    show($("progressSection"));
    show($("processSection"));
    if (job.downloads) renderDownloads(job.downloads, true);
    setAiWorking(true, job.message || "AI working...");
  } else if (status === "converting") {
    setProgress(job.progress || 50, "Converting", job.message);
    setAiWorking(true, "Building project...");
  } else if (status === "ready") {
    finishJobSuccess(job);
  } else if (status === "converted") {
    setProgress(100, "Converted", job.message);
    showResults(job);
    show($("downloadProjectBtn"));
    $("convertBtn").disabled = false;
    $("convertBtn").textContent = "Convert again";
    setAiWorking(false);
    closeSSE();
  } else if (status === "failed") {
    setAiWorking(false);
    closeSSE();
    show($("errorSection"));
    $("errorText").textContent = job.error || job.message;
    $("scrapeBtn").disabled = false;
    updateScrapeUi();
  }
}

function finishJobSuccess(job) {
  setAiWorking(false);
  closeSSE();
  clearInterval(pollTimer);
  setProgress(100, "Ready", job.message);
  show($("pagesSection"));
  show($("summarySection"));
  showResults(job);
  $("scrapeBtn").disabled = false;
  updateScrapeUi();
  if (job.preview_path) {
    openPreview(job.preview_path);
  }
}

document.querySelectorAll(".queue-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".queue-tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    queueFilter = btn.dataset.queue;
    refreshJobQueue();
  });
});

// System monitor + global stats — update every second
setInterval(async () => {
  try {
    await refreshGlobalStats();
  } catch (_) { /* ignore */ }
}, 1000);

connectGlobalSSE();
refreshGlobalStats();
refreshJobQueue();

async function api(path, options = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || res.statusText);
  }
  if (res.headers.get("content-type")?.includes("application/json")) return res.json();
  return res;
}

function openPreview(previewPath) {
  if (!currentJobId) {
    alert("No active job — scrape a site first.");
    return;
  }
  if (!previewPath) {
    alert("Preview not ready yet — wait until scraping finishes.");
    return;
  }
  const url = `/api/jobs/${currentJobId}/preview/${previewPath}?t=${Date.now()}`;
  const frame = $("previewFrame");
  frame.onload = () => {
    try {
      const doc = frame.contentDocument;
      if (doc && doc.body && doc.body.innerText.includes("File not found")) {
        console.warn("Preview 404:", url);
      }
    } catch (_) {}
  };
  frame.onerror = () => alert("Preview failed to load. Try Download mirror and open with START.sh");
  frame.src = url;
  show(frame);
  show($("closePreview"));
  document.body.classList.add("preview-open");
}

function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

function mdBold(text) {
  return (text || "").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function setProgress(pct, label, message) {
  $("progressFill").style.width = `${pct}%`;
  $("progressPct").textContent = `${pct}%`;
  if (label) $("statusLabel").textContent = label;
  if (message) $("statusMessage").textContent = message;
}

function setAiWorking(active, text) {
  const el = $("aiStatus");
  if (!el) return;
  if (active) {
    show(el);
    if (text && $("aiStatusText")) $("aiStatusText").textContent = text;
  } else {
    hide(el);
  }
}

function renderProcessSteps(steps) {
  if (!steps?.length) return;
  show($("processSection"));
  $("processSteps").innerHTML = steps
    .map((s) => {
      const stage = STAGE_LABELS[s.stage] || s.stage;
      const icon = s.status === "done" ? "✓" : s.status === "running" ? "●" : "○";
      const cls = s.status === "running" ? "step-running" : s.status === "done" ? "step-done" : "";
      return `<li class="${cls}">
        <span class="step-icon">${icon}</span>
        <div class="step-body">
          <strong>${stage}</strong>
          <span>${s.message}</span>
          <time>${s.time || ""}</time>
        </div>
      </li>`;
    })
    .join("");
}

function renderCustomerBanner(tech, pageInfo) {
  if (!tech?.platform) return;
  show($("customerBanner"));
  const lang = pageInfo?.language_label || tech.language_label || "";
  $("customerTitle").textContent = lang
    ? `${lang} · ${tech.platform} website`
    : `${tech.platform} website detected`;
  $("customerSummary").innerHTML = mdBold(tech.customer_summary || "");
  $("convertRecommendation").innerHTML = mdBold(tech.convert_recommendation || "");
}

function renderStats(pageInfo, tech, scrapeMode) {
  if (!pageInfo) return;
  show($("summarySection"));
  const cards = [
    { label: "Language", value: pageInfo.language_label || "—" },
    { label: "Platform", value: tech?.platform || "—" },
    {
      label: "Scrape mode",
      value: scrapeMode === "full" || pageInfo.scrape_mode === "full" ? "Full website" : "First page only",
    },
    {
      label: "Speed",
      value:
        pageInfo.speed === "quality"
          ? "Best quality"
          : pageInfo.speed === "balanced"
            ? "Balanced"
            : "Fast",
    },
    { label: "Pages scraped", value: pageInfo.pages_scraped ?? "—" },
    { label: "Pages total", value: pageInfo.pages_total ?? "—" },
    { label: "Links found", value: pageInfo.links_total ?? "—" },
    { label: "Photos", value: pageInfo.images_count ?? pageInfo.images_files ?? "—" },
    { label: "Videos", value: pageInfo.videos_count ?? pageInfo.videos_files ?? "—" },
    { label: "CSS files", value: pageInfo.css_files ?? "—" },
    { label: "JS files", value: pageInfo.js_files ?? "—" },
    { label: "Fonts", value: pageInfo.fonts_files ?? "—" },
    { label: "Icons", value: pageInfo.icons_files ?? "—" },
    { label: "JS chunks (_next)", value: pageInfo.framework_files ?? "—" },
    { label: "Total assets", value: `${pageInfo.total_asset_files || 0} files` },
    { label: "Asset size", value: pageInfo.total_asset_size_human || "—" },
    { label: "Scraped at", value: pageInfo.scraped_at || "—" },
  ];
  $("statsRow").innerHTML = cards
    .map((c) => `<div class="stat-card"><span class="stat-label">${c.label}</span><span class="stat-value">${c.value}</span></div>`)
    .join("");
}

function renderDownloads(downloads, live = false) {
  if (!downloads) return;
  show($("downloadsSection"));
  const badge = $("downloadLiveBadge");
  if (badge) badge.classList.toggle("hidden", !live);
  const total = downloads._total || {};
  const summary = $("downloadSummary");
  if (summary) {
    summary.textContent = `${total.files || 0} files · ${total.size_human || "0 B"} — CSS, JS, images, videos, fonts`;
  }
  const keys = ["css", "js", "images", "fonts", "videos", "icons", "_next", "static"];
  $("downloadsGrid").innerHTML = keys
    .map((key) => {
      const cat = downloads[key];
      if (!cat) return "";
      const files = cat.files || [];
      const fileList = files.slice(0, 25).map((f) =>
        `<li><span class="file-name" title="${f.path}">${f.name}</span><span class="file-size">${f.size_human}</span></li>`
      ).join("");
      const more = files.length > 25 ? `<li class="file-more">+ ${files.length - 25} more</li>` : "";
      return `<details class="download-category" ${files.length ? "open" : ""}>
        <summary><span class="cat-label">${cat.label}</span><span class="cat-count">${cat.count} files</span></summary>
        <ul class="file-list">${fileList}${more}</ul>
      </details>`;
    })
    .join("");
}

function renderFolderTree(paths) {
  if (!paths?.length) return;
  show($("folderSection"));
  $("folderTree").textContent = paths.join("\n");
}

function renderPages(pages, pagesDone, pagesTotal) {
  if (!pages?.length) return;
  show($("pagesSection"));
  const done = pagesDone ?? pages.filter((p) => p.status === "done").length;
  const total = pagesTotal ?? pages.length;
  const label = total === 1 ? "1 page" : `${done} / ${total} pages`;
  $("pagesCounter").textContent = label;
  const visible = total === 1 ? pages.filter((p) => p.status === "done") : pages;
  $("pagesList").innerHTML = visible
    .map((p) => {
      const icon =
        p.status === "done" ? "✓" : p.status === "scraping" ? "◉" : p.status === "failed" ? "✕" : "○";
      const preview =
        p.status === "done" && p.preview_path
          ? `<button type="button" class="btn-preview-page" data-path="${p.preview_path}">Preview</button>`
          : "";
      const src = p.source ? `<span class="page-source">${p.source}</span>` : "";
      const slug = p.slug ? `<span class="page-slug">/${p.slug}/</span>` : "";
      const kind = p.kind && p.kind !== "main"
        ? `<span class="page-kind">${p.kind === "blog_post" ? "blog post" : p.kind}</span>`
        : "";
      return `<li class="page-row page-${p.status}">
        <span class="page-icon">${icon}</span>
        <div class="page-info">
          <strong>${(p.title || p.name || p.slug || "").replace(/</g, "")}</strong>
          ${slug}
          <span class="page-url">${p.url}</span>
          ${src}${kind}
        </div>
        ${preview}
      </li>`;
    })
    .join("");
  $("pagesList").querySelectorAll(".btn-preview-page").forEach((btn) => {
    btn.addEventListener("click", () => openPreview(btn.dataset.path));
  });
}

function renderStacks(stacks) {
  const container = $("stackOptions");
  container.innerHTML = "";
  stacks.forEach((stack) => {
    const div = document.createElement("label");
    div.className = `stack-option${stack.recommended ? " selected" : ""}`;
    if (stack.recommended && !selectedStack) selectedStack = stack.id;
    div.innerHTML = `
      <input type="radio" name="stack" value="${stack.id}" ${stack.recommended ? "checked" : ""} />
      <div>
        <strong>${stack.name}</strong>
        <span>${stack.description}</span>
        ${stack.run_cmd ? `<code class="run-cmd">${stack.run_cmd}</code>` : ""}
        ${stack.recommended ? '<div class="rec">Recommended for this site</div>' : ""}
        ${stack.note ? `<div class="rec">${stack.note}</div>` : ""}
      </div>`;
    div.querySelector("input").addEventListener("change", () => {
      selectedStack = stack.id;
      document.querySelectorAll(".stack-option").forEach((el) => el.classList.remove("selected"));
      div.classList.add("selected");
    });
    container.appendChild(div);
  });
  $("convertBtn").disabled = !selectedStack;
}

function showResults(job) {
  show($("resultsSection"));
  const tech = job.tech || {};
  $("techPlatform").textContent = tech.platform || "Unknown";
  $("techConfidence").textContent = `Confidence: ${tech.confidence || "—"}`;
  $("techLanguage").textContent = tech.language_label
    ? `Language: ${tech.language_label}`
    : "";
  $("techPlugins").innerHTML = (tech.plugins || []).map((p) => `<span class="plugin-tag">${p}</span>`).join("");
  const arch = tech.architecture || {};
  const archEl = $("architectureSummary");
  if (archEl) {
    const items = [
      arch.page_count != null && `${arch.page_count} page${arch.page_count === 1 ? "" : "s"} analyzed`,
      arch.nav_links != null && arch.nav_links > 0 && `${arch.nav_links} navigation links`,
      arch.blog_pages != null && arch.blog_pages > 0 && `${arch.blog_pages} blog pages`,
      arch.sitemap_urls != null && arch.sitemap_urls > 0 && `${arch.sitemap_urls} sitemap URLs`,
    ].filter(Boolean);
    archEl.innerHTML = items.length
      ? items.map((s) => `<li>${s}</li>`).join("")
      : "<li>Architecture analysis pending</li>";
  }
  const signals = $("techSignals");
  signals.innerHTML = "";
  (tech.signals || []).forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    signals.appendChild(li);
  });
  renderStacks(tech.recommended_stacks || []);
  renderCustomerBanner(tech, job.page_info);
}

function updateJobUI(job) {
  renderProcessSteps(job.steps);
  if (job.pages?.length) renderPages(job.pages, job.pages_done, job.pages_total);
  if (job.page_info || job.tech) renderStats(job.page_info, job.tech, job.scrape_mode);
  if (job.downloads) renderDownloads(job.downloads, ACTIVE_STATUSES.has(job.status));
  if (job.folder_tree) renderFolderTree(job.folder_tree);
  if (job.tech && job.status === "ready") renderCustomerBanner(job.tech, job.page_info);
}

async function pollJob(jobId) {
  try {
    const job = await api(`/api/jobs/${jobId}`);
    handleJobUpdate(job);
  } catch (e) {
    clearInterval(pollTimer);
    show($("errorSection"));
    $("errorText").textContent = e.message;
    $("scrapeBtn").disabled = false;
    updateScrapeUi();
  }
}

function resetDashboard() {
  hide($("errorSection"));
  hide($("resultsSection"));
  hide($("downloadProjectBtn"));
  hide($("customerBanner"));
  hide($("processSection"));
  hide($("summarySection"));
  hide($("downloadsSection"));
  hide($("pagesSection"));
  hide($("progressSection"));
  hide($("opsDashboard"));
  closeSSE();
  setAiWorking(false);
  $("pagesList").innerHTML = "";
  $("processSteps").innerHTML = "";
  $("statsRow").innerHTML = "";
  $("downloadsGrid").innerHTML = "";
  hide($("folderSection"));
  $("folderTree").textContent = "";
  selectedStack = null;
}

$("scrapeBtn").addEventListener("click", async () => {
  const url = $("url").value.trim();
  if (!url) { $("url").focus(); return; }
  const mode = getScrapeMode();
  if (mode !== "full") {
    const ok = confirm("You selected 'First page only'. Only 1 page will be scraped.\n\nClick OK to continue, or Cancel and select 'Full website'.");
    if (!ok) return;
  }
  resetDashboard();
  show($("opsDashboard"));
  connectGlobalSSE();
  refreshGlobalStats();
  show($("progressSection"));
  const startMsg = mode === "full"
    ? "Auto-detecting & scraping full website..."
    : "Scraping first page only...";
  setProgress(5, "Starting", startMsg);
  setAiWorking(true, startMsg);
  $("scrapeBtn").disabled = true;
  $("scrapeBtn").textContent = mode === "full" ? "Scraping website…" : "Scraping page…";
  try {
    const max_pages = mode === "single" ? 1 : (parseInt($("maxPages").value, 10) || 100);
    const speed = $("scrapeSpeed")?.value || "fast";
    const auto_convert = mode === "full" && ($("autoConvert")?.checked ?? true);
    const { job_id } = await api("/api/scrape", {
      method: "POST",
      body: JSON.stringify({ url, wait_ms: 12000, mode, max_pages, speed, auto_convert, auto_convert_stack: "react-architecture" }),
    });
    currentJobId = job_id;
    connectSSE(job_id);
    pollTimer = setInterval(() => pollJob(job_id), 3000);
    pollJob(job_id);
    refreshJobQueue();
  } catch (e) {
    setAiWorking(false);
    show($("errorSection"));
    $("errorText").textContent = e.message;
    $("scrapeBtn").disabled = false;
    updateScrapeUi();
  }
});

$("convertBtn").addEventListener("click", async () => {
  if (!currentJobId || !selectedStack) return;
  $("convertBtn").disabled = true;
  $("convertBtn").textContent = "Converting…";
  hide($("downloadProjectBtn"));
  show($("progressSection"));
  show($("opsDashboard"));
  setProgress(10, "Converting", `Building ${STACK_LABELS[selectedStack] || selectedStack}...`);
  try {
    await api(`/api/jobs/${currentJobId}/convert`, { method: "POST", body: JSON.stringify({ stack: selectedStack }) });
    connectSSE(currentJobId);
    pollTimer = setInterval(() => pollJob(currentJobId), 2000);
  } catch (e) {
    show($("errorSection"));
    $("errorText").textContent = e.message;
    $("convertBtn").disabled = false;
    $("convertBtn").textContent = "Convert project";
  }
});

$("downloadScrapedBtn").addEventListener("click", () => {
  if (currentJobId) window.location.href = `/api/jobs/${currentJobId}/download?kind=scraped`;
});
$("downloadProjectBtn").addEventListener("click", () => {
  if (currentJobId) window.location.href = `/api/jobs/${currentJobId}/download?kind=converted`;
});
$("previewBtn").addEventListener("click", async () => {
  if (!currentJobId) return;
  const job = await api(`/api/jobs/${currentJobId}`);
  openPreview(job.preview_path);
});
$("closePreview").addEventListener("click", () => {
  hide($("previewFrame"));
  hide($("closePreview"));
  $("previewFrame").src = "about:blank";
  document.body.classList.remove("preview-open");
});
$("url").addEventListener("keydown", (e) => { if (e.key === "Enter") $("scrapeBtn").click(); });
