// types/index.ts

export interface GalleryImageType {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: { src: string; alt: string };
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  year: number;
}