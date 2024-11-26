import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Message", messageSchema);
