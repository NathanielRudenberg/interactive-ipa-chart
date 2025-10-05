import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    base: '/',
    plugins: [react(), svgr()],
    build: {
        outDir: 'build'
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            }
        }
    },
    optimizeDeps: {
        exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'],
    },
    server: {
        host: true,
        open: true,
        port: 3000,
        watch: {
            usePolling: true
        },
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
    }
})
