const path = require("path");
const glob = require("glob");
const fs = require("fs");

const SITE_ROOT = process.env.SITE_ROOT || "http://urman.su";
const SOURCE = process.env.SOURCE || path.join(__dirname, "..", "pages", "/**/*.js");
const DESTINATION = process.env.DESTINATION || path.join(__dirname, "..", "static", "sitemap.xml");

let diskPages = glob.sync(SOURCE);

let xml = "";
xml += '<?xml version="1.0" encoding="UTF-8"?>';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

const filteredPages = diskPages.filter(
    page => !page.match(/\/admin/) && !page.match(/\/agreement/) && !page.match(/\/_error/)
);

filteredPages.forEach(page => {
    if (page.match(/.*\/admin$/)) {
        return false;
    }
    let stats = fs.statSync(page);
    let modDate = new Date(stats.mtime);
    let lastMod = `${modDate.getFullYear()}-${("0" + (modDate.getMonth() + 1)).slice(-2)}-${(
        "0" + modDate.getDate()
    ).slice(-2)}`;

    page = page.replace(path.join(__dirname, "..", "pages"), "");
    page = page.replace(/.js$/, "");

    page = `${SITE_ROOT}${page}`;

    if (page.match(/.*\/index$/)) {
        page = page.replace(/(.*)\/index$/, "$1");
    }
    xml += "<url>";
    xml += `<loc>${page}</loc>`;
    xml += `<lastmod>${lastMod}</lastmod>`;
    xml += `<changefreq>always</changefreq>`;
    xml += `<priority>0.5</priority>`;
    xml += "</url>";
});

xml += "</urlset>";

fs.writeFileSync(DESTINATION, xml);

console.log(`Wrote sitemap for ${filteredPages.length} pages to ${DESTINATION}`);
