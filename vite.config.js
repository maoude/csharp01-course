import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ import path module
export default defineConfig(function (_a) {
    var command = _a.command;
    var base = command === 'build' ? '/csharp01-course/' : '/';
    return {
        plugins: [react()],
        base: base,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'), // ✅ Add this line
            },
        },
        server: {
            port: 3000,
            open: true
        },
        build: {
            outDir: 'dist'
        }
    };
});
