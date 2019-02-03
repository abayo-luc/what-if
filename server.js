import express from "express";
import path from "path";
import passport from "passport";
import passportConfiguriton from "./middlewares/passport";
const app = express();
//bring in the routers
import routers from "./routes";
import pages from "./routes/pages";
//passport configuration
app.use(passport.initialize());
passportConfiguriton(passport);
// configuration middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//load static pages html and cess
app.use(express.static(path.join(__dirname, "client/build")));

//api routers
app.use("/api/v1/", routers);
//render views
// app.use("/", pages);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
