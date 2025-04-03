import {
	getRouteAdminBanners,
	getRouteAdminCategories,
	getRouteAdminDashboard,
	getRouteAdminOrders,
	getRouteAdminPriceHistory,
	getRouteAdminProducts,
	getRouteAdminReviewsInstagram,
	getRouteAdminUsers,
} from '@/shared/constants/router';
import { BannerIcon } from '@/shared/ui/icons/banner';
import { CategoryIcon } from '@/shared/ui/icons/category';
import { InstagramIcon } from '@/shared/ui/icons/instagram';
import { InventoryIcon } from '@/shared/ui/icons/inventory';
import { MonitoringIcon } from '@/shared/ui/icons/monitoring';
import { OrderIcon } from '@/shared/ui/icons/order';
import { PeoplesIcon } from '@/shared/ui/icons/peoples';
import { PriceChangeIcon } from '@/shared/ui/icons/price-change';
import { Container } from '../container';
import { Item } from '../item';
import styles from './styles.module.scss';

export const MenuSidebar = () => {
	return (
		<div className={styles.side_bar}>
			<div className={styles.side_cont}>
				<div className={styles.header}>
					<span className='logo'>goodies</span>
				</div>
				<div className={styles.body}>
					<Container title='аналитика'>
						<Item
							href={getRouteAdminDashboard()}
							title='Панель управления'
							icon={<MonitoringIcon />}
						></Item>
					</Container>

					<Container title='управление'>
						<Item
							href={getRouteAdminProducts()}
							title='Товары'
							icon={<InventoryIcon />}
						></Item>
						<Item
							href={getRouteAdminUsers()}
							title='Пользователи'
							icon={<PeoplesIcon />}
						></Item>
						<Item
							href={getRouteAdminOrders()}
							title='заказы'
							icon={<OrderIcon />}
						></Item>
						<Item
							href={getRouteAdminCategories()}
							title='категории'
							icon={<CategoryIcon />}
						></Item>
						<Item
							href={getRouteAdminPriceHistory()}
							title='изменения цен'
							icon={<PriceChangeIcon />}
						></Item>
					</Container>
					<Container title='контент'>
						<Item
							href={getRouteAdminBanners()}
							title='Баннеры'
							icon={<BannerIcon />}
						></Item>
						<Item
							href={getRouteAdminReviewsInstagram()}
							title='инстаграм'
							icon={<InstagramIcon />}
						></Item>
					</Container>
				</div>
			</div>
		</div>
	);
};
