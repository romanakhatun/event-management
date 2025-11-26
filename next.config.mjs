/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://dishvent.kitkitgo.com/**")],
  },
};

export default nextConfig;
