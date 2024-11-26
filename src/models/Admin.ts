import mongoose, { Schema, Document } from "mongoose";

export interface Admin extends Document {
  email: string;
  password: string;
}

const AdminSchema: Schema<Admin> = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel =
  mongoose.models.Admin || mongoose.model<Admin>('Admin', AdminSchema);

export default AdminModel;