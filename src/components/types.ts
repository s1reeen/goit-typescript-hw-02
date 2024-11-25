export interface Image {
  id: string;
  alt_description: string;
  urls: { regular: string; small: string };
}

export interface onModal {
  alt_description: string;
  regular: string;
}
