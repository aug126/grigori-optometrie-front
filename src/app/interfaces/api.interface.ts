export type OptometricImages = OptometricImage[];

export interface HomeContent {
  id: number;
  title: string;
  text: string;
  created_at: string;
  updated_at: string;
}

export interface OptometricImage {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  image: Image;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  created_at: string;
  updated_at: string;
}

export interface Formats {
  thumbnail: Format;
}

export interface Format {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}
