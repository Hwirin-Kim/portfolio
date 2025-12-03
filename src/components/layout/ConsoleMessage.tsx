"use client";

import { useEffect } from "react";

export default function ConsoleMessage() {
  useEffect(() => {
    const styles = {
      title: "color: #22C55E; font-size: 20px; font-weight: bold;",
      art: "color: #22C55E; font-size: 12px; font-family: monospace;",
      info: "color: #4ADE80; font-size: 14px;",
      link: "color: #60A5FA; font-size: 14px; text-decoration: underline;",
      warning: "color: #F59E0B; font-size: 12px;",
    };

    const asciiArt = `
██╗  ██╗██╗    ██╗██╗██████╗ ██╗███╗   ██╗
██║  ██║██║    ██║██║██╔══██╗██║████╗  ██║
███████║██║ █╗ ██║██║██████╔╝██║██╔██╗ ██║
██╔══██║██║███╗██║██║██╔══██╗██║██║╚██╗██║
██║  ██║╚███╔███╔╝██║██║  ██║██║██║ ╚████║
╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
    `;

    console.log("%c" + asciiArt, styles.art);
    console.log(
      "%c👋 안녕하세요! 콘솔까지 들여다보시다니, 개발자시군요!",
      styles.title
    );
    console.log("");
    console.log("%c📧 Email: kimhuirin@gmail.com", styles.info);
    console.log("%c🐙 GitHub: https://github.com/Hwirin-Kim", styles.link);
    console.log("%c📝 Blog: https://huirin.tistory.com", styles.link);
    console.log("");
    console.log(
      "%c💡 이 포트폴리오는 Next.js + TypeScript + Framer Motion으로 만들었습니다.",
      styles.info
    );
    console.log(
      "%c🚀 소스코드가 궁금하시다면 GitHub을 방문해주세요!",
      styles.info
    );
    console.log("");
    console.log(
      "%c⚠️ 버그를 발견하셨나요? 이슈로 알려주시면 감사하겠습니다!",
      styles.warning
    );
  }, []);

  return null;
}
