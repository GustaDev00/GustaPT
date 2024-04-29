export interface ProjectsProps {
  projects: {
    link: {
      href: string;
      target: string;
      title: string;
      rel?: string;
    };
    img: {
      src: string;
      alt: string;
    };
    technology: string[];
  }[];
}
