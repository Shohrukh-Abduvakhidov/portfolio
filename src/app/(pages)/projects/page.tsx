'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
	ArrowRight,
	Code,
	Layers,
	Palette,
	Github,
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
import VSCodeIcon from '@/app/assets/vs-code.webp'
import CSSIcon from '@/app/assets/css-logo.webp'
import JSIcon from '@/app/assets/js_logo.webp'
import somonChat from '@/app/assets/somon-chat.png'
import instagram from '@/app/assets/instagram-logo.webp'
const featuredProjects = [
	{
		id: 1,
		title: 'Somon Chat',
		description:
			'Платформа для обмена сообщениями в реальном времени, разработанная для улучшения коммуникации между учителями, студентами и государственными служащими.',
		image: somonChat,
		link: '/somonchat',
		demoLink: 'https://somon-chat.vercel.app/',
		githubLink: 'https://github.com/yourusername/somon-chat',
		technologies: ['React', 'Next.js', 'Tailwind CSS', 'Socket.io', 'Firebase'],
	},
	{
		id: 2,
		title: 'Instagram Clone',
		description:
			'Полнофункциональное приложение, вдохновленное Instagram, разработанное с использованием React. Позволяет пользователям делиться фотографиями, просматривать профили и взаимодействовать с контентом.',
		image: instagram,
		link: '/instagram',
		demoLink: 'https://somon-chat.vercel.app/',
		githubLink: 'https://github.com/yourusername/instagram-clone',
		technologies: [
			'React',
			'Firebase',
			'Tailwind CSS',
			'Redux',
			'Framer Motion',
		],
	},
]

const skills = [
	{
		title: 'Frontend Development',
		description:
			'Создание отзывчивых и интерактивных пользовательских интерфейсов с React и Next.js',
		icon: <Code className='h-8 w-8 text-primary' />,
	},
	{
		title: 'UI/UX Design',
		description:
			'Создание красивых и интуитивно понятных пользовательских интерфейсов с современными принципами дизайна',
		icon: <Palette className='h-8 w-8 text-primary' />,
	},
	{
		title: 'Full Stack',
		description:
			'Разработка полноценных веб-приложений с интеграцией фронтенда и бэкенда',
		icon: <Layers className='h-8 w-8 text-primary' />,
	},
]

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false)
	const { scrollYProgress } = useScroll()
	const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
	const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	return (
		<div className='relative min-h-screen'>
			<AnimatedBackground />

			<section className='relative min-h-screen flex items-center pt-16'>
				<motion.div
					style={{ opacity, y }}
					className='absolute inset-0 pointer-events-none flex items-center justify-center'
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className='text-center'
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='flex justify-center mb-8'
						>
							<div className='relative w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-1 glow'>
								<div className='w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden'>
									<Image
										src='/placeholder.svg?height=100&width=100'
										alt='Abduvakhidov Shohrukh'
										width={100}
										height={100}
										className='rounded-full object-cover'
									/>
								</div>
							</div>
						</motion.div>
						<AnimatedText
							text='Привет, я Abduvakhidov Shohrukh'
							className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 glow-text'
							delay={0.3}
						/>
						<AnimatedText
							text='Frontend Developer'
							className='text-2xl md:text-3xl font-heading font-bold gradient-heading mb-6'
							delay={0.5}
						/>
						<AnimatedText
							text='Я создаю современные и отзывчивые веб-приложения с использованием передовых технологий'
							className='max-w-2xl mx-auto text-lg text-muted-foreground mb-8'
							delay={0.7}
						/>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
							transition={{ duration: 0.5, delay: 0.9 }}
							className='flex flex-wrap justify-center gap-4'
						>
							<Button asChild size='lg' className='gap-2 group'>
								<Link href='/projects'>
									Мои проекты
									<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
								</Link>
							</Button>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='gap-2 gradient-border'
							>
								<Link href='/contact'>Связаться со мной</Link>
							</Button>
						</motion.div>
					</motion.div>
				</motion.div>

				<div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: isLoaded ? 1 : 0 }}
						transition={{ duration: 0.5, delay: 1.2 }}
					>
						<ArrowRight className='h-6 w-6 text-muted-foreground rotate-90' />
					</motion.div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-20'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='space-y-6'
						>
							<h3 className='text-2xl font-heading font-bold'>
								Frontend-разработчик с опытом создания современных
								веб-приложений
							</h3>
							<p className='text-muted-foreground'>
								Я специализируюсь на разработке пользовательских интерфейсов с
								использованием современных технологий, таких как React, Next.js
								и Tailwind CSS. Мой подход к разработке сочетает в себе
								технические навыки с пониманием пользовательского опыта и
								дизайна.
							</p>
							<p className='text-muted-foreground'>
								Я стремлюсь создавать интуитивно понятные и отзывчивые
								веб-приложения, которые обеспечивают исключительный
								пользовательский опыт. Моя цель — постоянно совершенствовать
								свои навыки и быть в курсе последних тенденций в веб-разработке.
							</p>

							<div className='flex flex-wrap gap-2'>
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
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='relative h-[400px]'
						>
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='relative w-64 h-64'>
									<motion.div
										animate={{
											rotate: 360,
										}}
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
										animate={{
											rotate: -360,
										}}
										transition={{
											duration: 15,
											repeat: Number.POSITIVE_INFINITY,
											ease: 'linear',
										}}
										className='absolute inset-0'
									>
										<div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full'>
											<Image
												src={
													VSCodeIcon || '/placeholder.svg?height=50&width=50'
												}
												alt='VS Code'
												width={40}
												height={40}
												className='rounded-full'
											/>
										</div>
										<div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background p-2 rounded-full'>
											<Image
												src={CSSIcon || '/placeholder.svg?height=50&width=50'}
												alt='CSS'
												width={40}
												height={40}
												className='rounded-full'
											/>
										</div>
										<div className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full'>
											<Image
												src={JSIcon || '/placeholder.svg?height=50&width=50'}
												alt='JavaScript'
												width={40}
												height={40}
												className='rounded-full'
											/>
										</div>
										<div className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full'>
											<Image
												src={
													VSCodeIcon || '/placeholder.svg?height=50&width=50'
												}
												alt='VS Code'
												width={40}
												height={40}
												className='rounded-full'
											/>
										</div>
									</motion.div>

									<div className='absolute inset-0 flex items-center justify-center'>
										<div className='w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-1 glow'>
											<div className='w-full h-full rounded-full bg-background flex items-center justify-center'>
												<span className='font-heading text-xl font-bold gradient-heading'>
													Frontend
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id='skills' className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{skills.map((skill, index) => (
							<motion.div
								key={skill.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
								className='gradient-border'
							>
								<Card className='h-full bg-card/50 backdrop-blur-sm'>
									<CardHeader>
										<div className='mb-2'>{skill.icon}</div>
										<CardTitle>{skill.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className='text-base'>
											{skill.description}
										</CardDescription>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id='projects' className='py-20'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='group'
							>
								<Card className='overflow-hidden h-full bg-card/50 backdrop-blur-sm gradient-border'>
									<div className='relative aspect-video overflow-hidden'>
										<Image
											src={project.image || '/placeholder.svg'}
											alt={project.title}
											width={600}
											height={400}
											className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
											<div className='flex gap-4'>
												<Button
													asChild
													size='sm'
													variant='default'
													className='gap-2'
												>
													<Link href={project.demoLink} target='_blank'>
														<ExternalLink className='h-4 w-4' />
														Демо
													</Link>
												</Button>
												<Button
													asChild
													size='sm'
													variant='outline'
													className='gap-2'
												>
													<Link href={project.githubLink} target='_blank'>
														<Github className='h-4 w-4' />
														Код
													</Link>
												</Button>
											</div>
										</div>
									</div>
									<CardHeader>
										<CardTitle>{project.title}</CardTitle>
										<div className='flex flex-wrap gap-2 mt-2'>
											{project.technologies.map(tech => (
												<Badge key={tech} variant='secondary'>
													{tech}
												</Badge>
											))}
										</div>
									</CardHeader>
									<CardContent>
										<p className='text-muted-foreground'>
											{project.description}
										</p>
									</CardContent>
									<CardFooter>
										<Button asChild variant='ghost' className='gap-2 group/btn'>
											<Link href={project.link}>
												Подробнее
												<ArrowRight className='h-4 w-4 transition-transform group-hover/btn:translate-x-1' />
											</Link>
										</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>

					<div className='mt-12 text-center'>
						<Button asChild size='lg' className='gap-2 group'>
							<Link href='/projects'>
								Все проекты
								<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='text-center max-w-3xl mx-auto'
					>
						<h2 className='font-heading text-3xl md:text-4xl font-bold gradient-heading mb-6'>
							Давайте работать вместе
						</h2>
						<p className='text-lg text-muted-foreground mb-8'>
							Я всегда открыт для обсуждения новых проектов, творческих идей или
							возможностей стать частью вашего видения.
						</p>
						<Button asChild size='lg' className='gap-2 group'>
							<Link href='/contact'>
								Связаться со мной
								<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
