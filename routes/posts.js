import { Router } from "express";

const postRouters = Router();

postRouters
  .get("/posts", (req, res) => {
    res.json({ msg: "All post" });
  })
  .post("/posts", (req, res) => {
    res.json({ msg: "post post" });
  })
  .get("/posts/:id", (req, res) => {
    res.json({ msg: "get one post" });
  })
  .put("/posts/:id", (req, res) => {
    res.json({ message: "update one post" });
  })
  .delete("/posts/:id", (req, res) => {
    res.json({ message: "delete post" });
  });

export default postRouters;
