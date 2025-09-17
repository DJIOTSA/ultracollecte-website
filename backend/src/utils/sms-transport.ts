export const sendSMS = async ({
  message,
  to,
  from,
}: {
  message: string
  to: string
  from: string
}) => {
  try {
    const response = await fetch(
      `https://api.avlytext.com/v1/sms?api_key=${process.env.AVLYTEXT_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: from,
          recipient: to,
          text: message,
        }),
      },
    )

    if (!response.ok) {
      console.error('Error sending SMS:', response.status, response.statusText)
    }

    return await response.json()
  } catch {}
}
