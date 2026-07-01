"""Zip export helpers."""

from __future__ import annotations

import shutil
import tempfile
from pathlib import Path


def zip_folder(source: Path, zip_path: Path) -> Path:
    zip_path.parent.mkdir(parents=True, exist_ok=True)
    base = zip_path.with_suffix("")
    if base.exists():
        shutil.rmtree(base)
    archive = shutil.make_archive(str(base), "zip", root_dir=source)
    return Path(archive)


def zip_site_or_project(folder: Path, name: str, projects_root: Path) -> Path:
    zip_path = projects_root / "downloads" / f"{name}.zip"
    return zip_folder(folder, zip_path)
