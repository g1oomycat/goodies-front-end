import { Banner } from '@/widgets/banner/ui/banner-fetch';
import { CategorySlider } from '@/widgets/category-slider';
import { InstSlider } from '@/widgets/instagram-slider';
import { MainCover } from '@/widgets/main_cover';
import { MainInfoBlock } from '@/widgets/main_info_block';
import {
	EnumUpSaleSort,
	UpSaleBlockFetch,
} from '@/widgets/up-sale-block/index';

export default function Home() {
	return (
		<>
			<Banner />
			<CategorySlider />
			<UpSaleBlockFetch sort={EnumUpSaleSort.POPULARITY} />
			<MainInfoBlock />
			<UpSaleBlockFetch sort={EnumUpSaleSort.DISCOUNT_AMOUNT} />
			<MainCover />
			<InstSlider />
			<UpSaleBlockFetch sort={EnumUpSaleSort.NEW} />
		</>
	);
}
