'use client';
import { ReactNode } from 'react';
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import styles from './styles.module.scss';
type Props = {
	isPending?: boolean;
	handleSubmit: UseFormHandleSubmit<any>;
	onSubmit: SubmitHandler<any>;
	leftChildren: ReactNode;
	rightChildren: ReactNode;
	actionSubmitForm: ReactNode;
	actionDelete?: ReactNode;
	otherActions?: ReactNode;
	idForm: string;
};

export const AdminCreateEditFormContainer = ({
	handleSubmit,
	leftChildren,
	onSubmit,
	rightChildren,
	isPending,
	actionSubmitForm,
	actionDelete,
	otherActions,
	idForm,
}: Props) => {
	return (
		<section className={styles.root}>
			<div className={styles.flex}>
				<form
					noValidate
					className={styles.form}
					aria-disabled={isPending}
					data-disabled={isPending}
					onSubmit={handleSubmit(onSubmit)}
					id={idForm}
				>
					<div className={styles.main}>{leftChildren}</div>
					<div className={styles.sub}>
						<div className={styles.body}>{rightChildren}</div>
					</div>
				</form>
			</div>
			<div className={styles.footer}>
				<div className={styles.body}>
					<div className={styles.left}>
						{actionSubmitForm}
						{actionDelete}
					</div>
					<div className={styles.right}>{otherActions}</div>
				</div>
			</div>
		</section>
	);
};
