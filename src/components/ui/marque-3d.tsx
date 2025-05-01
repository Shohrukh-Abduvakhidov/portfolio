'use client'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
export function ThreeDMarqueeDemo() {
	const images = [
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuM0cKT-0QOfhJd0OelvqbamCwIC6W17u2Q&s',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoqmEC3hmAuYOLEFCitbByZz66sQxr4Gaiw&s',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPE22E4GN3ctPStJrzFgHmtvu6S87f2M3mg&s',
		'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg',
		'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTzqF8WN3P3IhRhQu19vkgKiMEXC7qcD93A&s',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Al9fl7_yid1TdvuEKlLSyjm3mzmlMJGI8g&s',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpM7goFTcdgcJH_AB44W7SSPSo6Oo7f8rzFA&s',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTbpcqXLz8N88_CBuYgJNGlGMzeN2tVpyRQ&s',
	]
	return (
		<div className='mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800'>
			<ThreeDMarquee images={images} />
		</div>
	)
}
