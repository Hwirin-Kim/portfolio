/** @type {import('next').NextConfig} */

// GitHub Pages 배포 시에만 basePath 적용
const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGitHubPages ? "/portfolio" : "";

console.log("Building with basePath:", basePath);

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  // 클라이언트에서 basePath 접근 가능하도록 환경 변수 노출
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
