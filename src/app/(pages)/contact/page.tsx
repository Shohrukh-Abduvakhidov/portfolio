'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import AnimatedBackground from '@/app/components/animated-background/background'

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [mounted, setMounted] = useState(false)
	const [notification, setNotification] = useState({
		show: false,
		message: '',
		isError: false,
	})

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const sendToTelegram = async (data: typeof formData) => {
		const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
		const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

		const text = `
      📩 Новое сообщение с сайта:
      👤 Имя: ${data.name}
      📧 Email: ${data.email}
      ✉️ Сообщение: ${data.message}
    `

		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: text,
				parse_mode: 'HTML',
			})
		} catch (error) {
			console.error('Ошибка при отправке:', error)
			throw error
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			await sendToTelegram(formData)
			setNotification({
				show: true,
				message: 'Сообщение успешно отправлено!',
				isError: false,
			})
			setFormData({ name: '', email: '', message: '' })
		} catch (error) {
			setNotification({
				show: true,
				message: 'Ошибка при отправке сообщения',
				isError: true,
			})
			console.error('Error:', error)
		} finally {
			setIsSubmitting(false)
			setTimeout(
				() => setNotification({ show: false, message: '', isError: false }),
				5000
			)
		}
	}

	if (!mounted) return null

	return (
		<div className='relative w-full h-screen overflow-hidden bg-gray-700'>
			<AnimatedBackground/>
			{/* Уведомление */}
			{notification.show && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
						notification.isError ? 'bg-red-500' : 'bg-green-500'
					} text-white`}
				>
					{notification.message}
				</motion.div>
			)}

			<div className='absolute inset-0 flex items-center justify-center z-10'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='w-full max-w-md px-4'
				>
					<h1 className={`text-3xl font-bold text-center mb-8 text-white`}>
						Contact Me
					</h1>

					<form
						onSubmit={handleSubmit}
						className={`rounded-lg p-8 border space-y-6 backdrop-blur-md ${'bg-black/10 border-black/20'}`}
					>
						<div className='space-y-2'>
							<Input
								name='name'
								type='text'
								required
								value={formData.name}
								onChange={handleChange}
								className={`${'bg-black/40 text-white placeholder-white/70 border-white/30 focus:ring-white/50'} focus:ring-2`}
								placeholder='Your Name'
							/>
						</div>

						<div className='space-y-2'>
							<Input
								name='email'
								type='email'
								required
								value={formData.email}
								onChange={handleChange}
								className={`${'bg-black/40 text-white placeholder-white/70 border-white/30 focus:ring-white/50'} focus:ring-2`}
								placeholder='your.email@example.com'
							/>
						</div>

						<div className='space-y-2'>
							<Textarea
								name='message'
								required
								value={formData.message}
								onChange={handleChange}
								rows={5}
								className={`${'bg-black/40 text-white placeholder-white/70 border-white/30 focus:ring-white/50'} focus:ring-2`}
								placeholder='Your message here...'
							/>
						</div>

						<Button
							type='submit'
							disabled={isSubmitting}
							className={`w-full py-6 text-lg font-medium transition-all ${
									 'bg-black text-white hover:bg-gray-900 focus-visible:ring-gray-600'
							} focus-visible:ring-2`}
						>
							{isSubmitting ? (
								<span className='flex items-center justify-center'>
									<svg
										className='animate-spin -ml-1 mr-2 h-5 w-5'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
									Отправка...
								</span>
							) : (
								'Отправить сообщение'
							)}
						</Button>
					</form>
				</motion.div>
			</div>
		</div>
	)
}
