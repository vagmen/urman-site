const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = "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";

const sendEmail = async ({ name, email }) => {
    await fetch(SENDGRID_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [
                        {
                            email: "vagmen27@gmail.com",
                        },
                    ],
                    subject: "Demo success :)",
                },
            ],
            from: {
                email: "noreply@demo.com",
                name: "Test SendGrid",
            },
            content: [
                {
                    type: "text/html",
                    value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`,
                },
            ],
        }),
    });
};

export { sendEmail };
