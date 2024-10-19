import localFont from 'next/font/local';

export const RoobertTRIAL = localFont({
	variable: '--font-roobert',
	src: [
		{
			path: '../../public/fonts/RoobertTRIAL-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/RoobertTRIAL-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
});

export const NeueMontreal = localFont({
	variable: '--font-neue-montreal',
	src: [
		{
			path: '../../public/fonts/NeueMontreal-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/NeueMontreal-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
});

export const GtEsti = localFont({
	variable: '--font-gt-esti',
	src: '../../public/fonts/GT-Eesti-Display-Medium-Trial.woff2',
	weight: '500',
	style: 'normal',
});

export const GtAlpina = localFont({
	variable: '--font-gt-alpina',
	src: [
		{
			path: '../../public/fonts/GT-Alpina-Standard-Medium-Italic-Trial.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GT-Alpina-Standard-Light-Trial.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GT-Alpina-Standard-Bold-Italic-Trial.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GT-Alpina-Condensed-Medium-Italic-Trial.woff2',
			weight: '500',
			style: 'italic',
		},
	],
});
