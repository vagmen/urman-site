const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require("path");
const robotsOptions = {
    root: path.join(__dirname, "/static"),
    headers: {
        "Content-Type": "text/plain;charset=UTF-8",
    },
};
const sitemapOptions = {
    root: path.join(__dirname, "/static"),
    headers: {
        "Content-Type": "text/xml;charset=UTF-8",
    },
};
const faviconOptions = {
    root: path.join(__dirname, "/static"),
};

app.prepare()
    .then(() => {
        const server = express();

        server.get("/robots.txt", (req, res) => res.status(200).sendFile("robots.txt", robotsOptions));

        server.get("/sitemap.xml", (req, res) => res.status(200).sendFile("sitemap.xml", sitemapOptions));

        server.get("/favicon.ico", (req, res) => res.status(200).sendFile("favicon.ico", faviconOptions));

        server.get("/journal/:id", (req, res) => {
            const actualPage = "/journal/post";
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/services/:id", (req, res) => {
            const actualPage = `/services/${req.params.id}`;
            app.render(req, res, actualPage);
        });

        server.get("/regions/:id", (req, res) => {
            const actualPage = `/regions/region`;
            const queryParams = { region: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("/admin/posts/:id", (req, res) => {
            const actualPage = "/admin/posts/edit";
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost: 3000`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
