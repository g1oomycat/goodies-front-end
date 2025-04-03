import { SkeletonMui } from '@/shared/ui/components/skeleton';
import classNames from 'classnames';

type Props = {
	title?: string;
	className?: string;
	loading?: boolean;
};

export const AdminH1 = ({ title, className, loading }: Props) => {
	return (
		<div
			style={{ marginBottom: '0.7em', marginTop: '0.4em' }}
			className={classNames(className, 'fs-l-2')}
		>
			{title && !loading ? (
				<h1 className=''>{title}</h1>
			) : (
				<SkeletonMui variant='text' width={600} />
			)}
		</div>
	);
};
