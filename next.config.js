/** @type {import('next').NextConfig} */

// GitHub Actions 배포 시에만 basePath 적용
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/portfolio" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
