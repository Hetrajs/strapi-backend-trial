import type { Schema, Attribute } from '@strapi/strapi';

export interface WomensProductWomensVariants extends Schema.Component {
  collectionName: 'components_womens_product_womens_variants';
  info: {
    displayName: 'Womens-Variants';
    description: '';
  };
  attributes: {
    Color: Attribute.String & Attribute.Required;
    Price: Attribute.BigInteger;
    originalPrice: Attribute.BigInteger;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Stocks: Attribute.BigInteger;
  };
}

export interface ProductNewArrivalVariant extends Schema.Component {
  collectionName: 'components_product_new_arrival_variants';
  info: {
    displayName: 'NewArrival-Variant';
    description: '';
  };
  attributes: {
    Color: Attribute.String & Attribute.Required;
    Price: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '1';
        },
        string
      >;
    OriginalPrice: Attribute.BigInteger &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: '1';
        },
        string
      >;
    Images: Attribute.Media<'images', true> & Attribute.Required;
    Stocks: Attribute.BigInteger;
  };
}

export interface MensProductMensVariants extends Schema.Component {
  collectionName: 'components_mens_product_mens_variants';
  info: {
    displayName: 'Mens-Variants';
    description: '';
  };
  attributes: {
    Color: Attribute.String;
    Price: Attribute.BigInteger;
    originalPrice: Attribute.BigInteger;
    Images: Attribute.Media<'images', true> & Attribute.Required;
    Stocks: Attribute.BigInteger;
  };
}

export interface KidsProductKidsVariants extends Schema.Component {
  collectionName: 'components_kids_product_kids_variants';
  info: {
    displayName: 'Kids-Variants';
    description: '';
  };
  attributes: {
    Color: Attribute.String;
    Price: Attribute.BigInteger;
    originalPrice: Attribute.BigInteger;
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Stocks: Attribute.BigInteger;
  };
}

export interface FeaturedProductFeaturedVariants extends Schema.Component {
  collectionName: 'components_featured_product_featured_variants';
  info: {
    displayName: 'Featured-Variants';
    description: '';
  };
  attributes: {
    Color: Attribute.String;
    Price: Attribute.BigInteger & Attribute.Required;
    originalPrice: Attribute.BigInteger;
    Images: Attribute.Media<'images', true> & Attribute.Required;
    Stocks: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'womens-product.womens-variants': WomensProductWomensVariants;
      'product.new-arrival-variant': ProductNewArrivalVariant;
      'mens-product.mens-variants': MensProductMensVariants;
      'kids-product.kids-variants': KidsProductKidsVariants;
      'featured-product.featured-variants': FeaturedProductFeaturedVariants;
    }
  }
}
