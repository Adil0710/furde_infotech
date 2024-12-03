import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import JobModel from "@/models/Job";

export async function POST(request: Request) {
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
    const { designation, department, description, location, type, level } =
      await request.json();

    // Validate required fields
    if (!designation || !department || !description || !location || !type || !level) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        { status: 400 }
      );
    }

    // Create a new job
    const job = await JobModel.create({
      designation,
      department,
      description,
      location,
      type,
      level,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Job added successfully",
        job,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while adding the job",
      }),
      { status: 500 }
    );
  }
}
