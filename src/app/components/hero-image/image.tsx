'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'


import jsLogo from '../../assets/js_logo.webp'
import reactLogo from '../../assets/react-logo.webp'
import htmlLogo from "../../assets/html-logo.webp"
import cssLogo from "../../assets/css-logo.webp"
import gitHubLogo from "../../assets/git-hub-logo.webp"
import tailwindLogo from "../../assets/tailwind-css-logo.webp"
import tsLogo from "../../assets/ts-logo.webp"
import sassLogo from "../../assets/sass-logo.webp"
import nextJsLogo from "../../assets/next-js-logo.png"
import { BorderBeam } from '@/components/magicui/border-beam'
const images = [jsLogo, reactLogo, htmlLogo, cssLogo , gitHubLogo , tailwindLogo, tsLogo, sassLogo, nextJsLogo]

export default function HeroImage() {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 4000) 

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]'>
			<BorderBeam/>
			<div className='relative z-10 h-full w-full overflow-hidden rounded-md'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className='absolute inset-0 h-full w-full'
					>
						<Image
							src={images[index]}
							alt='Слайд'
							fill
							className='object-cover rounded-md'
							priority
						/>
					</motion.div>
				</AnimatePresence>

				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: '300%' }}
					transition={{
						repeat: Infinity,
						repeatType: 'loop',
						duration: 3.5,
						ease: 'linear',
					}}
					className='absolute top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-lg'
				/>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 0.15, scale: 1.2 }}
				transition={{ duration: 1, delay: 0.3 }}
				className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-3xl'
			/>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 0.8, x: 0 }}
				transition={{ duration: 0.8, delay: 1 }}
				className='absolute -right-4 top-1/4 h-20 w-20 rounded-full border-2 border-cyan-400/30'
			/>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 0.8, x: 0 }}
				transition={{ duration: 0.8, delay: 1.2 }}
				className='absolute -left-8 bottom-1/4 h-16 w-16 rounded-full border border-cyan-400/20'
			/>
		</div>
	)
}
