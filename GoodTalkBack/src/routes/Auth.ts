import { Router } from "express";
import { login } from "../controllers/AuthController";

const Auth = Router();

Auth.post("/login", (req, res) => console.log(req, res));

export default Auth;
