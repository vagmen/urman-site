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

        server.get("/uslugi/:id", (req, res) => {
            const actualPage = "/uslugi/" + req.params.id;
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage);
        });

        server.get("/admin/posts/:id", (req, res) => {
            const actualPage = "/admin/posts/edit";
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(80, err => {
            if (err) throw err;
            console.log("> Ready on http://localhost:80");
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
