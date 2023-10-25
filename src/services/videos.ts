import { getCategories } from './categories';
import { getAuthors } from './authors';
import { ProcessedVideo } from '../common/interfaces';
import { getHighestRes, getRandomDate } from '../common/utils';

export const getVideos = async (): Promise<ProcessedVideo[]> => {
  const [categories, authors] = await Promise.all([getCategories(), getAuthors()]);

  let processedVideos: ProcessedVideo[] = [];

  authors.forEach((author) => {
    const videos = author.videos.map((video) => {
      const videoCategories = video.catIds.map((catId) => categories[catId]?.name || 'N/A');
      const highestFormat = getHighestRes(video.formats);

      return {
        id: video.id,
        name: video.name,
        author: author.name,
        categories: videoCategories,
        highestFormat,
        releaseDate: getRandomDate(),
      } as ProcessedVideo;
    });

    processedVideos = [...processedVideos, ...videos];
  });

  return processedVideos;
};
