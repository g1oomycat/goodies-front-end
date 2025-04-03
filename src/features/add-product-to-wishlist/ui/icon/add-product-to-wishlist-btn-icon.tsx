'use client';

import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { LikeIcon } from '@/shared/ui/icons/like';
import { LikeStrokeIcon } from '@/shared/ui/icons/like-stroke';
import { useWishlist } from '../../model';

type Props = {
	productId: string;
};

export const AddProductToWishlistIcon = ({ productId }: Props) => {
	const { isAdded, toggleFavorite } = useWishlist(productId);

	return (
		<ButtonIcon
			onClick={toggleFavorite}
			colorType={isAdded ? 'active' : 'primary_opacity'}
		>
			{isAdded ? <LikeIcon /> : <LikeStrokeIcon />}
		</ButtonIcon>
	);
};
