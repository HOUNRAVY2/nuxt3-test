const productsData = [
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_01_53aeadc5e2.webp',
    alt: 'Product 1',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_02_3b9d07530a.webp',
    alt: 'Product 2',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_03_6c6e8b17d4.webp',
    alt: 'Product 3',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_04_9b9e6bda90.webp',
    alt: 'Product 4',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_01_53aeadc5e2.webp',
    alt: 'Product 5',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_02_3b9d07530a.webp',
    alt: 'Product 6',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_03_6c6e8b17d4.webp',
    alt: 'Product 7',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_04_9b9e6bda90.webp',
    alt: 'Product 8',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_01_53aeadc5e2.webp',
    alt: 'Product 9',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: 'https://celebrated-benefit-bc2e837f62.media.strapiapp.com/img_02_3b9d07530a.webp',
    alt: 'Product 10',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
];

import { defineEventHandler } from 'h3';
export default defineEventHandler((event) => {
  console.log('API endpoint /api/header was hit at:', new Date().toISOString());

  return productsData;
});