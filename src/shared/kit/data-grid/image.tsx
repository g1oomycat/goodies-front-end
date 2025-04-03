import Image from 'next/image';
interface Props {
	url: string;
	alt: string;
}
export const ImageDataGrid = ({ url, alt }: Props) => {
	return (
		<div
			style={{
				position: 'relative',
				margin: '0.7rem 0rem',
				width: '7rem',
				height: '7rem',
			}}
		>
			<div
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundColor: 'var(--bg-color)',
					opacity: 0.2,
					zIndex: 2,
				}}
			></div>
			<Image src={url} alt={alt} width={70} height={70} />
		</div>
	);
};
