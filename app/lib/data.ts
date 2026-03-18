// lib/data.ts
import type { GalleryImageType, BlogPost, SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Mi Sitio Web SENA",
  description: "Galería, blog y contacto - Taller SENA",
  url: "https://mi-sitio.azurewebsites.net",
  author: "SENA ADSO",
  year: new Date().getFullYear(),
};

export const galleryImages: GalleryImageType[] = [
  { id: 1, src: "/img/img1.jpg", alt: "Descripción 1", width: 1024, height: 768 },
  { id: 2, src: "/img/img2.jpg", alt: "Descripción 2", width: 1024, height: 768 },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "mi-primer-post",
    title: "Iniciando con Next.js",
    date: "18 de Marzo, 2026",
    excerpt: "Aprendiendo a configurar el entorno local...",
    image: { src: "/img/blog1.jpg", alt: "Post 1" }
  }
];