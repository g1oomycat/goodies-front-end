import type { CustomToastProductProps } from '@/shared/kit/toaster-custom';
import { CustomToastProduct } from '@/shared/kit/toaster-custom';
import { toast } from 'sonner';

// Функция для вызова уведомления
export const showToast = (props: CustomToastProductProps) => {
	toast.custom(t => <CustomToastProduct {...props} />);
};

type PropsError = {
	entity: string;
	message?: string;
};
export const showToastError = ({ entity, message }: PropsError) => {
	toast.custom(t => (
		<CustomToastProduct
			icon='ERROR'
			title={`ошибка при ${entity}`}
			subtitle={message}
			bgText='var(--color-red)'
		/>
	));
};
export const showToastSuccess = ({ message }: { message: string }) => {
	toast.custom(t => (
		<CustomToastProduct icon='SUCCESS' title={`успех!`} subtitle={message} />
	));
};
