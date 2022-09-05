import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
