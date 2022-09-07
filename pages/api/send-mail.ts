import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, link } = req.query;
  console.log(email, link)

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "scrtly@hotmail.com",
      pass: "@Hrvs.dev822",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "Secretly <scrtly@hotmail.com>",
      to: email,
      subject: "It's a secret",
      text: `Your secret: \n${link} \n \n \n By Secretly`,
    });
    res.send(info);
  } catch (error) {
    console.log(error)
    res.json(error);
  }
}
