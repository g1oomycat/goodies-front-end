import { ButtonOpen } from '@/shared/ui/components/button-open';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export type OpenerText = {
	name: string;
	text: string;
};

type Props = {
	index: number;
	isIndexOpen: number;
	name: string;
	textList: OpenerText[];
	setIsIndexOpen: (index: number) => void;
};

export const Opener = ({
	index,
	isIndexOpen,
	setIsIndexOpen,
	name,
	textList,
}: Props) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState(0);
	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [isIndexOpen]);
	const onClickSetIsIndexOpen = (index: number) => {
		if (isIndexOpen === index) {
			setIsIndexOpen(0);
		} else {
			setIsIndexOpen(index);
		}
	};
	return (
		<div className={styles.open}>
			<div
				className={styles.header}
				onClick={() => onClickSetIsIndexOpen(index)}
			>
				<div>
					<h4 className='lh-no'>{name}</h4>
				</div>
				<div className={styles.button_open}>
					<ButtonOpen isOpen={index === isIndexOpen} />
				</div>
			</div>
			<div
				className={styles.wrapper}
				ref={contentRef}
				style={{ maxHeight: isIndexOpen === index ? contentHeight + 'px' : 0 }}
			>
				<div className={classNames(styles.body, 'fs-s-2 mt-20')}>
					<ul>
						{textList.map((el, i) => (
							<li key={i}>
								<span>{el.name}:</span> {el.text}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
