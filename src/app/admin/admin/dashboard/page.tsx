import { AdminH1 } from '@/shared/kit/admin-h1';
import classNames from 'classnames';

type Props = {};

export default function AdminDashboard({}: Props) {
	return (
		<div className={classNames('root-admin-page', 'admin-container')}>
			<AdminH1 title='coming soon' />
		</div>
	);
}
