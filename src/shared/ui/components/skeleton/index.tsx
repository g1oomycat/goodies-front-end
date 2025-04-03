import { Skeleton, SkeletonProps } from '@mui/material';

type Props = SkeletonProps;

export const SkeletonMui = (props: Props) => {
	return (
		<Skeleton
			{...props}
			sx={{
				backgroundColor: 'var(--color-bg-active)',
			}}
		/>
	);
};
