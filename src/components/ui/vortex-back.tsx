import React from 'react'
import { Vortex } from '../ui/vortex'

export function VortexDemo({children} : {children : React.ReactNode}) {
	return (
		<div className='w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden'>
			<Vortex
				backgroundColor='transparent'
				className='relative'
			>
			{children}
			</Vortex>
		</div>
	)
}
