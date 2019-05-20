import express from 'express';
import cors from 'cors';
import passport from 'passport';
import passportConfiguriton from './middlewares/passport';
const app = express();
//bring in the routers
import routers from './routes';
//passport configuration
app.use(passport.initialize());
passportConfiguriton(passport);
// configuration middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//load static pages html and cess

//api routers
app.use('/api/v1/', routers);
//render views
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
