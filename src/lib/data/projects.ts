import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    shortDescription: "Full-stack e-commerce solution with real-time inventory",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js, featuring real-time inventory management, payment integration, and an admin dashboard. Optimized for performance with SSR and ISR.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    features: [
      "Real-time inventory tracking",
      "Stripe payment integration",
      "Admin dashboard with analytics",
      "Product search with Algolia",
      "Email notifications",
      "Mobile responsive design",
    ],
    technicalInsight: {
      problem:
        "Initial load time was too slow (3.5s) affecting conversion rates",
      analysis:
        "Identified issues: Large bundle size, blocking JS, unoptimized images",
      solution:
        "Implemented code splitting, image optimization with Next/Image, lazy loading, and SSR for critical content",
      results: {
        before: 3500,
        after: 1200,
        metric: "Load Time (ms)",
      },
    },
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "project-2",
    title: "Task Management App",
    shortDescription: "Collaborative task management with real-time updates",
    longDescription:
      "A modern task management application with drag-and-drop functionality, real-time collaboration, and advanced filtering. Built for teams to stay organized and productive.",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    images: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
    features: [
      "Drag & drop task management",
      "Real-time collaboration",
      "Team workspaces",
      "Advanced filters and search",
      "Custom tags and labels",
      "Activity timeline",
    ],
    technicalInsight: {
      problem:
        "Real-time updates causing excessive re-renders and poor performance",
      analysis:
        "Firebase listeners were triggering full component re-renders on every change",
      solution:
        "Implemented optimized Firestore queries, React.memo, and selective re-rendering with proper dependency arrays",
      results: {
        before: 250,
        after: 60,
        metric: "Re-renders per update",
      },
    },
    github: "https://github.com",
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    shortDescription: "Generate marketing content using GPT-4",
    longDescription:
      "An AI-powered content generation platform that helps marketers create blog posts, social media content, and ad copy using advanced language models.",
    tags: ["Next.js", "OpenAI", "Prisma", "shadcn/ui"],
    images: ["/images/project3-1.jpg", "/images/project3-2.jpg"],
    features: [
      "Multiple content types",
      "Tone and style customization",
      "Content templates",
      "Export to multiple formats",
      "Version history",
      "Team collaboration",
    ],
    demo: "https://demo.com",
  },
  {
    id: "project-4",
    title: "Portfolio CMS",
    shortDescription: "Headless CMS for creative professionals",
    longDescription:
      "A headless CMS specifically designed for creative professionals to showcase their work with beautiful templates and easy customization.",
    tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    images: ["/images/project4-1.jpg", "/images/project4-2.jpg"],
    features: [
      "Visual editor",
      "Custom templates",
      "SEO optimization",
      "Analytics integration",
      "Custom domain support",
      "Image optimization",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "project-5",
    title: "Fitness Tracker",
    shortDescription: "Track workouts and nutrition with data visualization",
    longDescription:
      "A comprehensive fitness tracking application with workout logging, nutrition tracking, progress visualization, and personalized recommendations.",
    tags: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    images: ["/images/project5-1.jpg", "/images/project5-2.jpg"],
    features: [
      "Workout logging",
      "Nutrition tracking",
      "Progress charts",
      "Goal setting",
      "Exercise library",
      "Social features",
    ],
    technicalInsight: {
      problem: "Mobile app had poor scrolling performance with large datasets",
      analysis:
        "Rendering all items at once caused memory issues and janky scrolling",
      solution:
        "Implemented FlatList with proper optimization, pagination, and data virtualization",
      results: {
        before: 30,
        after: 60,
        metric: "FPS during scroll",
      },
    },
  },
  {
    id: "project-6",
    title: "Documentation Platform",
    shortDescription: "Beautiful documentation with search and versioning",
    longDescription:
      "A modern documentation platform with full-text search, version control, and collaboration features. Perfect for technical teams.",
    tags: ["Next.js", "MDX", "Algolia", "GitHub API"],
    images: ["/images/project6-1.jpg", "/images/project6-2.jpg"],
    features: [
      "MDX support",
      "Full-text search",
      "Version control",
      "API reference generator",
      "Dark mode",
      "Interactive examples",
    ],
    github: "https://github.com",
  },
];

