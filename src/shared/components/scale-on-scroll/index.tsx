'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScaleOnScrollProps {
	children: ReactNode;
	startScale?: number;
	endScale?: number;
}

export const ScaleOnScroll = ({
	children,
	startScale = 1.4,
	endScale = 1,
}: ScaleOnScrollProps) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]); // Используем переданные параметры

	return (
		<div
			ref={container}
			style={{ position: 'relative', width: '100%', height: '100%' }}
		>
			<motion.div
				style={{
					scale,
					position: 'relative',
					transformOrigin: 'bottom',
					width: '100%',
					height: '100%',
				}}
			>
				{children}
			</motion.div>
		</div>
	);
};
