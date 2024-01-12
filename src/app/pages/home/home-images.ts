import { Image, OptometricImage } from 'src/app/interfaces/api.interface';

export const homeImages: OptometricImage[] = [
  {
    id: 1,
    title: 'img 1',
    image_width: 5,
    image: {
      url: 'https://www.thomson-software-solutions.com/OnlineResources/Test%20Chart%202016/Help/lib/NewItem177.png',
    },
    // preview: {
    //   url: 'https://docs.aws.amazon.com/assets/r/images/aws_logo_dark.png',
    // }
  },
  {
    id: 2,
    title: 'img 2',
    image_width: 5,
    image: {
      url: 'https://www.thomson-software-solutions.com/OnlineResources/Test%20Chart%202016/Help/lib/NewItem176.png',
    },
    // preview: {
    //   url: 'https://docs.aws.amazon.com/assets/r/images/aws_logo_dark.png',
    // }
  },
];
