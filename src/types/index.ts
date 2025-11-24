export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  images: string[];
  features: string[];
  technicalInsight?: {
    problem: string;
    analysis: string;
    solution: string;
    results: {
      before: number;
      after: number;
      metric: string;
    };
  };
  github?: string;
  demo?: string;
}

