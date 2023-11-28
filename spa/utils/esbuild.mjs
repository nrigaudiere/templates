import process from 'process'
import yargs from 'yargs'

import esbuild from 'esbuild'
import { classModules } from 'esbuild-plugin-class-modules'
import { sassPlugin } from 'esbuild-sass-plugin'

import config from '../.esbuild.json' assert { type: 'json' }
import { copyAssets } from './copy.mjs'

const argv = yargs(process.argv).argv

copyAssets()

if (argv.watch) {
  const watch = async () => {
    const ctx = await esbuild.context({
      ...config,
      sourcemap: true,
      plugins: [classModules(), sassPlugin()],
    })

    ctx.watch()
  }

  watch()
} else {
  const build = async () => {
    try {
      await esbuild.build({
        ...config,
        minify: true,
        plugins: [classModules(), sassPlugin()],
      })
    } catch (error) {
      process.exit(1)
    }
  }

  build()
}
