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
    server: {
        host: true,
        open: true,
        port: 3000,
        watch: {
            usePolling: true
        }
    }
})