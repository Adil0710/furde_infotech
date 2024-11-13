import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/components/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") as string) ?? ""
    const phone = (formData.get("phone") as string) ?? ""
    const email = (formData.get("email") as string) ?? ""
    const service = (formData.get("service") as string) ?? ""

    const {data, error} = await resend.emails.send({
        from: `New Message Received from <onboarding@resend.dev>`,
        to: "info@furdeinfotech.com",
        subject: `Message Received for ${service} query`,
        replyTo: email,
        react: ContactEmail({name: name, phone: phone, email: email, service: service})
    })
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