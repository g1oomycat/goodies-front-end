import { LinkCustom } from '@/shared/ui/components/link';
import classNames from 'classnames';
import styles from './styles.module.scss'; // Подключи стили

type LinkItem = {
	href: string;
	label: string;
	icon?: React.ReactNode; // Если нужен значок
};

type Props = {
	title: string;
	links: LinkItem[];
	className?: string;
};

export const LinkList = ({ title, links, className }: Props) => {
	return (
		<div className={classNames(styles.column, className)}>
			<div className='mb-25'>
				<h4 className='fw-500'>{title}</h4>
			</div>
			<ul className={classNames(styles.items, 'fs-s-3 gap-10')}>
				{links.map(({ href, label, icon }, index) => (
					<li key={index}>
						<LinkCustom
							href={href}
							colorMode='pink'
							childrenType={!!icon ? 'width_icon' : 'text'}
						>
							{icon && <span className='fs-m-1'>{icon}</span>}{' '}
							<span>{label}</span>
						</LinkCustom>
					</li>
				))}
			</ul>
		</div>
	);
};
