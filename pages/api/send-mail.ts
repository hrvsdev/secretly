import nodemailer from "nodemailer";
import date from "date-and-time";
import isEmail from "email-validator";
import isUrl from "is-url";

import recieptTemp from "../../templates/email/receipt";
import deliveryTemp from "../../templates/email/delivery";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = req.query.type as string;
  const email = req.query.email as string;
  const link = req.query.link as string;
  const id = req.query.id as string;
  const time = date.format(new Date(), "dddd, MMM DD YYYY at HH:mm:ss [UTC]ZZ");

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "scrtly@hotmail.com",
      pass: "@Hrvs.dev822",
    },
  });

  const sendMail = async (subject: string, html: string) => {
    try {
      const info = await transporter.sendMail({
        from: "Secretly <scrtly@hotmail.com>",
        to: email,
        subject: subject,
        html: html,
      });
      res.send(info);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  // Checking if email is valid
  if (!isEmail.validate(email)) return res.status(400).json({ error: "Invalid email" });

  switch (type) {
    case "receipt":
      if (!id) return res.status(400).json({ error: "Invalid ID" });
      await sendMail("Secret opened", recieptTemp(id, time));
      break;

    case "delivery":
      if (!isUrl(link?.trim())) return res.status(400).json({ error: "Invalid link" });
      await sendMail("It's a secret", deliveryTemp(link));
      break;

    default:
      res.status(400).json({ error: "Invalid type" });
      break;
  }
}
