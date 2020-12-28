import { environment } from 'src/environments/environment';
import { Image } from '../interfaces/api.interface';

export const getImage = (
  image: Image,
  format?: 'large' | 'medium' | 'small' | 'thumbnail'
) => {
  return (
    environment.api +
    (format
      ? image.formats[format]?.url || image.formats.thumbnail?.url
      : image.url)
  );
};
