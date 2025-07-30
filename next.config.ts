import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;