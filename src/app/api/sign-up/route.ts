import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { email, password } = await request.json();

    const existingAdmin = await AdminModel.findOne({ email });

    if (existingAdmin) {
      return Response.json(
        {
          success: false,
          message: "Admin already exist with this email",
        },
        { status: 400 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new AdminModel({
        email,
        password: hashedPassword,
      });
      await newUser.save();
    }

    return Response.json(
      {
        success: true,
        message: "Admin registered Successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      }
    );
  }
}
