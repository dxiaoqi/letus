/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    domains: [], // 设置为空数组，允许加载任何域名下的图片
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://www.streammedia.cn/api/:path*', // Proxy to Backend
      },
    ]
  },
}

module.exports = nextConfig
