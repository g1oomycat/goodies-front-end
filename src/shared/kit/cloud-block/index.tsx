import { ReactNode } from 'react';

type Props = {
	bgColor: string;
	textColor: string;
	children: ReactNode;
};

export const CloudBlock = ({ bgColor, textColor, children }: Props) => {
	return (
		<div
			style={{
				backgroundColor: bgColor,
				color: textColor,
				padding: '2px 8px',
				borderRadius: '40px',
				textAlign: 'center',
				fontSize: 'inherit',
			}}
		>
			{children}
		</div>
	);
};
