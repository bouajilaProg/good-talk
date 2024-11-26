import mongoose from "mongoose";

const Conversation = new mongoose.Schema({
  user1: {
    type: String,
    required: true,
  },
  user2: {
    type: String,
    required: true,
  },
  messages: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("conversation", Conversation);
