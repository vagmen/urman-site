const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

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

        const PORT = process.env.PORT || 3000;
        server.listen(PORT, (err) => {
            if (err) throw err;

            console.log(`Our app is running on port ${PORT}`);
        });

        // server.listen(3000, (err) => {
        //     if (err) throw err;
        //     console.log(`> Ready on http://localhost: 3000`);
        // });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
