/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
	text: string
	className?: string
	delay?: number
	staggerChildren?: number
}

export default function AnimatedText({
	text,
	className = '',
	delay = 0,
	staggerChildren = 0.02,
}: AnimatedTextProps) {
	
	const words = text.split(' ')

	const shouldAnimateLetters = text.length < 10

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delay || 0,
			},
		}),
	}

	const child = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
	}

	if (shouldAnimateLetters) {
		return (
			<motion.div
				className={className}
				variants={container}
				initial='hidden'
				animate='visible'
			>
				{text.split('').map((char, index) => (
					<motion.span
						key={index}
						variants={child}
						style={{ display: 'inline-block' }}
					>
						{char === ' ' ? '\u00A0' : char}
					</motion.span>
				))}
			</motion.div>
		)
	}

	return (
		<motion.p
			className={className}
			variants={container}
			initial='hidden'
			animate='visible'
		>
			{words.map((word, index) => (
				<motion.span
					key={index}
					variants={child}
					style={{ display: 'inline-block' }}
				>
					{word}
					{index !== words.length - 1 && '\u00A0'}
				</motion.span>
			))}
		</motion.p>
	)
}
