import { SkeletonMui } from '@/shared/ui/components/skeleton';
import { AdminFormCreateEditBlock } from '../admin-form-create-edit-block';
import { AdminFormCreateEditItem } from '../admin-form-create-edit-item';
import { AdminRightFormCreateEditItem } from '../admin-right-form-create-edit-item';
import styles from './styles.module.scss';

export const AdminFormCreateEditSkeleton = () => {
	return (
		<section className={styles.root}>
			<div className={styles.flex}>
				<div className={styles.form}>
					<div className={styles.main}>
						<AdminFormCreateEditBlock title='' isLoading={true}>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
						</AdminFormCreateEditBlock>
						<AdminFormCreateEditBlock title='' isLoading={true}>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
						</AdminFormCreateEditBlock>
						<AdminFormCreateEditBlock title='' isLoading={true}>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
							<AdminFormCreateEditItem title='' isLoading={true}>
								<div></div>
							</AdminFormCreateEditItem>
						</AdminFormCreateEditBlock>
					</div>
					<div className={styles.sub}>
						<div className={styles.body}>
							<AdminRightFormCreateEditItem
								title=''
								isLoading={true}
							></AdminRightFormCreateEditItem>
							<AdminRightFormCreateEditItem
								title=''
								isLoading={true}
							></AdminRightFormCreateEditItem>
							<AdminRightFormCreateEditItem title='' isLoading={true}>
								<SkeletonMui
									variant='rounded'
									style={{ width: '100%', aspectRatio: '1/1', height: 'auto' }}
								/>
							</AdminRightFormCreateEditItem>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
	return <></>;
};
