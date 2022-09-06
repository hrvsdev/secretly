import nodemailer from "nodemailer";

const sendMail = async () => {
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
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
