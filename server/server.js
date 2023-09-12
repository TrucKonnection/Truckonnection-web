const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Cross-Origin Resource Sharing
const dotenv = require('dotenv');
const serverless = require('serverless-http');

const app = express();

dotenv.config({ path: '../.env'});

const router = express.Router();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON requests

app.use('/.netlify/functions/server', router)

router.post('/', async (req, res) => {
	res.json({
		'hello': 'Hello from Express'
	})
})

// Endpoint to send email
app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',   // Use Gmail as the email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const htmlContent = `
    <style>
 	body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
	table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
	img { -ms-interpolation-mode: bicubic; }
	img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
	table { border-collapse: collapse !important; }
	body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
	a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
	div[style*="margin: 16px 0;"] { margin: 0 !important; }
 	</style>
	<body style="background-color: #f7f5fa; margin: 0 !important; padding: 0 !important;">
		<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td bgcolor="black" align="center">
					<table border="0" cellpadding="0" cellspacing="0" width="480" >
						<tr>
							<td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
								<div style="display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">Truckonnection</div>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td bgcolor="black" align="center" style="padding: 0px 10px 0px 10px;">
					<table border="0" cellpadding="0" cellspacing="0" width="480" >
						<tr>
							<td bgcolor="#ffffff" align="left" valign="top" style="padding: 30px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
								<h1 style="font-size: 32px; font-weight: 400; margin: 0;">E-Mail from ${name}</h1>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
					<table border="0" cellpadding="0" cellspacing="0" width="480" >
						<tr>
							<td bgcolor="#ffffff" align="left">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="2" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                                            <p>${message}</p>
                                        </td>
                                    </tr>
									<tr>
										<th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">E-Mail</th>
										<td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${email}</td>
									</tr>
                                    <tr>
										<th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Name</th>
										<td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:10px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${name}</td>
									</tr>
                                    <tr>
										<th align="left" valign="top" style="padding-left:30px;padding-right:15px;padding-bottom:30px; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">Phone</th>
										<td align="left" valign="top" style="padding-left:15px;padding-right:30px;padding-bottom:30px;font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${phone}</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td bgcolor="#ffffff" align="center">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td bgcolor="#ffffff" align="center" style="padding: 30px 30px 30px 30px; border-top:1px solid #dddddd;">
											<table border="0" cellspacing="0" cellpadding="0">
										
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
    `;

    // Email data
    const mailOptions = {
        from: 'dionte.johnson0407@gmail.com',
        to: 'dionte.johnson0407@gmail.com', // Recipient's email
        subject: 'New Contact Form Submission',
        html: htmlContent,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log('Not Email sent successfully');
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
