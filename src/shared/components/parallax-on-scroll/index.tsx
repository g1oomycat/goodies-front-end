'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxProps {
	children: ReactNode;
	speed?: number; // Насколько быстро движется (чем больше, тем заметнее эффект)
}

export const Parallax = ({ children, speed = 100 }: ParallaxProps) => {
	const container = useRef(null);

	// Получаем положение скролла относительно вьюпорта
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	// Смещение по оси Y для параллакса
	const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

	return (
		<div
			ref={container}
			style={{
				position: 'relative',
				overflow: 'hidden',
				width: '100%',
				height: '100%',
			}}
		>
			<motion.div
				style={{
					y, // Двигаем по оси Y
					position: 'relative',
					width: '100%',
					height: '100%',
				}}
			>
				{children}
			</motion.div>
		</div>
	);
};
