import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import GalleryModel from "@/models/Gallery";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: Request) {
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

    const formData = await request.formData();
    const file = formData.get("image") as File;
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;

    if (!file || !title || !category) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required.",
        }),
        { status: 400 }
      );
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload image to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "gallery" }, (error, result) => {
          if (error) {
            return reject(new Error("Failed to upload image to Cloudinary"));
          }
          resolve(result);
        })
        .end(buffer);
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { secure_url: secureUrl, width, height } = uploadResult as any;
   

    // Determine orientation based on dimensions
    const orientation = width >= height ? "horizontal" : "vertical";

    const newGalleryItem = new GalleryModel({
      title,
      image: secureUrl,
      category,
      orientation,
    });

    await newGalleryItem.save();

    return new Response(
      JSON.stringify({
        success: true,
        data: newGalleryItem,
      }),
      { status: 201 }
    );
  } catch (error: any) {
   
    return new Response(
      JSON.stringify({
        success: false,
        message:
          error.message || "An error occurred while adding Gallery Image",
      }),
      { status: 500 }
    );
  }
}
