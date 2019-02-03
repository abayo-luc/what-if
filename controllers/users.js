import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models";
export default class UserController {
  static allUsers(req, res) {
    User.findAll()
      .then(users => {
        res.json({ users });
      })
      .catch(err => {
        console.log(err);
      });
  }

  static create(req, res) {
    const { email, firstName, lastName, password, phone } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (errors, hash) => {
        if (errors) {
          return res
            .status(500)
            .json({ message: "password encryption failed" });
        }
        User.create({ email, firstName, lastName, password: hash, phone })
          .then(user => {
            res.json({ user });
          })
          .catch(err => {
            console.log(err.errors);
            res.status(500).json({ message: "Registration failed" });
          });
      });
    });
  }

  static find(req, res) {
    const { id } = req.params;
    User.findById(id)
      .then(user => {
        return res.json({ user });
      })
      .catch(err => {
        console.log(err);
        return res.json({ message: "Unknown error occured" });
      });
  }

  static async login(req, res) {
    const { email, password } = req.body;

    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: "Invalid email or password" });
        }
        bcrypt.compare(password, user.password, (error, match) => {
          if (match) {
            const payload = {
              id: user.id,
              email: user.email,
              phone: user.phone
            };
            jwt.sign(
              payload,
              process.env.SECRET_OR_KEY,
              { expiresIn: "1d" },
              (err, token) => {
                if (err) {
                  return res.status(500).json({ message: "login failed" });
                }
                return res.json({ user, token });
              }
            );
          } else {
            return res
              .status(400)
              .json({ message: "Invalid email or password" });
          }
        });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errors: error });
      });
  }
}
