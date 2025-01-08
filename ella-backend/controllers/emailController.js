const createTransporter = require("../config/nodemailerConfig");

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: "lmgandhi11@gmail.com", // Eeela's email address
    subject: `New Contact Form Submission from ${email}`,
    text: `${name} writes...>  ${message}`,
  };

  const transporter = createTransporter();

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
};
