"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");
 

  try {
    const data = await resend.emails.send({
      from: "FinnovateAI <onboarding@resend.dev>",
      to,
      subject,
      react,
    });
    console.log("Email sent");
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
