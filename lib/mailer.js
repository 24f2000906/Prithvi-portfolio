import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      text: message,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export const formatMessage = (data) => {
  return `Hey Prithvi,

My Name: ${data.name}
My Email: ${data.email}
Message: ${data.message}`;
};
