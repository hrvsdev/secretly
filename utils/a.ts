import nodemailer from "nodemailer";

const sendMail = async (email: string, link: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "itzharshvyas@gmail.com",
      pass: "harsh.123",
    },
  });

  try {
    await transporter.sendMail({
      from: "Secretly <i@hrvs.me>",
      to: email,
      subject: "It's a secret",
      text: `Your secret: \n${link} \n For one time only \n, By secret.hrvs.me`,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
