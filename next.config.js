const path = require("path");

/**
 * @type {import('next-react-svg').NextReactSvgConfig}
 */

// All svg file must be in /src/assets folder
const nextReactSvgConfig = {
  include: path.resolve(__dirname, "src/assets"),
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          port: "",
          pathname: "/**",
        },
    ],
  },
};

const withReactSvg = require("next-react-svg")(nextReactSvgConfig);

module.exports = withReactSvg(nextConfig);
