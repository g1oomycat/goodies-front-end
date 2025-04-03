import { LinkCustom } from '@/shared/ui/components/link';
import { SkeletonMui } from '@/shared/ui/components/skeleton';
import classNames from 'classnames';
import { LinkProps } from 'next/link';
import { CSSProperties } from 'react';
import styles from './styles.module.scss';

type BreadcrumbItemProps = {
	title: string;
	href?: LinkProps['href'];
};

export type BreadcrumbsProps = {
	items: BreadcrumbItemProps[];
	style?: CSSProperties;
	loading?: boolean;
	className?: string;
};

const BreadcrumbsItem = ({ title, href }: BreadcrumbItemProps) => {
	return href ? (
		<LinkCustom href={href} ariaLabel={`Перейти в ${title}`}>
			{title}
		</LinkCustom>
	) : (
		<span>{title}</span>
	);
};

export const Breadcrumbs = ({
	items,
	loading,
	style,
	className,
}: BreadcrumbsProps) => {
	const breadcrumbsClassName = classNames(styles.breadcrumbs, className);
	return (
		<nav aria-label='breadcrumb' style={style} className='fs-s-1 low'>
			<ul className={breadcrumbsClassName} style={style}>
				{loading ? (
					<SkeletonMui variant='text' width={300} />
				) : (
					items.map((item, index) => (
						<li key={index}>
							<BreadcrumbsItem {...item} />
							{index < items.length - 1 && (
								<span className={styles.separator}>/</span>
							)}
						</li>
					))
				)}
			</ul>
		</nav>
	);
};
