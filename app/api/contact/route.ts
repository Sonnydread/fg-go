import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, celular, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jgomez@fggopublicidad.com",
      pass: process.env.EMAIL_PASS, // contraseña de aplicación
    },
  });

  await transporter.sendMail({
   from: `"${name}" <jgomez@fggopublicidad.com>`,   // ← Cambia esto
      to: "jgomez@fggopublicidad.com",
      replyTo: email,                                 // ← Muy importante
      subject: `Website - Nuevo mensaje de ${name}`,
      html: `
        <h3>Website - Nuevo contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Celular:</strong> ${celular}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
  return Response.json({ success: true });
}