/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: '4lges Registry',
    description: 'My Kasm workspaces collection.',
    icon: '/img/logo.svg',
    listUrl: 'https://4lge.github.io/kasm-4lge/',
    contactUrl: 'https://github.com/4lge/kasm-4lge/',
  },
  reactStrictMode: true,
  basePath: '/kasm-4lge/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
