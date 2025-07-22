// src/app/components/category-card/category-card.model.ts

export interface ImageFieldValue {
  src: string;
  alt: string;
  width: string;
  height: string;
  extension: string;
}

export interface LinkFieldValue {
  href: string;
  text?: string;
}

export interface CategoryCardFields {
  title: { value: string };
  description: { value: string };
  image: { value: ImageFieldValue };
  ctaLink: { value: LinkFieldValue };
}

export interface CategoryCard {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: CategoryCardFields;
}

export interface PrimaryCTA {
  text: string;
  href: string;
}
