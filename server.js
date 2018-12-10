import express from "express";
import path from "path";
const app = express();

// configuration middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//load static pages html and cess
app.use(express.static(path.join(__dirname, "./UI")));

//index path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./UI/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
