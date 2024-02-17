import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            include: [/\.jpe?g$/, /\.png$/, /\.gif$/, /\.svg$/], // Добавляем расширение .svg среди обрабатываемых файлов
            options: {
                svgoOptions: {}, // Передайте дополнительные параметры оптимизации SVG-изображений
            },
        }),
    ],
    // Остальная часть вашей конфигурации
    // ...
});
