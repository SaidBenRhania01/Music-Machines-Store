import { sendEmail } from "@/utils/mail.utils";

export async function POST(req) {
  const { clientName, clientEmail, clientMessage } = await req.json();

  const sender = {
    name: "Test",
    address: "test@gmail.com",
  };

  const receipients = [
    {
      name: process.env.MUSICSTORE_NAME,
      address: process.env.MUSICSTORE_MAIL,
    },
  ];

  const htmlMessage = `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
      <div style="max-width: 600px; background-color: #ffffff; margin: auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <p style="font-size: 16px; color: #333333;">Name : ${clientName}</p>
        <p style="font-size: 16px; color: #333333;">Email : ${clientEmail}</p>
        <p style="font-size: 16px; color: #333333;">Message : ${clientMessage}</p>
      </div>
    </body>
  `;

  try {
    const result = await sendEmail({
      sender,
      receipients,
      subject: "Welcome to our website!",
      message: htmlMessage,
      isHtml: true,
    });

    return new Response(
      JSON.stringify({
        accepted: result.accepted,
        success: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error",
        error,
      }),
      { status: 500 }
    );
  }
}
