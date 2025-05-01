/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	AnimatePresence,
} from 'framer-motion'
import {
	ArrowRight,
	Code,
	Layers,
	Palette,
	Github,
	Twitter,
	Linkedin,
	Facebook,
	ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import AnimatedBackground from '@/app/components/animated-background/background'
import AnimatedText from '@/app/components/animated-text/text'
import HeroImage from './components/hero-image/image'
import VSCodeIcon from '@/app/assets/vs-code.webp'
import CSSIcon from '@/app/assets/css-logo.webp'
import JSIcon from '@/app/assets/js_logo.webp'
import somonChat from '@/app/assets/somon-chat.png'
import InstagramLogo from '@/app/assets/instagram-logo.webp'
import { ThreeDMarqueeDemo } from '@/components/ui/marque-3d'
import { CanvasRevealEffectDemo } from '@/components/ui/canvas'



export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false)
	const { scrollYProgress } = useScroll()
	const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
	const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])
	const techStackRef = useRef(null)
	const isInView = useInView(techStackRef, { once: false, margin: '-100px' })

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	return (
		<div className='relative min-h-screen'>
			<AnimatedBackground />

			{/* Hero Section */}
			<section className='relative min-h-screen flex items-center pt-16'>
				<div className='container mx-auto px-4'>
					<div className='w-[90%] m-auto flex lg:flex-row flex-col items-center'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
							transition={{ duration: 0.8 }}
							className='z-10 space-y-6'
						>
							<div className='overflow-hidden'>
								<AnimatedText
									text='Hello everyone'
									className='text-xl font-medium text-primary'
									delay={0.2}
								/>
							</div>

							<div className='overflow-hidden'>
								<AnimatedText
									text='Abduvakhidov Shohrukh'
									className='text-4xl font-heading font-bold leading-tight sm:text-5xl md:text-6xl gradient-heading'
									delay={0.4}
									staggerChildren={0.03}
								/>
							</div>

							<div className='overflow-hidden'>
								<AnimatedText
									text='Frontend Developer'
									className='text-2xl font-semibold text-primary sm:text-3xl'
									delay={0.7}
									staggerChildren={0.03}
								/>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
								transition={{ duration: 0.8, delay: 0.9 }}
							>
								<p className='max-w-lg text-muted-foreground'>
									I build modern and responsive web applications using
									cutting-edge technologies. I specialize in React, Next.js and
									animations to create impressive user experiences.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
								transition={{ duration: 0.8, delay: 1.1 }}
								className='flex flex-wrap gap-4 pt-4'
							>
								<Button asChild size='lg' className='gap-2 group'>
									<Link href='/about'>
										About me
										<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
									</Link>
								</Button>
								<Button
									asChild
									variant='outline'
									size='lg'
									className='gap-2 gradient-border'
								>
									<Link href='/projects'>My projects</Link>
								</Button>
								<Button
									asChild
									variant='outline'
									size='lg'
									className='gap-2 gradient-border'
								>
									<a href='/my-resume.pdf' download={"Shohrukh Abduvakhidov CV"}>My CV</a>
								</Button>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
								transition={{ duration: 0.8, delay: 1.3 }}
								className='flex gap-6 pt-6'
							>
								<Link
									href='https://facebook.com'
									aria-label='Facebook'
									className='rounded-full bg-secondary/50 p-2 text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary'
								>
									<Facebook size={20} />
								</Link>
								<Link
									href='https://twitter.com'
									aria-label='Twitter'
									className='rounded-full bg-secondary/50 p-2 text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary'
								>
									<Twitter size={20} />
								</Link>
								<Link
									href='https://linkedin.com'
									aria-label='LinkedIn'
									className='rounded-full bg-secondary/50 p-2 text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary'
								>
									<Linkedin size={20} />
								</Link>
								<Link
									href='https://github.com/Shohrukh-Abduvakhidov'
									aria-label='GitHub'
									className='rounded-full bg-secondary/50 p-2 text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary'
								>
									<Github size={20} />
								</Link>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className='z-10 flex justify-center md:justify-end'
						>
							<div className='relative'>
								<div className='absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 blur-xl opacity-30 animate-pulse' />
								<HeroImage />
							</div>
						</motion.div>
					</div>
				</div>

				<div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: isLoaded ? 1 : 0 }}
						transition={{ duration: 0.5, delay: 1.5 }}
					>
						<ArrowRight className='h-6 w-6 text-muted-foreground rotate-90' />
					</motion.div>
				</div>
			</section>

			{/* Skills Section */}
			<section id='skills' className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center mb-12'
					>
						<h2 className='font-heading text-3xl md:text-4xl font-bold gradient-heading mb-4'>
							My Skills
						</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Leveraging modern technologies to create exceptional web
							experiences
						</p>
					</motion.div>
					<ThreeDMarqueeDemo />
				</div>
			</section>

			{/* Tech Stack Section */}
			<section id='tech-stack' className='py-20'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='space-y-6'
						>
							<h2 className='font-heading text-3xl md:text-4xl font-bold gradient-heading mb-4'>
								My Tech Stack
							</h2>
							<p className='text-lg text-muted-foreground'>
								I work with cutting-edge technologies to build modern,
								responsive, and performant web applications. My expertise
								includes React, Next.js, Tailwind CSS, and Framer Motion for
								creating beautiful animations and transitions.
							</p>
							<p className='text-lg text-muted-foreground'>
								I m passionate about creating intuitive user interfaces and
								delivering exceptional user experiences through clean code and
								modern design principles.
							</p>

							<div className='flex flex-wrap gap-2 pt-4'>
								<Badge variant='outline' className='gradient-border'>
									React
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									Next.js
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									TypeScript
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									Tailwind CSS
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									Framer Motion
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									Redux
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									Node.js
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									Firebase
								</Badge>
							</div>
						</motion.div>

						<motion.div
							ref={techStackRef}
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='relative h-[400px]'
						>
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='relative w-64 h-64'>
									<AnimatePresence>
										{isInView && (
											<>
												<motion.div
													initial={{ opacity: 0, rotate: 0 }}
													animate={{ opacity: 1, rotate: 360 }}
													exit={{ opacity: 0 }}
													transition={{
														duration: 20,
														repeat: Number.POSITIVE_INFINITY,
														ease: 'linear',
													}}
													className='absolute inset-0'
												>
													{[...Array(8)].map((_, i) => (
														<motion.div
															key={i}
															className='absolute w-3 h-3 rounded-full bg-primary'
															style={{
																top: '50%',
																left: '50%',
																transform: `rotate(${
																	i * 45
																}deg) translateY(-120px) rotate(${i * 45}deg)`,
															}}
														/>
													))}
												</motion.div>

												<motion.div
													initial={{ opacity: 0, rotate: 0 }}
													animate={{ opacity: 1, rotate: -360 }}
													exit={{ opacity: 0 }}
													transition={{
														duration: 15,
														repeat: Number.POSITIVE_INFINITY,
														ease: 'linear',
													}}
													className='absolute inset-0'
												>
													<motion.div
														className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full'
														initial={{ opacity: 0, scale: 0 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ delay: 0.2, duration: 0.5 }}
													>
														<Image
															src={
																VSCodeIcon ||
																'/placeholder.svg?height=50&width=50'
															}
															alt='VS Code'
															width={40}
															height={40}
															className='rounded-full'
														/>
													</motion.div>
													<motion.div
														className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background p-2 rounded-full'
														initial={{ opacity: 0, scale: 0 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ delay: 0.4, duration: 0.5 }}
													>
														<Image
															src={
																CSSIcon || '/placeholder.svg?height=50&width=50'
															}
															alt='CSS'
															width={40}
															height={40}
															className='rounded-full'
														/>
													</motion.div>
													<motion.div
														className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full'
														initial={{ opacity: 0, scale: 0 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ delay: 0.6, duration: 0.5 }}
													>
														<Image
															src={
																JSIcon || '/placeholder.svg?height=50&width=50'
															}
															alt='JavaScript'
															width={40}
															height={40}
															className='rounded-full'
														/>
													</motion.div>
													<motion.div
														className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full'
														initial={{ opacity: 0, scale: 0 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ delay: 0.8, duration: 0.5 }}
													>
														<Image
															src={
																VSCodeIcon ||
																'/placeholder.svg?height=50&width=50'
															}
															alt='VS Code'
															width={40}
															height={40}
															className='rounded-full'
														/>
													</motion.div>
												</motion.div>

												<motion.div
													className='absolute inset-0 flex items-center justify-center'
													initial={{ opacity: 0, scale: 0 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ delay: 1, duration: 0.5 }}
												>
													<div className='w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-1 glow'>
														<div className='w-full h-full rounded-full bg-background flex items-center justify-center'>
															<span className='font-heading text-xl font-bold gradient-heading'>
																Frontend
															</span>
														</div>
													</div>
												</motion.div>
											</>
										)}
									</AnimatePresence>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	)
}
