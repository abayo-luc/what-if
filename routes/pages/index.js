import { Router } from "express";
import models from "../../models";

const pages = Router();

pages.get("/", (req, res) => {
  models.Event.findAll()
    .then(events => {
      res.render("index", { events: JSON.stringify(events) });
    })
    .catch(err => {
      res.render("index", { errors: { message: "Unknown error" } });
    });
});

pages.get("/posts", (req, res) => {
  models.Post.findAll().then(posts => {
    res.render("blog", { posts: JSON.stringify(posts) });
  });
});

pages.get("/posts/:id", (req, res) => {
  models.Post.findById(req.params.id)
    .then(post => {
      res.render("post", { post: JSON.stringify(post) });
    })
    .catch(err => {
      res.render("post", { errors: { message: "Unknown error" } });
    });
});
export default pages;
