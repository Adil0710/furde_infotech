import mongoose, { Schema, model, models } from "mongoose";

const OpinionSchema = new Schema({
  buttonId: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default models.Opinion || model("Opinion", OpinionSchema);
