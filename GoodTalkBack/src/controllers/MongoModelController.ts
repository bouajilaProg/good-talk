import { Request, Response } from "express";

// messages

//get the messages of the conversation between two users
// takes user1 and user2 as parameters
// returns the messages between the two users
function GetMessages(req: Request, res: Response) {
  res.send("Hello World");
}

//save a message to the database
function saveMessage(req: Request, res: Response) {
  res.send("Hello World");
}

// users

//takes password and username as parameters
//returns the user object if the user exists
function CheckUser(req: Request, res: Response) {
  res.send("Hello World");
}

//takes password and username and email as a parameter
function CreateUser(req: Request, res: Response) {
  res.send("Hello World");
}
