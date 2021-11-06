const isProd = process.env.NODE_ENV === "production";
module.exports = {
    assetPrefix: isProd ? "https://urman.su" : "",
    reactStrictMode: true,
    images: {
        domains: ["admin.urman.su", "img.youtube.com"],
    },
};
