import { fileURLToPath } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import createExternal from 'vite-plugin-external'
import pkg from './package.json'

export default defineConfig({
    base: '/',
    publicDir: './public',
    build: {
        target: 'es2020',
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: 'index',
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@test': fileURLToPath(new URL('./test', import.meta.url)),
        },
    },
    plugins: [
        createExternal({
            nodeBuiltins: true,
            externalizeDeps: Object.keys((pkg as any).peerDependencies || {}).concat(
                Object.keys((pkg as any).devDependencies || {})
            ),
        }),
        dts({ entryRoot: 'src' }),
    ],
})
