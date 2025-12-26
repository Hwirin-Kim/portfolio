"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" prefetch={false} className="text-lg md:text-xl font-bold text-primary flex-shrink-0">
          Portfolio
        </Link>

        <ul className="flex items-center gap-3 sm:gap-4 md:gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                prefetch={false}
                className={cn(
                  "text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  pathname === item.href
                    ? "text-primary"
                    : "text-white/70"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

