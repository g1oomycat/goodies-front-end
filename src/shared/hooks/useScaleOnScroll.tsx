import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const useScaleOnScroll = (
	startScale: number = 1.4,
	endScale: number = 1
) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);

	return { container, scale };
};
