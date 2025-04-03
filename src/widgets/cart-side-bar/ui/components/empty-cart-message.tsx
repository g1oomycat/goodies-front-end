import { useMenuStore } from '@/shared/config/burger-menu-store';
import { ButtonCustom } from '@/shared/ui/components/button';

type Props = {
	closeSideBar: () => void;
};

export const EmptyCartMessage = ({ closeSideBar }: Props) => {
	const { openMenu } = useMenuStore();

	function handleAction(menu: 'main' | 'catalog' | 'search') {
		closeSideBar();
		openMenu(menu);
	}
	return (
		<div>
			<p className='fs-xl-2 low fw-500'>
				В корзине
				<br />
				ничего нет...
			</p>
			<p className='mt-20'>
				посмотрите наш{' '}
				<ButtonCustom
					onClick={() => handleAction('catalog')}
					colorType='none'
					style={{ color: 'var(--color-red)' }}
				>
					каталог
				</ButtonCustom>{' '}
				или воспользуйтесь{' '}
				<ButtonCustom
					onClick={() => handleAction('search')}
					colorType='none'
					style={{ color: 'var(--color-red)' }}
				>
					поиском
				</ButtonCustom>{' '}
				если ищете что-то конкретное
			</p>
		</div>
	);
};
