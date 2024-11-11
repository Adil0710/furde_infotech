// /app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ApplicationEmail } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstname = (formData.get("firstname") as string) ?? ""; // Default to empty string if null
    const lastname = (formData.get("lastname") as string) ?? "";
    const dob = (formData.get("dob") as string) ?? "";
    const gender = (formData.get("gender") as string) ?? "";
    const phone = (formData.get("phone") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const address = (formData.get("address") as string) ?? "";
    const caste = (formData.get("caste") as string) ?? "";
    const maritalStatus = (formData.get("maritalStatus") as string) ?? "";
    const schoolname = (formData.get("schoolname") as string) ?? "";
    const sscyear = (formData.get("sscyear") as string) ?? "";
    const sscmarks = (formData.get("sscmarks") as string) ?? "";
    const hscdiplomaname = (formData.get("hscdiplomaname") as string) ?? "";
    const hscdiplomadepartment =
      (formData.get("hscdiplomadepartment") as string) ?? "";
    const hscdiplomayear = (formData.get("hscdiplomayear") as string) ?? "";
    const hscdiplomamarks = (formData.get("hscdiplomamarks") as string) ?? "";
    const graduationname = (formData.get("graduationname") as string) ?? "";
    const graduationdepartment =
      (formData.get("graduationdepartment") as string) ?? "";
    const graduationyear = (formData.get("graduationyear") as string) ?? "";
    const graduationmarks = (formData.get("graduationmarks") as string) ?? "";
    const pgraduationname = (formData.get("pgraduationname") as string) ?? "";
    const pgraduationdepartment =
      (formData.get("pgraduationdepartment") as string) ?? "";
    const pgraduationyear = (formData.get("pgraduationyear") as string) ?? "";
    const pgraduationmarks = (formData.get("pgraduationmarks") as string) ?? "";
    const experience = (formData.get("experience") as string) ?? "";
    const courses = (formData.get("courses") as string) ?? "";
    const languages = (formData.get("languages") as string) ?? "";
    const vehicle = (formData.get("vehicle") as string) ?? "";
    const designation = (formData.get("designation") as string) ?? "";

    const resume = formData.get("resume") as File;

    if (!resume) {
      console.error("Error: 'resume' file is missing.");
      return NextResponse.json(
        { error: "'resume' field is required." },
        { status: 400 }
      );
    }

    // Convert the resume file to a base64-encoded string
    const resumeArrayBuffer = await resume.arrayBuffer();
    const resumeAttachment = {
      filename: resume.name,
      content: Buffer.from(resumeArrayBuffer).toString("base64"),
      contentType: resume.type,
    };

   

    // Attempt to send the email
    const { data, error } = await resend.emails.send({
      from: "New Application Received <onboarding@resend.dev>",
      to: "padil2246@gmail.com",
      subject: `Application Received for ${designation}`,
      replyTo: email,
      react: ApplicationEmail({
        firstName: firstname,
        lastName: lastname,
        dob: dob,
        gender: gender,
        phone: phone,
        email: email,
        address: address,
        caste: caste,
        maritalStatus: maritalStatus,
        schoolname: schoolname,
        sscyear: sscyear,
        sscmarks: sscmarks,
        hscdiplomaname: hscdiplomaname,
        hscdiplomadepartment: hscdiplomadepartment,
        hscdiplomayear: hscdiplomayear,
        hscdiplomamarks: hscdiplomamarks,
        graduationname: graduationname,
        graduationdepartment: graduationdepartment,
        graduationyear: graduationyear,
        graduationmarks: graduationmarks,
        pgraduationname: pgraduationname,
        pgraduationdepartment: pgraduationdepartment,
        pgraduationyear: pgraduationyear,
        pgraduationmarks: pgraduationmarks,
        experience: experience,
        courses: courses,
        languages: languages,
        vehicle: vehicle,
      }), // Pass the firstName to the template
      attachments: [resumeAttachment],
    });

    // Log response or error from Resend API
    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Unexpected error in POST function:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
