import type React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './components/navbar/navbar'
import { SmoothCursor } from '@/components/ui/smooth-cursor'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'Портфолио',
	description: 'Современное портфолио с анимациями Framer Motion',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<Navbar />
				<SmoothCursor/>
				{children}
			</body>
		</html>
	)
}
