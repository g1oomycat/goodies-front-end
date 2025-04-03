import classNames from 'classnames';
import { CSSProperties } from 'react';
import styles from './styles.module.scss';
export type DotLoaderProps = {
	style?: CSSProperties;
	classes?: string;
	items: { key: string; value?: string | number; valueStyle?: CSSProperties }[];
};

export const DotLoader = ({ style, classes, items }: DotLoaderProps) => {
	const dotLoaderClassName = classNames(styles.list, classes);

	return (
		<dl className={dotLoaderClassName} style={style}>
			{items.map((item, index) =>
				item.value ? (
					<div className={styles.item} key={index}>
						<dt className={styles.key}>{item.key}</dt>
						<dd className={styles.value} style={item.valueStyle}>
							{item.value}
						</dd>
					</div>
				) : null
			)}
		</dl>
	);
};
