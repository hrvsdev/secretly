import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, link } = req.query;

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
      to: email,
      subject: "It's a secret",
      text: `Your secret: \n${link} \n For one time only \n, By secret.hrvs.me`,
    });
    res.send(info);
  } catch (error) {
    res.json(error);
  }
}