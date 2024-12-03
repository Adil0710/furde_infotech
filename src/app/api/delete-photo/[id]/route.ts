import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import GalleryModel from "@/models/Gallery";
import cloudinary from "@/lib/cloudinary";
import mongoose from "mongoose";


export async function DELETE( request: Request,
    { params }: { params: { id: string } }) {
    try {
      await dbConnect();
  
      const session = await getServerSession(authOptions);
      const admin = session?.admin;
  
      if (!session || !admin) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Not Authenticated",
          }),
          { status: 401 }
        );
      }
  
      const { id } = params;

    // Validate the job ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid Gallery ID",
        }),
        { status: 400 }
      );
    }

      // Find the gallery item
      const galleryItem = await GalleryModel.findById(id);
  
      if (!galleryItem) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Gallery item not found.",
          }),
          { status: 404 }
        );
      }
  
      // Extract the public ID from the Cloudinary URL
      const publicId = galleryItem.image.split("/").pop()?.split(".")[0];
  
      // Delete the image from Cloudinary
      await cloudinary.uploader.destroy(`gallery/${publicId}`);
  
      // Delete the gallery item from the database
      await GalleryModel.findByIdAndDelete(id);
  
      return new Response(
        JSON.stringify({
          success: true,
          message: "Gallery item deleted successfully.",
        }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting Gallery Image:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: "An error occurred while deleting Gallery Image",
        }),
        { status: 500 }
      );
    }
  }
  
