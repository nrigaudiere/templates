import fs from 'fs'

export const copyAssets = () => {
  /** Clear output folder */
  if (fs.existsSync('./output/assets')) {
    fs.rmSync('./output/assets', { recursive: true })
  }
  fs.mkdirSync('./output/assets')
  fs.copyFileSync('./node_modules/@mantine/core/cjs/index.css', './output/assets/mantine.css')
}
