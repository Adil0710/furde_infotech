import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import JobModel from "@/models/Job";
import mongoose from "mongoose";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    // Authenticate user
    const session = await getServerSession(authOptions);
    if (!session || !session.admin) {
      return new Response(
        JSON.stringify({ success: false, message: "Not Authenticated" }),
        { status: 401 }
      );
    }

    const { id } = params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid Job ID" }),
        { status: 400 }
      );
    }

    const body = await request.json();
    const { designation, department, description, location, type, level } =
      body;

    // Find and update job
    const job = await JobModel.findById(id);
    if (!job) {
      return new Response(
        JSON.stringify({ success: false, message: "Job not found" }),
        { status: 404 }
      );
    }

    job.designation = designation || job.designation;
    job.department = department || job.department;
    job.description = description || job.description;
    job.location = location || job.location;
    job.type = type || job.type;
    job.level = level || job.level;

    const updatedJob = await job.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Job updated successfully",
        job: updatedJob,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
