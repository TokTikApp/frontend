/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'lorem.picsum.com'
            }
        ]
    }
};

export default nextConfig;
