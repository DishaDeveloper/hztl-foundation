export interface ProductCardField {
  value: string;
}

export interface ImageValue {
  src: string;
  alt: string;
  width: string;
  height: string;
  extension: string;
}

export interface ImageField {
  value: ImageValue;
}

export interface LinkValue {
  text: string;
  anchor: string;
  linktype: string;
  class: string;
  title: string;
  target: string;
  querystring: string;
  id: string;
  href: string;
}

export interface LinkField {
  value: LinkValue;
}

export interface ProductInformation {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    addtoCart: ProductCardField;
    buyOnline: ProductCardField;
    wheretoBuy: ProductCardField;
    ean: ProductCardField;
    price: ProductCardField;
    productID: ProductCardField;
    productline: ProductCardField;
    variant: ProductCardField;
    additionalDetails: ProductCardField;
    cta: LinkField;
    description: ProductCardField;
    headline: ProductCardField;
    label: ProductCardField | null;
    primaryImage: ImageField;
    ratingAndReview: ProductCardField;
    secondaryImages: Array<{
      id: string;
      url: string;
      name: string;
      displayName: string;
      fields: {
        image: ImageField;
      };
    }>;
    socialShare: ProductCardField;
    variantItems: any[];
    disclaimerText: ProductCardField;
  };
}

export interface ProductCardItem {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    badge: ProductCardField | null;
    productInformation: ProductInformation;
    ctaLink: LinkField;
  };
}

export interface ProductCardFields {
  productCards: ProductCardItem[];
  description: ProductCardField;
  primaryCTA: LinkField;
  title: ProductCardField;
  disclaimerText: ProductCardField;
}

export interface ProductCardParams {
  autoPlay: string;
  isBadgeFullWidth: string;
  GridParameters: string;
  DynamicPlaceholderId: string;
  FieldNames: string;
}
