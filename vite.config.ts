import laravel from 'laravel-vite-plugin'

const config = {
  optimizeDeps: {
    include: ['htm/mini'],
  },
  server: {
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
    },
  },
  resolve: {
    alias: {
      '@css': '/resources/css',
      '@': '/resources/ts',
      '@elements': '/resources/ts/elements',
      '@components': '/resources/ts/components',
      '@functions': '/resources/ts/functions',
      '@modules': '/resources/ts/modules',
      '@api': '/resources/ts/api',
    },
  },
  base: './',
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Désactive la séparation du vendor
      },
    },
  },
  plugins: [
    laravel({
      input: [
        'resources/css/app.scss',
        'resources/css/admin.scss',
        'resources/ts/app.ts',
        'resources/ts/admin.ts',
      ],
      refresh: true,
    }),
  ],
}

module.exports = config
