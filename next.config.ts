import { withContentlayer } from "next-contentlayer2"
import bundleAnalyzer from "@next/bundle-analyzer"
import type { NextConfig } from "next"

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src "self";
  script-src "self" "unsafe-eval" "unsafe-inline" giscus.app analytics.umami.is;
  style-src "self" "unsafe-inline";
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src "self";
  frame-src giscus.app
`

const output = process.env.EXPORT ? "export" : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

const nextConfig: NextConfig = {
  output,
  basePath,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // Next.js 16: Enable Cache Components (disabled in export mode)
  cacheComponents: process.env.EXPORT ? false : true,

  // Disable PPR for compatibility with static export
  experimental: {
    ppr: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    unoptimized,
  },

  // Turbopack configuration (Next.js 16 default)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Webpack configuration (fallback when using --webpack flag)
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

const plugins = [withContentlayer, withBundleAnalyzer]
export default plugins.reduce((acc, next) => next(acc), nextConfig)
