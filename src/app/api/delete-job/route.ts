import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import JobModel from "@/models/Job";
import mongoose from "mongoose";

export async function DELETE(request: Request) {
  try {
    // Connect to the database
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

    // Parse the request body
    const { id } = await request.json();

    // Validate the job ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid Job ID",
        }),
        { status: 400 }
      );
    }

    // Find and delete the job
    const job = await JobModel.findById(id);
    if (!job) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Job not found",
        }),
        { status: 404 }
      );
    }

    await job.deleteOne();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Job deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting job:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while deleting the job",
      }),
      { status: 500 }
    );
  }
}
