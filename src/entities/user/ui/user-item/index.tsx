import { ReactNode } from 'react';
type Props = {
	children: ReactNode;
	title?: string;
};

export const UserItem = ({ children, title }: Props) => {
	return (
		<div
			className='gap-30 fs-s-3'
			style={{ display: 'flex', flexDirection: 'column' }}
		>
			{!!title && <div className='fw-500 low fs-l-1'>{title}</div>}
			{children}
		</div>
	);
};
