import mongoose, { Schema, Document } from "mongoose";

// Define the interface for a Job document
export interface Gallery extends Document {
  title: string;
  image: string;
  category: "Office" | "Events" | "Client Visits";
  orientation: "horizontal" | "vertical"; 
}


const GallerySchema: Schema<Gallery> = new mongoose.Schema(
    {
      
      title: {
        type: String,
        required: [true, "Title is required"],
      },
      image: {
        type: String,
        required: [true, "Image is required"],
      },
     
      category: {
        type: String,
        enum: ["Office", "Events", "Client Visits"],
        required: [true, "Category is required"],
      },
      orientation: {
        type: String,
        enum: ["horizontal", "vertical"],
        required: [true, "Orientation is required"],
      },
    },
    {
      timestamps: true, // Automatically add createdAt and updatedAt fields
    }
  );

  const GalleryModel = mongoose.models.Gallery || mongoose.model<Gallery>("Gallery", GallerySchema);

export default GalleryModel;