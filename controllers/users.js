import bcrypt from "bcrypt";
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
        res.json({ user });
      })
      .catch(err => {
        console.log(err);
        res.json({ message: "Unknown error occured" });
      });
  }
}
