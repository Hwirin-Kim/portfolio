/**
 * 정적 에셋 경로에 basePath를 적용합니다.
 * GitHub Pages 배포 시 /portfolio 접두사가 필요합니다.
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // 이미 basePath가 포함되어 있거나 외부 URL인 경우 그대로 반환
  if (path.startsWith(basePath) || path.startsWith("http")) {
    return path;
  }

  // 경로가 /로 시작하지 않으면 추가
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
