/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nazym-online-shop.s3.ap-southeast-1.amazonaws.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
