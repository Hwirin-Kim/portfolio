"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // 브라우저의 스크롤 복원 기능 비활성화
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // 페이지 로드 시 스크롤 맨 위로
    window.scrollTo(0, 0);
  }, []);

  return null;
}

