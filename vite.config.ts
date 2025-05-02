import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/// <reference types="vitest/config" />
export default defineConfig({
    plugins: [react()],
    test: {
        // 👋 add the line below to add jsdom to vite
        environment: 'jsdom',
    },
});

