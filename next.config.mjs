/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // This will allow images from any hostname
            },
            {
                protocol: 'http',
                hostname: '**', // This will allow images from any hostname over http as well
            },
        ],
    },
};

export default nextConfig;
