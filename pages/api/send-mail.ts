import nodemailer from "nodemailer";

import recieptTemp from "../../templates/email/receipt";
import deliveryTemp from "../../templates/email/delivery";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = req.query.type as string;
  const email = req.query.email as string;
  const link = req.query.link as string;
  const id = req.query.id as string;
  const time = new Date().toString()

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
      subject: type === "delivery" ? "It's a secret" : "Secret opened",
      html: type === "delivery" ? deliveryTemp(link) : recieptTemp(id, time),
    });
    res.send(info);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
