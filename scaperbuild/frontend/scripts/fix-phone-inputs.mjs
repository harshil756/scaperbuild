import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const SRC = join(ROOT, 'src')

const ITI_BLOCK =
  /<div className="iti iti--allow-dropdown[^"]*">[\s\S]*?<input autoComplete="off" className="elementor-field elementor-size-(lg|md) elementor-field-textual iti__tel-input"[^>]*id="([^"]*)"[^>]*name="([^"]*)"[^>]*\s*\/?>(?:<\/div>)?/g

function walk(dir) {
  const entries = readdirSync(dir)
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory()) {
      files.push(...walk(fullPath))
    } else if (entry.endsWith('.jsx')) {
      files.push(fullPath)
    }
  }
  return files
}

let updated = 0

for (const file of walk(SRC)) {
  let content = readFileSync(file, 'utf8')
  if (!content.includes('iti--allow-dropdown')) {
    continue
  }

  const original = content
  content = content.replace(
    ITI_BLOCK,
    '<PhoneNumberInput id="$2" name="$3" size="$1" />',
  )

  if (content === original) {
    console.warn(`No replacements in ${file}`)
    continue
  }

  if (!content.includes("import PhoneNumberInput")) {
    const importLine = "import PhoneNumberInput from '../components/PhoneNumberInput.jsx'\n"
    const depth = file.split('/src/')[1].split('/').length - 1
    const relative = depth === 1 ? './components/PhoneNumberInput.jsx' : '../'.repeat(depth - 1) + 'components/PhoneNumberInput.jsx'
    content = content.replace(
      /^(import .+\n)/,
      `import PhoneNumberInput from '${relative}'\n$1`,
    )
  }

  writeFileSync(file, content)
  updated += 1
  console.log(`Updated ${file}`)
}

console.log(`Done. Updated ${updated} files.`)
