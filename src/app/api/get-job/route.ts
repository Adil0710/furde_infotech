import dbConnect from "@/lib/dbConnect";
import JobModel from "@/models/Job";

export async function GET(request: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract query parameters
    const { level, limit } = Object.fromEntries(new URL(request.url).searchParams);

    // Define the filter for level
    const filter: Record<string, string> = {}; // Using a specific type for filter
    if (level) {
      filter.level = level; // Filter by level if provided
    }

    // Convert limit to a number and apply it (default is all jobs if no limit is specified)
    const jobsLimit = limit ? parseInt(limit, 10) : undefined;

    // If no limit is provided, set a very large number to fetch all jobs
    const safeJobsLimit = jobsLimit ?? Infinity; // Default to Infinity if no limit is provided

    // Fetch jobs with optional limit
    const jobs = await JobModel.find(filter)
      .sort({ createdAt: -1 }) // Sort by most recent
      .limit(safeJobsLimit); // Apply the limit (safeJobsLimit will be Infinity if no limit)

    return new Response(
      JSON.stringify({
        success: true,
        jobs,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while fetching jobs",
      }),
      { status: 500 }
    );
  }
}
