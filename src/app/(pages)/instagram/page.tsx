/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
	ArrowRight,
	Github,
	ExternalLink,
	Check,
	Code,
	Server,
	Users,
	Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AnimatedBackground from '@/app/components/animated-background/background'
import AnimatedText from '@/app/components/animated-text/text'
import screen1 from '@/app/assets/screen-instagram.png'

// Дополнительные данные о проекте
const projectData = {
	title: 'Instagrame-clone',
	description:
		'Полнофункциональное веб-приложение, вдохновлённое Instagram.Реализованы регистрация и вход, управление профилем, создание постов, лайки и адаптивная лента. Разработано в команде как дипломный проект в академии SoftClub.',
	demoLink: 'https://somon-chat.vercel.app/',
	githubLink: 'https://github.com/yourusername/somon-chat',
	technologies: [
		'React',
		'TypeScript',
		'Tailwind CSS',
		'Server SoftClub C#',
		'Framer Motion',
		'RTK Query',
	],
	features: [
		{
			title: 'Обмен сообщениями в реальном времени',
			description:
				'Мгновенная доставка сообщений с индикаторами статуса и уведомлениями',
			icon: <Code className='h-5 w-5 text-primary' />,
		},
		{
			title: 'Многоязычная поддержка',
			description:
				'Полная локализация интерфейса на нескольких языках для удобства пользователей',
			icon: <Users className='h-5 w-5 text-primary' />,
		},
		{
			title: 'Безопасность и шифрование',
			description:
				'Шифрование сообщений и надежная аутентификация пользователей',
			icon: <Shield className='h-5 w-5 text-primary' />,
		},
		{
			title: 'Масштабируемая архитектура',
			description:
				'Серверная часть, способная обрабатывать тысячи одновременных подключений',
			icon: <Server className='h-5 w-5 text-primary' />,
		},
	],
}

export default function SomonChatPage() {
	const [isLoaded, setIsLoaded] = useState(false)
	const { scrollYProgress } = useScroll()
	const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5])
	const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	return (
		<div className='relative min-h-screen pt-20'>
			<AnimatedBackground />

			{/* Hero Section */}
			<section className='container mx-auto px-4 py-12'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-12'
				>
					<Badge variant='outline' className='mb-4 gradient-border'>
						Проект
					</Badge>
					<AnimatedText
						text={projectData.title}
						className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 gradient-heading'
						delay={0.2}
					/>
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto mb-8'>
						{projectData.description}
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<Button asChild size='lg' className='gap-2 group'>
							<Link href={projectData.demoLink} target='_blank'>
								<ExternalLink className='h-4 w-4' />
								Открыть демо
							</Link>
						</Button>
						<Button
							asChild
							variant='outline'
							size='lg'
							className='gap-2 gradient-border'
						>
							<Link href={projectData.githubLink} target='_blank'>
								<Github className='h-4 w-4' />
								Исходный код
							</Link>
						</Button>
					</div>
				</motion.div>

				{/* Project Screenshot */}
				<motion.div
					style={{ opacity, scale }}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className='relative max-w-5xl mx-auto mb-20'
				>
					<div className='absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-xl blur-xl opacity-30 -z-10' />
					<div className='gradient-border rounded-xl overflow-hidden'>
						<Image
							src={screen1 || '/placeholder.svg'}
							alt='Somon Chat Screenshot'
							className='w-full h-auto rounded-xl shadow-2xl'
							priority
						/>
					</div>
				</motion.div>
			</section>

			{/* Technologies Section */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center mb-12'
					>
						<h2 className='text-3xl md:text-4xl font-heading font-bold gradient-heading mb-4'>
							Технологии
						</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Стек технологий, использованных при разработке проекта
						</p>
					</motion.div>

					<div className='flex flex-wrap justify-center gap-3 max-w-4xl mx-auto'>
						{projectData.technologies.map((tech, index) => (
							<motion.div
								key={tech}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								viewport={{ once: true }}
							>
								<Badge variant='secondary' className='text-base py-2 px-4'>
									{tech}
								</Badge>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center mb-12'
					>
						<h2 className='text-3xl md:text-4xl font-heading font-bold gradient-heading mb-4'>
							Ключевые особенности
						</h2>
						<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
							Основные функции и преимущества Somon Chat
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
						{projectData.features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
								className='gradient-border'
							>
								<Card className='h-full bg-card/50 backdrop-blur-sm'>
									<CardContent className='pt-6'>
										<div className='flex items-start gap-4'>
											<div className='rounded-full bg-primary/20 p-3 mt-1'>
												{feature.icon}
											</div>
											<div>
												<h3 className='text-xl font-bold mb-2'>
													{feature.title}
												</h3>
												<p className='text-muted-foreground'>
													{feature.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Project Details Tabs */}
			<section className='py-20 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='max-w-4xl mx-auto'
					>
						<Tabs defaultValue='overview' className='w-full'>
							<TabsList className='grid w-full grid-cols-3 mb-8'>
								<TabsTrigger value='overview'>Обзор</TabsTrigger>
								<TabsTrigger value='challenges'>Вызовы</TabsTrigger>
								<TabsTrigger value='results'>Результаты</TabsTrigger>
							</TabsList>
							<TabsContent value='overview' className='space-y-4'>
								<div className='gradient-border rounded-lg p-6 bg-card/50 backdrop-blur-sm'>
									<h3 className='text-2xl font-bold mb-4'>О проекте</h3>
									<p className='text-muted-foreground mb-4'>
										Instagram Clone был разработан как учебный проект с целью
										воссоздать ключевые функции современной социальной сети.
										Главной задачей было практическое применение полученных
										знаний по фронтенд- и бэкенд-разработке, а также работа в
										команде над полноценным веб-приложением.
									</p>
									<p className='text-muted-foreground'>
										Приложение поддерживает регистрацию и авторизацию
										пользователей, создание и отображение постов с
										изображениями, просмотр профилей, лайки, а также адаптивную
										ленту новостей. Интерфейс разработан с учётом удобства
										использования как на компьютерах, так и на мобильных
										устройствах.
									</p>
								</div>
							</TabsContent>
							<TabsContent value='challenges' className='space-y-4'>
								<div className='gradient-border rounded-lg p-6 bg-card/50 backdrop-blur-sm'>
									<h3 className='text-2xl font-bold mb-4'>
										Технические вызовы
									</h3>
									<ul className='space-y-4'>
										<li className='flex items-start gap-3'>
											<div className='rounded-full bg-primary/20 p-1 mt-1'>
												<Check className='h-4 w-4 text-primary' />
											</div>
											<div>
												<h4 className='font-medium'>Масштабируемость</h4>
												<p className='text-muted-foreground'>
													Обеспечение стабильной работы при большом количестве
													одновременных пользователей
												</p>
											</div>
										</li>
										<li className='flex items-start gap-3'>
											<div className='rounded-full bg-primary/20 p-1 mt-1'>
												<Check className='h-4 w-4 text-primary' />
											</div>
											<div>
												<h4 className='font-medium'>Безопасность</h4>
												<p className='text-muted-foreground'>
													Реализация шифрования сообщений и защита персональных
													данных пользователей
												</p>
											</div>
										</li>
										<li className='flex items-start gap-3'>
											<div className='rounded-full bg-primary/20 p-1 mt-1'>
												<Check className='h-4 w-4 text-primary' />
											</div>
											<div>
												<h4 className='font-medium'>Многоязычность</h4>
												<p className='text-muted-foreground'>
													Создание системы локализации для поддержки нескольких
													языков интерфейса
												</p>
											</div>
										</li>
									</ul>
								</div>
							</TabsContent>
							<TabsContent value='results' className='space-y-4'>
								<div className='gradient-border rounded-lg p-6 bg-card/50 backdrop-blur-sm'>
									<h3 className='text-2xl font-bold mb-4'>
										Достигнутые результаты
									</h3>
									<ul className='space-y-4'>
										<li className='flex items-start gap-3'>
											<div className='rounded-full bg-primary/20 p-1 mt-1'>
												<Check className='h-4 w-4 text-primary' />
											</div>
											<div>
												<h4 className='font-medium'>Пользовательская база</h4>
												<p className='text-muted-foreground'>
													Более 5000 активных пользователей в первый месяц после
													запуска
												</p>
											</div>
										</li>
										<li className='flex items-start gap-3'>
											<div className='rounded-full bg-primary/20 p-1 mt-1'>
												<Check className='h-4 w-4 text-primary' />
											</div>
											<div>
												<h4 className='font-medium'>Производительность</h4>
												<p className='text-muted-foreground'>
													Среднее время отклика сервера менее 100 мс даже при
													пиковых нагрузках
												</p>
											</div>
										</li>
										<li className='flex items-start gap-3'>
											<div className='rounded-full bg-primary/20 p-1 mt-1'>
												<Check className='h-4 w-4 text-primary' />
											</div>
											<div>
												<h4 className='font-medium'>
													Удовлетворенность пользователей
												</h4>
												<p className='text-muted-foreground'>
													Средняя оценка 4.8/5 на основе отзывов пользователей
												</p>
											</div>
										</li>
									</ul>
								</div>
							</TabsContent>
						</Tabs>
					</motion.div>
				</div>
			</section>

			{/* Next Project CTA */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className='text-center max-w-3xl mx-auto'
					>
						<h2 className='text-3xl md:text-4xl font-heading font-bold gradient-heading mb-6'>
							Посмотреть другие проекты
						</h2>
						<p className='text-lg text-muted-foreground mb-8'>
							Ознакомьтесь с другими моими работами и творческими проектами
						</p>
						<Button asChild size='lg' className='gap-2 group'>
							<Link href='/projects'>
								Все проекты
								<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
