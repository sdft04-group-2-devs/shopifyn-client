/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mailjet from 'node-mailjet';

const mailjetClient = mailjet.connect('352bb8e0120c8880cdd76d3ad2d16a82', 'fd0e850b2a461f5746571bcc796551f0');

const sendEmail = async () => {
    const request = mailjetClient.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'your@email.com',
            Name: 'Your Name',
          },
          To: [
            {
              Email: 'recipient@email.com',
              Name: 'Recipient Name',
            },
          ],
          Subject: 'Hello from Mailjet',
          TextPart: 'My awesome email content.',
        },
      ],
    });
    try {
      const response = await request;
      console.log('Email sent successfully!', response.body);
    } catch (error) {
      console.error('Error sending email:', error.statusCode, error);
    }
  };