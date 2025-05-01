'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ShineBorder } from '@/components/magicui/shine-border'
import { TextReveal } from '@/components/magicui/text-reveal'

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'About me', href: '/about' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Contact', href: '/contact' },
]

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [activeItem, setActiveItem] = useState('Home')

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 text-[#fff] ${
				scrolled ? 'bg-slate-900/90 backdrop-blur-md' : 'bg-transparent'
			}`}
		>
			<ShineBorder className='opacity-50' />
			<div className='container mx-auto flex h-20 items-center justify-between px-4'>
				<Link href='/' className='group relative text-2xl font-bold text-white'>
					<ShineBorder className='rounded-full'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='relative px-6 py-2'
						>
							<TextReveal className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
								My Portfolio
							</TextReveal>
						</motion.div>
					</ShineBorder>
				</Link>

				<nav className='hidden md:block'>
					<ul className='flex space-x-8'>
						{navItems.map((item, index) => (
							<motion.li
								key={item.name}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
								className='relative'
							>
								<Link
									href={item.href}
									className='group relative text-sm font-medium transition-colors hover:text-cyan-400'
									onClick={() => setActiveItem(item.name)}
								>
									<span className='relative z-10'>{item.name}</span>
									{activeItem === item.name && (
										<motion.span
											layoutId='navbar-underline'
											className='absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-blue-500'
											transition={{
												type: 'spring',
												stiffness: 380,
												damping: 30,
											}}
										/>
									)}
									<span className='absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full' />
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>

				<motion.button
					className='z-50 md:hidden'
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? 'Close menu' : 'Open menu'}
					whileTap={{ scale: 0.9 }}
				>
					<AnimatePresence mode='wait'>
						{isOpen ? (
							<motion.div
								key='close'
								initial={{ opacity: 0, rotate: -90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: 90 }}
								transition={{ duration: 0.2 }}
							>
								<X className='h-6 w-6 text-cyan-400' />
							</motion.div>
						) : (
							<motion.div
								key='menu'
								initial={{ opacity: 0, rotate: 90 }}
								animate={{ opacity: 1, rotate: 0 }}
								exit={{ opacity: 0, rotate: -90 }}
								transition={{ duration: 0.2 }}
							>
								<Menu className='h-6 w-6 text-cyan-400' />
							</motion.div>
						)}
					</AnimatePresence>
				</motion.button>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							className='fixed inset-0 z-40 flex py-[130px] items-center justify-center bg-slate-900/95 backdrop-blur-md md:hidden'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<motion.nav
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.3, delay: 0.1 }}
							>
								<ul className='flex flex-col items-center space-y-8 text-center'>
									{navItems.map((item, index) => (
										<motion.li
											key={item.name}
											initial={{ opacity: 0, y: 20 }}
											animate={{
												opacity: 1,
												y: 0,
												transition: { delay: 0.1 + index * 0.1 },
											}}
											exit={{
												opacity: 0,
												y: 10,
												transition: { delay: 0.05 * (navItems.length - index) },
											}}
										>
											<Link
												href={item.href}
												className='group relative text-2xl font-medium'
												onClick={() => {
													setActiveItem(item.name)
													setIsOpen(false)
												}}
											>
												<span
													className={`relative z-10 transition-colors duration-300 ${
														activeItem === item.name
															? 'text-cyan-400'
															: 'text-white group-hover:text-cyan-300'
													}`}
												>
													{item.name}
												</span>
												<span className='absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full' />
											</Link>
										</motion.li>
									))}
								</ul>
							</motion.nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	)
}
