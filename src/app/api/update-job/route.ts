import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import JobModel from "@/models/Job";
import mongoose from "mongoose";

export async function PUT(request: Request) {
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
    const { id, designation, department, description, location, type, level } =
      await request.json();

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

    // Find the job by ID
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

    // Update job details
    job.designation = designation || job.designation;
    job.department = department || job.department;
    job.description = description || job.description;
    job.location = location || job.location;
    job.type = type || job.type;
    job.level = level || job.level;

    await job.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Job updated successfully",
        job,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating job:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while updating the job",
      }),
      { status: 500 }
    );
  }
}
