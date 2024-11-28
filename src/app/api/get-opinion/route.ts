import { getServerSession } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import { authOptions } from "../auth/[...nextauth]/options";
import Opinion from "@/models/Opinion";

export async function GET() {
  try {
    await dbConnect();

    // Get session details
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

    // Fetch all opinions from the database
    const opinions = await Opinion.find({});

    return new Response(
      JSON.stringify({
        success: true,
        message: "All opinions retrieved successfully",
        data: opinions,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching opinion data:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while fetching opinion data",
      }),
      { status: 500 }
    );
  }
}
