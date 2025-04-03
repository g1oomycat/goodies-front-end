'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { Opener, OpenerText } from '../opener';
import styles from './styles.module.scss';

type OpenerProps = {
	name: string;
	textList: OpenerText[];
};

type Props = {
	informationList: OpenerProps[];
	isOpenFirstItem?: boolean;
};

export const OpenerBlock = ({
	informationList,
	isOpenFirstItem = false,
}: Props) => {
	const [isIndexOpen, setIsIndexOpen] = useState(isOpenFirstItem ? 1 : 0);
	return (
		<div className={classNames(styles.root)}>
			{informationList.map((item, index) => (
				<Opener
					index={index + 1}
					key={index}
					isIndexOpen={isIndexOpen}
					setIsIndexOpen={setIsIndexOpen}
					name={item.name}
					textList={item.textList}
				/>
			))}
		</div>
	);
};
