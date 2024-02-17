/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagpedia.net",
        port: "",
        pathname: "/data/flags/h120/**",
      },
    ],
  },
};

export default nextConfig;
