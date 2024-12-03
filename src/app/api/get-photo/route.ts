import dbConnect from "@/lib/dbConnect";
import GalleryModel from "@/models/Gallery";


export async function GET () {
    try {
        await dbConnect()

        const gallery = await GalleryModel.find().sort({createdAt: -1})

        
    return new Response(
        JSON.stringify({
          success: true,
          gallery,
        }),
        { status: 200 }
      );


    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return new Response(
          JSON.stringify({
            success: false,
            message: "An error occurred while fetching gallery images",
          }),
          { status: 500 }
        );
      }
    }
    