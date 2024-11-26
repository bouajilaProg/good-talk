import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  /* friends: {
     type: Array,
     default: [],
   },*/
});

export interface User {
  name: string;
  email: string;
  password: string;
  verified: boolean;
  //  friends: string[];
}

export default mongoose.model("User", userSchema);
