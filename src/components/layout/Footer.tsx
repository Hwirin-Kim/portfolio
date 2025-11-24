import { Github, Linkedin, Mail, Rss } from "lucide-react";
import { CONSTANT } from "@/constant/constant";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © 2025 Portfolio. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={CONSTANT.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={CONSTANT.BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-primary transition-colors"
            >
              <Rss className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${CONSTANT.EMAIL}`}
              className="text-white/50 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
