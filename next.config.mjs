import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const withPWA = nextPwa({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  // Outras configurações do Next.js aqui
};

export default withPWA(nextConfig);
