import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import inertia from '@inertiajs/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scripts/main.tsx'],
            refresh: true,
        }),
        inertia(),
    ],
    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, './resources/components'),
        }
    }
});
