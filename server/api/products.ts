const productsData = [
  {
    image: '/assets/images/home/img-01.webp',
    alt: 'Product 1',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-02.webp',
    alt: 'Product 2',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-03.webp',
    alt: 'Product 3',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-04.webp',
    alt: 'Product 4',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-01.webp',
    alt: 'Product 5',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-02.webp',
    alt: 'Product 6',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-03.webp',
    alt: 'Product 7',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-04.webp',
    alt: 'Product 8',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-01.webp',
    alt: 'Product 9',
    title: 'Team A vs Team B',
    subtitle: 'BLV NONAME',
  },
  {
    image: '/assets/images/home/img-02.webp',
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