import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        target: 'esnext',
        minify: false, // Disable minification for debugging
        outDir: 'dist'
    },
    base: './'
})