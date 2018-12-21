import { Router } from "express";

const eventRouters = Router();

eventRouters
  .get("/events", (req, res) => {
    res.json({ msg: "All event" });
  })
  .post("/events", (req, res) => {
    res.json({ msg: "event post" });
  })
  .get("/events/:id", (req, res) => {
    res.json({ msg: "get one event" });
  })
  .put("/events/:id", (req, res) => {
    res.json({ message: "update one event" });
  })
  .delete("/events/:id", (req, res) => {
    res.json({ message: "delete event" });
  });

export default eventRouters;
