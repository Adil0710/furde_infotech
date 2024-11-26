import mongoose, { Schema, Document } from "mongoose";

// Define the interface for a Job document
export interface Job extends Document {
  designation: string;
  department: string;
  description: string;
  location: string;
  type: "Full Time" | "Part Time" | "Internship";
  level: "Entry" | "Experienced"; // To differentiate between entry-level and experienced jobs
}

// Define the schema for jobs
const JobSchema: Schema<Job> = new mongoose.Schema(
  {
    designation: {
      type: String,
      required: [true, "Designation is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    type: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship"],
      required: [true, "Job type is required"],
    },
    level: {
      type: String,
      enum: ["Entry", "Experienced"],
      required: [true, "Job level is required"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Job model
const JobModel = mongoose.models.Job || mongoose.model<Job>("Job", JobSchema);

export default JobModel;
