'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
	Calendar,
	GraduationCap,
	Briefcase,
	ArrowRight,
	Heart,
	Code,
	Globe,
	Book,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AnimatedBackground from '@/app/components/animated-background/background'
import AnimatedText from '@/app/components/animated-text/text'
import MyLogo from '@/app/assets/my-logo.png'
import { VortexDemo } from '@/components/ui/vortex-back'

// Данные о навыках
const skills = [
	{ name: 'HTML/CSS', level: 95 },
	{ name: 'JavaScript', level: 90 },
	{ name: 'React', level: 90 },
	{ name: 'Next.js', level: 80 },
	{ name: 'TypeScript', level: 75 },
	{ name: 'Tailwind CSS', level: 90 },
	{ name: 'Framer Motion', level: 85 },
]

const timeline = [
	{
		id: 1,
		date: '2020 - Настоящее время',
		title: 'Frontend Developer',
		company: 'Tech Solutions',
		description:
			'Разработка современных веб-приложений с использованием React, Next.js и других современных технологий.',
		icon: <Briefcase className='h-5 w-5' />,
		type: 'work',
	},
	{
		id: 2,
		date: '2018 - 2020',
		title: 'Junior Web Developer',
		company: 'Digital Agency',
		description:
			'Создание отзывчивых веб-сайтов и приложений с использованием HTML, CSS и JavaScript.',
		icon: <Briefcase className='h-5 w-5' />,
		type: 'work',
	},
	{
		id: 3,
		date: '2016 - 2020',
		title: 'Бакалавр компьютерных наук',
		company: 'Университет технологий',
		description:
			'Изучение основ программирования, алгоритмов, структур данных и веб-разработки.',
		icon: <GraduationCap className='h-5 w-5' />,
		type: 'education',
	},
]

// Данные о личных интересах
const interests = [
	{
		title: 'Программирование',
		description: 'Изучение новых технологий и фреймворков для веб-разработки',
		icon: <Code className='h-6 w-6 text-primary' />,
	},
	{
		title: 'Путешествия',
		description: 'Исследование новых мест и культур по всему миру',
		icon: <Globe className='h-6 w-6 text-primary' />,
	},
	{
		title: 'Чтение',
		description: 'Книги по технологиям, научная фантастика и бизнес-литература',
		icon: <Book className='h-6 w-6 text-primary' />,
	},
	{
		title: 'Спорт',
		description:
			'Футбол, плавание и фитнес для поддержания активного образа жизни',
		icon: <Heart className='h-6 w-6 text-primary' />,
	},
]

export default function AboutPage() {
	return (
		<div className='relative min-h-screen pt-20'>
			<AnimatedBackground />

			<VortexDemo>
				<section className='container mx-auto px-4 py-12 relative z-20'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className='space-y-6'
						>
							<div className='overflow-hidden'>
								<AnimatedText
									text='Abduvakhidov Shohrukh'
									className='text-4xl font-heading font-bold sm:text-5xl md:text-6xl gradient-heading'
									delay={0.2}
									staggerChildren={0.03}
								/>
							</div>

							<div className='h-1 w-20 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full' />

							<div className='overflow-hidden'>
								<AnimatedText
									text='Frontend Developer'
									className='text-2xl font-medium text-primary'
									delay={0.4}
									staggerChildren={0.03}
								/>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
							>
								<p className='text-lg text-muted-foreground'>
									Hi, I m Shohrukh — a passionate Frontend Developer with a
									strong focus on building modern, responsive web applications
									using React, Next.js, JavaScript, and Tailwind CSS. I enjoy
									turning complex problems into simple, beautiful, and intuitive
									user interfaces. I m currently expanding my skills in state
									management, API integration, and performance optimization.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className='flex flex-wrap gap-3 pt-4'
							>
								<Badge variant='outline' className='gradient-border'>
									React
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									Next.js
								</Badge>
								<Badge variant='outline' className='gradient-border'>
									JavaScript
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
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 1 }}
								className='flex flex-wrap gap-4 pt-6'
							>
								<Button asChild size='lg' className='gap-2 group'>
									<Link href='/contact'>
										Связаться со мной
										<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
									</Link>
								</Button>
								<Button
									asChild
									variant='outline'
									size='lg'
									className='gap-2 gradient-border'
								>
									<Link href='/projects'>Мои проекты</Link>
								</Button>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='flex justify-center lg:justify-end'
						>
							<div className='relative'>
								<div className='absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 blur-xl opacity-30 animate-pulse' />
								<div className='relative rounded-full overflow-hidden border-4 border-background p-2 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-cyan-500/20'>
									<Image
										src={MyLogo || '/placeholder.svg'}
										alt='Abduvakhidov Shohrukh'
										className='rounded-full w-64 h-64 md:w-80 md:h-80 object-cover'
										priority
									/>
								</div>
							</div>
						</motion.div>
					</div>
				</section>
			</VortexDemo>

			{/* Tabs Section */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center mb-12'
					>
						<h2 className='font-heading text-3xl md:text-4xl font-bold gradient-heading mb-4'>
							Обо мне
						</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Узнайте больше о моем опыте, навыках и увлечениях
						</p>
					</motion.div>

					<Tabs defaultValue='skills' className='max-w-4xl mx-auto'>
						<TabsList className='grid w-full grid-cols-3 mb-8'>
							<TabsTrigger value='skills'>Навыки</TabsTrigger>
							<TabsTrigger value='experience'>Опыт</TabsTrigger>
							<TabsTrigger value='interests'>Интересы</TabsTrigger>
						</TabsList>

						{/* Skills Tab */}
						<TabsContent value='skills' className='space-y-8'>
							<Card className='bg-card/50 backdrop-blur-sm gradient-border'>
								<CardContent className='pt-6'>
									<h3 className='text-xl font-bold mb-6'>Технические навыки</h3>
									<div className='space-y-6'>
										{skills.map((skill, index) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.5, delay: 0.1 * index }}
												viewport={{ once: true }}
												className='space-y-2'
											>
												<div className='flex justify-between'>
													<span className='font-medium'>{skill.name}</span>
													<span className='text-muted-foreground'>
														{skill.level}%
													</span>
												</div>
												<Progress value={skill.level} className='h-2' />
											</motion.div>
										))}
									</div>
								</CardContent>
							</Card>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<Card className='bg-card/50 backdrop-blur-sm gradient-border'>
									<CardContent className='pt-6'>
										<h3 className='text-xl font-bold mb-4'>Frontend</h3>
										<div className='flex flex-wrap gap-2'>
											<Badge>HTML5</Badge>
											<Badge>CSS3</Badge>
											<Badge>JavaScript</Badge>
											<Badge>TypeScript</Badge>
											<Badge>React</Badge>
											<Badge>Next.js</Badge>
											<Badge>Tailwind CSS</Badge>
											<Badge>Framer Motion</Badge>
											<Badge>Redux</Badge>
											<Badge>Styled Components</Badge>
										</div>
									</CardContent>
								</Card>

								<Card className='bg-card/50 backdrop-blur-sm gradient-border'>
									<CardContent className='pt-6'>
										<h3 className='text-xl font-bold mb-4'>
											Инструменты и другое
										</h3>
										<div className='flex flex-wrap gap-2'>
											<Badge>Git</Badge>
											<Badge>GitHub</Badge>
											<Badge>VS Code</Badge>
											<Badge>Figma</Badge>
											<Badge>Webpack</Badge>
											<Badge>Jest</Badge>
											<Badge>npm</Badge>
											<Badge>Vercel</Badge>
											<Badge>Firebase</Badge>
											<Badge>REST API</Badge>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						{/* Experience Tab */}
						<TabsContent value='experience' className='space-y-8'>
							<Card className='bg-card/50 backdrop-blur-sm gradient-border'>
								<CardContent className='pt-6'>
									<h3 className='text-xl font-bold mb-6'>
										Опыт работы и образование
									</h3>

									<div className='relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/70 before:via-primary/30 before:to-transparent'>
										{timeline.map((item, index) => (
											<motion.div
												key={item.id}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.5, delay: index * 0.1 }}
												viewport={{ once: true }}
												className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group'
											>
												<div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
													{item.icon}
												</div>

												<div className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card/50 backdrop-blur-sm p-4 rounded-lg gradient-border'>
													<div className='flex items-center gap-2 text-muted-foreground mb-1'>
														<Calendar className='h-4 w-4' />
														<span>{item.date}</span>
													</div>
													<h4 className='text-xl font-bold'>{item.title}</h4>
													<p className='text-primary font-medium'>
														{item.company}
													</p>
													<p className='mt-2 text-muted-foreground'>
														{item.description}
													</p>
												</div>
											</motion.div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Interests Tab */}
						<TabsContent value='interests' className='space-y-8'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								{interests.map((interest, index) => (
									<motion.div
										key={interest.title}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ y: -5 }}
									>
										<Card className='h-full bg-card/50 backdrop-blur-sm gradient-border'>
											<CardContent className='pt-6'>
												<div className='flex items-start gap-4'>
													<div className='rounded-full bg-primary/20 p-3'>
														{interest.icon}
													</div>
													<div>
														<h3 className='text-xl font-bold mb-2'>
															{interest.title}
														</h3>
														<p className='text-muted-foreground'>
															{interest.description}
														</p>
													</div>
												</div>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>

							<Card className='bg-card/50 backdrop-blur-sm gradient-border'>
								<CardContent className='pt-6'>
									<h3 className='text-xl font-bold mb-4'>Личная философия</h3>
									<p className='text-muted-foreground mb-4'>
										Я верю в постоянное обучение и совершенствование своих
										навыков. Технологии развиваются быстро, и важно оставаться в
										курсе последних тенденций и инноваций.
									</p>
									<p className='text-muted-foreground'>
										Мой подход к разработке сочетает в себе технические навыки с
										пониманием пользовательского опыта и дизайна. Я стремлюсь
										создавать интуитивно понятные и отзывчивые веб-приложения,
										которые обеспечивают исключительный пользовательский опыт.
									</p>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Quote Section */}

			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='max-w-3xl mx-auto text-center'
					>
						<div className='relative'>
							<div className='absolute -top-10 left-0 text-6xl text-primary/20 font-serif'></div>
							<div className='absolute -bottom-10 right-0 text-6xl text-primary/20 font-serif'></div>
							<blockquote className='text-2xl font-heading italic px-10'>
								Стремлюсь создавать не просто код, а решения, которые делают
								жизнь людей лучше и проще через технологии.
							</blockquote>
						</div>
						<div className='mt-6'>
							<p className='font-medium'>Abduvakhidov Shohrukh</p>
							<p className='text-sm text-muted-foreground'>
								Frontend Developer
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
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
