import localFont from 'next/font/local';

export const chillax = localFont({
  src: [
    { path: '../public/fonts/Chillax-Variable.woff2', style: 'normal' },
    { path: '../public/fonts/Chillax-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Chillax-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Chillax-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/Chillax-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/Chillax-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/Chillax-Extralight.woff2', weight: '200', style: 'normal' },
  ],
  variable: '--font-chillax',
  display: 'swap',
  preload: true,
});
