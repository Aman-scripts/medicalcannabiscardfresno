import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/legal", destination: "/policy/", permanent: true },
      { source: "/legal/", destination: "/policy/", permanent: true },
      { source: "/privacy", destination: "/policy/privacy-policy/", permanent: true },
      { source: "/privacy/", destination: "/policy/privacy-policy/", permanent: true },
      {
        source: "/policy/privacy",
        destination: "/policy/privacy-policy/",
        permanent: true,
      },
      {
        source: "/policy/privacy/",
        destination: "/policy/privacy-policy/",
        permanent: true,
      },
      { source: "/terms", destination: "/policy/terms-of-use/", permanent: true },
      { source: "/terms/", destination: "/policy/terms-of-use/", permanent: true },
      {
        source: "/terms-of-use",
        destination: "/policy/terms-of-use/",
        permanent: true,
      },
      {
        source: "/terms-of-use/",
        destination: "/policy/terms-of-use/",
        permanent: true,
      },
      {
        source: "/policy/terms",
        destination: "/policy/terms-of-use/",
        permanent: true,
      },
      {
        source: "/policy/terms/",
        destination: "/policy/terms-of-use/",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/policy/refund-policy/",
        permanent: true,
      },
      {
        source: "/refund-policy/",
        destination: "/policy/refund-policy/",
        permanent: true,
      },
      {
        source: "/shipment-policy",
        destination: "/policy/shipment-policy/",
        permanent: true,
      },
      {
        source: "/shipment-policy/",
        destination: "/policy/shipment-policy/",
        permanent: true,
      },
      {
        source: "/hipaa-compliance",
        destination: "/policy/hipaa-compliance/",
        permanent: true,
      },
      {
        source: "/hipaa-compliance/",
        destination: "/policy/hipaa-compliance/",
        permanent: true,
      },
      {
        source: "/consent-for-telehealth",
        destination: "/policy/consent-for-telehealth/",
        permanent: true,
      },
      {
        source: "/consent-for-telehealth/",
        destination: "/policy/consent-for-telehealth/",
        permanent: true,
      },
      {
        source: "/accessibility-statement",
        destination: "/policy/accessibility-statement/",
        permanent: true,
      },
      {
        source: "/accessibility-statement/",
        destination: "/policy/accessibility-statement/",
        permanent: true,
      },
      {
        source: "/editorial-policy",
        destination: "/policy/editorial-policy/",
        permanent: true,
      },
      {
        source: "/editorial-policy/",
        destination: "/policy/editorial-policy/",
        permanent: true,
      },
      {
        source: "/disclaimer",
        destination: "/policy/disclaimer/",
        permanent: true,
      },
      {
        source: "/disclaimer/",
        destination: "/policy/disclaimer/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
