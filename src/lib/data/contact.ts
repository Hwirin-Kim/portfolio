import { Mail, Github, MessageCircle, LucideIcon } from "lucide-react";

// Contact Method 인터페이스
export interface ContactMethod {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  color: string;
}

// FAQ 인터페이스
export interface FAQ {
  q: string;
  a: string;
}

// Contact Methods 데이터
export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: "kimhuirin@gmail.com",
    href: "mailto:kimhuirin@gmail.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Hwirin-Kim",
    href: "https://github.com/Hwirin-Kim",
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: MessageCircle,
    label: "Tistory",
    value: "Blog",
    href: "https://huirin.tistory.com/",
    color: "from-blue-600 to-blue-700",
  },
];

// FAQ 데이터
export const faqs: FAQ[] = [
  {
    q: "프로젝트 의뢰가 가능한가요?",
    a: "네, 가능합니다! 프로젝트 규모와 요구사항에 따라 협의 가능합니다.",
  },
  {
    q: "응답까지 얼마나 걸리나요?",
    a: "일반적으로 24-48시간 이내에 답변드립니다.",
  },
  {
    q: "원격 근무가 가능한가요?",
    a: "네, 원격 근무 및 하이브리드 모두 가능합니다.",
  },
  {
    q: "어떤 프로젝트를 선호하시나요?",
    a: "사용자 경험과 성능 최적화가 중요한 웹 애플리케이션 프로젝트를 선호합니다.",
  },
];

// 이메일 주소 (빠른 연락용)
export const primaryEmail = "kimhuirin@gmail.com";
