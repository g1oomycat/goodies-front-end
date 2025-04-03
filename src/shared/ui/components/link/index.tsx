import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	href: LinkProps['href'];
	children: ReactNode;
	colorMode?: 'inverted' | 'pink';
	childrenType?: 'text' | 'icon' | 'width_icon';
	className?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	ariaLabel?: string;
	style?: CSSProperties;
	textDecoration?: boolean;
};

export const LinkCustom = ({
	href,
	children,
	className,
	colorMode,
	target,
	ariaLabel,
	style,
	childrenType = 'text',
	textDecoration,
}: Props) => {
	const linkClassName = cn(
		styles.root,
		className,
		colorMode ? styles[colorMode] : '',
		childrenType ? styles[childrenType] : '',
		textDecoration ? styles.textDecoration : ''
	);
	return (
		<Link
			href={href}
			className={linkClassName}
			target={target}
			aria-label={ariaLabel}
			style={style}
		>
			{children}
		</Link>
	);
};
