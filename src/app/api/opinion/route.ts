import dbConnect from "@/lib/dbConnect";
import Opinion from "@/models/Opinion";

export async function PUT(request: Request) {
  try {
    await dbConnect();

    const { buttonId } = await request.json();

    if (!buttonId) {
      return new Response(
        JSON.stringify({ success: false, message: "buttonId is required" }),
        { status: 400 }
      );
    }

    // Find or create the button entry, and increment its count
    const opinion = await Opinion.findOneAndUpdate(
      { buttonId },
      { $inc: { count: 1 } }, // Increment the count by 1
      { new: true, upsert: true } // Create if it doesn't exist
    );

    return new Response(
      JSON.stringify({ success: true, message: "Button clicked", opinion }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({ success: false, message: "An error occurred" }),
      { status: 500 }
    );
  }
}
