'use client'

import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function BackgroundBeams({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const [opacity, setOpacity] = useState(0)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const resizeCanvas = () => {
			if (canvas && ctx) {
				canvas.width = window.innerWidth
				canvas.height = window.innerHeight
			}
		}

		resizeCanvas()
		window.addEventListener('resize', resizeCanvas)

		let animationId: number
		let t = 0

		const animate = () => {
			if (!canvas || !ctx) return
			t += 0.003

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Number of beams based on canvas size
			const numBeams = Math.max(5, Math.floor(canvas.width / 300))

			for (let i = 0; i < numBeams; i++) {
				const x = (i / numBeams) * canvas.width

				// Create a gradient for each beam
				const gradient = ctx.createLinearGradient(x, 0, x, canvas.height)
				gradient.addColorStop(0, 'rgba(0, 180, 216, 0)')
				gradient.addColorStop(0.5, 'rgba(0, 180, 216, 0.3)')
				gradient.addColorStop(1, 'rgba(0, 180, 216, 0)')

				ctx.strokeStyle = gradient
				ctx.lineWidth = 10 + Math.sin(t + i) * 5
				ctx.beginPath()
				ctx.moveTo(x, 0)

				// Create a wavy line
				for (let y = 0; y < canvas.height; y += 10) {
					const xOffset = Math.sin(y * 0.01 + t + i) * 50
					ctx.lineTo(x + xOffset, y)
				}

				ctx.stroke()
			}

			animationId = requestAnimationFrame(animate)
		}

		animate()
		setOpacity(1)

		return () => {
			window.removeEventListener('resize', resizeCanvas)
			cancelAnimationFrame(animationId)
		}
	}, [])

	return (
		<div
			className={cn(
				'fixed inset-0 z-[-1] transition-opacity duration-1000',
				className
			)}
			style={{ opacity }}
			{...props}
		>
			<canvas ref={canvasRef} className='h-full w-full' />
		</div>
	)
}
