/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
        permanent: true, // or false, depending on whether you want a permanent or temporary redirect
      },
    ];
  },
};

export default  nextConfig;
