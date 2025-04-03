import { getRouteMain } from '@/shared/constants/router';
import { LinkCustom } from '@/shared/ui/components/link';
import { AuthSideBar } from '@/widgets/auth-side-bar';
import { BurgerMenu } from '@/widgets/burger-menu';
import { CartSideBar } from '@/widgets/cart-side-bar';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { UpSaleBlockClientFetch } from '@/widgets/up-sale-block';

export default function NotFound() {
	return (
		<>
			<Header />
			<main className='main'>
				<section className='_cont_limit mb-100'>
					<h1 className='fs-xxl-2 mt-100 mb-20'>
						упс... <br /> страница не найдена
					</h1>
					<p>
						Можете перейти на{' '}
						<LinkCustom
							href={getRouteMain()}
							style={{ color: 'var(--color-red)' }}
						>
							главную
						</LinkCustom>{' '}
						или посмотреть подборку популярных товаров.
					</p>
				</section>
			</main>
			<UpSaleBlockClientFetch sort='popularity' />
			<Footer />
			<BurgerMenu />
			<CartSideBar />
			<AuthSideBar />
		</>
	);
}
