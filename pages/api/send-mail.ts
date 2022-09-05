import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const transporter = nodemailer.createTransport("SMTP", {
        service: "hotmail",
        auth: {
            user: "scrtly@hotmail.com",
            pass: "@Hrvs.dev822"
        }
    });

  try {
    const info = await transporter.sendMail({
      from: "Secretly <scrtly@hotmail.com>",
      to: "itsharshvyas@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
    });
    res.send(info);
  } catch (error) {
    res.json(error);
  }
}
