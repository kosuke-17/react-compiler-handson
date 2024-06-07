/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // reactCompiler: true,
    reactCompiler: {
      compilationMode: 'annotation',
    },
  },
}

export default nextConfig
