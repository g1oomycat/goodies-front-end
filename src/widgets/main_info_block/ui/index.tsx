import { default as cn } from 'classnames';
import { staticText } from '../lib/static-text';
import { ColumnImage } from './column-image';
import styles from './styles.module.scss';

export const MainInfoBlock = () => {
	return (
		<section className={cn(styles.root, '_cont_limit')}>
			<div className={cn(styles.wrapper, 'mb-160')}>
				<div className={styles.column_h1}>
					<div>
						<h1 className={styles.title}>goodies</h1>
					</div>
				</div>
				<div className={styles.images}>
					{staticText.map((item, index) => (
						<ColumnImage
							imgURL={item.imgURL}
							imageAlt={item.imageAlt}
							h2={item.h2}
							h3={item.h3}
							key={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
