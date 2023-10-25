export interface Category {
  id: number;
  name: string;
}

export interface Format {
  res: string;
  size: number;
}

export interface Video {
  id: number;
  catIds: number[];
  name: string;
  formats: {key: Format};
}

export interface Author {
  id: number;
  name: string;
  videos: Video[];
}

export interface ProcessedVideo {
  id: number;
  name: string;
  author: string;
  categories: string[];
  highestFormat: string;
  releaseDate: string;
}
