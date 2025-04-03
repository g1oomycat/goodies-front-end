'use client';

import { ButtonCustom } from '@/shared/ui/components/button';
import { LikeIcon } from '@/shared/ui/icons/like';
import { LikeStrokeIcon } from '@/shared/ui/icons/like-stroke';
import { useWishlist } from '../../model';

type Props = {
	productId: string;

	size?: 's' | 'm' | 'l';
};

export const AddProductToWishlistBtnIcon = ({ productId, size }: Props) => {
	const { isAdded, toggleFavorite } = useWishlist(productId);
	return (
		<ButtonCustom
			type='button'
			childrenType={isAdded ? 'icon_active' : 'icon'}
			onClick={toggleFavorite}
			size={size}
			mode='public'
			className={'fs-m-2'}
		>
			{isAdded ? <LikeIcon /> : <LikeStrokeIcon />}
		</ButtonCustom>
	);
};
