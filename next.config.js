/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 정적 배포를 위한 설정 (GitHub Pages, Netlify 등)
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {
    unoptimized: true, // Static export는 Image 최적화 미지원
  },
};

module.exports = nextConfig;
