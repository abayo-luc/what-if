import express from "express";
import path from "path";
const app = express();
//bring in the routers
import routers from "./routes";
import pages from "./routes/pages";
// configuration middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//load static pages html and cess
app.use(express.static("views/"));
app.set("view engine", "ejs");

//api routers
app.use("/api", routers);
//render views
app.use("/", pages);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
