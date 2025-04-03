import { LinkCustom } from '@/shared/ui/components/link';
import classNames from 'classnames';
import styles from './styles.module.scss';
type Props = {};

export const AdminFooter = ({}: Props) => {
	return (
		<footer className={classNames(styles.root, 'admin-container')}>
			<div className={classNames(styles.body, 'fs-s-1 low')}>
				<div className={styles.item}>
					<span>
						<LinkCustom href='mailto:helpMeToday@gmail.com'>
							helpMeToday@gmail.com
						</LinkCustom>
					</span>
				</div>
				<div className={styles.item}>
					<span>
						<LinkCustom href='mailto:helpMeToday@gmail.com'>
							developed by{' '}
							<span style={{ textTransform: 'uppercase' }}>NASYROV</span>
						</LinkCustom>
					</span>
				</div>
			</div>
		</footer>
	);
};
