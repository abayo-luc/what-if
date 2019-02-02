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
app.use(express.static(path.join(__dirname, "client/build")));

//api routers
app.use("/api", routers);
//render views
// app.use("/", pages);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
