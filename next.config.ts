import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static generation for better SEO
  trailingSlash: true,

  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bosch.com.vn"
      },
      {
        protocol: "https",
        hostname: "*.bosch.com.vn"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      },
      {
        protocol: "https",
        hostname: "*.cloudinary.com"
      },
      {
        protocol: "https",
        hostname: "*.bosch.com"
      },
      {
        protocol: "https",
        hostname: "assets.bosch.com"
      }
    ],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  // Optimize for SEO
  compress: true,
  poweredByHeader: false,

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react"]
  },

  // Security headers for better SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      }
    ]
  }
}

export default nextConfig;
