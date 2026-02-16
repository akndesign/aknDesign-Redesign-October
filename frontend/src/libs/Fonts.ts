import localFont from 'next/font/local';

export const InstrumentSerif = localFont({
  variable: '--font-instrument-serif',
  src: [
    {
      path: '../../public/fonts/InstrumentSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InstrumentSerif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
});


export const InstrumentSans = localFont({
  variable: '--font-instrument-sans',
  src: [
    {
      path: '../../public/fonts/InstrumentSans-VariableFont_wdth,wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/InstrumentSans-Italic-VariableFont_wdth,wght.ttf',
      style: 'italic',
    },
  ],
});

export const GeistMono = localFont({
  variable: '--font-geist-mono',
  src: [
    {
      path: '../../public/fonts/Geist-VariableFont_wght.ttf',
      style: 'normal',
    },
  ],
});
