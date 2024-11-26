import mongoose from "mongoose";
import { Request, Response } from "express";
import { User } from "../models/User";

function login(req: Request, res: Response) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("Email and password required");
  }
  const User = mongoose.model("User");
  User.findOne({ email: req.body.email }, (err: Error, user: User) => {
    if (err) {
      return res.status(500).send("Error on the server.");
    }
    if (!user) {
      return res.status(404).send("No user found.");
    }
    if (user.password !== req.body.password) {
      return res.status(401).send("Password is incorrect");
    }
    return res.status(200).send(user);
  });
}

export { login };
