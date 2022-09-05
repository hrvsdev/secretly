import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "itzharshvyas@gmail.com",
      pass: "harsh.123",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "Secretly <i@hrvs.me>",
      to: "itsharshvyas@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
    });
    res.send(info);
  } catch (error) {
    res.json(error);
  }
}
