'use client'
import React from 'react'
import { WavyBackground } from '../ui/wavy-background'

export function BackGround({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<WavyBackground className='max-w-4xl mx-auto pb-40 bg-transparent'>
			{children}
		</WavyBackground>
	)
}
