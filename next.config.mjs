/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: '*.supabase.co', pathname: '/storage/**' },
    ],
  },
};

export default nextConfig;
