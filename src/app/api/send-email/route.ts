// /app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ApplicationEmail } from "@/components/email-template";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

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


 // Generate PDF
 const pdfDoc = await PDFDocument.create();
 const page = pdfDoc.addPage([600, 800]);
 const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
 const fontSize = 12;
 
 let y = 750; // Starting Y-coordinate
 const startX = 50; // Starting X-coordinate
 const columnWidth = 180; // Width of each column
 
 // Function to draw a cell
 const drawCell = (text: string, x: number, y: number) => {
   page.drawText(text, {
     x,
     y,
     size: fontSize,
     font,
     color: rgb(0, 0, 0),
   });
 };
 
 // Function to draw a row
 const drawRow = (label: string, value: string, rowIndex: number) => {
   const rowY = y - rowIndex * 20; // Adjust Y based on row index
   drawCell(label, startX, rowY); // First column (label)
   drawCell(value || "-", startX + columnWidth, rowY); // Second column (value)
 };
 
 // Function to draw a divider line
 const drawDivider = (y: number) => {
   page.drawLine({
     start: { x: startX, y },
     end: { x: startX + 500, y },
     thickness: 1,
     color: rgb(0.7, 0.7, 0.7),
   });
 };
 
 // Draw table headers
 const drawHeader = (header: string, y: number) => {
   page.drawText(header, {
     x: startX,
     y,
     size: fontSize + 2,
     font,
     color: rgb(0, 0, 0),
   });
   return y - 25; // Add spacing below header
 };
 
 // Personal Details Section
 y = drawHeader("Personal Details", y);
 const personalDetails = [
   { label: "First Name", value: firstname },
   { label: "Last Name", value: lastname },
   { label: "Date of Birth", value: dob },
   { label: "Gender", value: gender },
   { label: "Phone", value: phone },
   { label: "Email", value: email },
   { label: "Caste", value: caste },
   { label: "Marital Status", value: maritalStatus },
   { label: "Address", value: address },
 ];
 
 personalDetails.forEach((detail, index) => drawRow(detail.label, detail.value, index));
 y -= personalDetails.length * 20; // Adjust Y-coordinate after rows
 
 // Add divider line
 y -= 1; // Add spacing before the line
 drawDivider(y);
 y -= 30; // Add spacing after the line
 
 // Educational Details Section
 y = drawHeader("Educational Details", y);
 const educationalDetails = [
   { label: "SSC School Name", value: schoolname },
   { label: "SSC Year", value: sscyear },
   { label: "SSC Marks", value: sscmarks },
 ];
 
 // Add SSC Details
 educationalDetails.forEach((detail, index) => drawRow(detail.label, detail.value, index));
 y -= educationalDetails.length * 20 + 10; // Add spacing after SSC
 
 // Add HSC / Diploma Details
 const hscDetails = [
   { label: "HSC / Diploma Name", value: hscdiplomaname },
   { label: "HSC / Diploma Department", value: hscdiplomadepartment },
   { label: "HSC / Diploma Year", value: hscdiplomayear },
   { label: "HSC/ Diploma Marks", value: hscdiplomamarks },
 ];
 
 hscDetails.forEach((detail, index) => drawRow(detail.label, detail.value, index));
 y -= hscDetails.length * 20 + 10; // Add spacing after HSC
 
 // Add Graduation Details
 if (graduationname) {
   const graduationDetails = [
     { label: "Graduation Name", value: graduationname },
     { label: "Graduation Department", value: graduationdepartment },
     { label: "Graduation Year", value: graduationyear },
     { label: "Graduation Marks", value: graduationmarks },
   ];
   graduationDetails.forEach((detail, index) => drawRow(detail.label, detail.value, index));
   y -= graduationDetails.length * 20 + 10; // Add spacing after graduation
 }
 
 // Add Post-Graduation Details
 if (pgraduationname) {
   const postGraduationDetails = [
     { label: "Post-Graduation Name", value: pgraduationname },
     { label: "Post-Graduation Department", value: pgraduationdepartment },
     { label: "Post-Graduation Year", value: pgraduationyear },
     { label: "Post-Graduation Marks", value: pgraduationmarks },
   ];
   postGraduationDetails.forEach((detail, index) => drawRow(detail.label, detail.value, index));
   y -= postGraduationDetails.length * 20 ; // Add spacing after post-graduation
 }
 
 // Add divider line
 y -= 1;
 drawDivider(y);
 y -= 30;
 
 // Professional Details Section
 y = drawHeader("Professional Details", y);
 const professionalDetails = [
   { label: "Experience", value: experience },
   { label: "Courses Done", value: courses },
   { label: "Languages Known", value: languages },
   { label: "Own a Vehicle", value: vehicle },
 ];
 
 professionalDetails.forEach((detail, index) => drawRow(detail.label, detail.value, index));
 y -= professionalDetails.length * 20; // Adjust Y-coordinate after rows
 
 // Save the PDF
 const pdfBytes = await pdfDoc.save();
 const pdfAttachment = {
   filename: `${firstname}-${lastname}-application-details.pdf`,
   content: Buffer.from(pdfBytes).toString("base64"),
   contentType: "application/pdf",
 };
 

    // Attempt to send the email
    const { data, error } = await resend.emails.send({
      from: "New Application Received <onboarding@resend.dev>",
      to: "info@furdeinfotech.com",
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
      attachments: [resumeAttachment, pdfAttachment],
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
