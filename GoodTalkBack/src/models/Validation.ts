import mongoose from "mongoose";

const validationSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  validationCode: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Validation", validationSchema);
