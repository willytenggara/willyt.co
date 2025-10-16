import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function emailHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { data, error } = await resend.emails.send({
    from: 'Willy <onboarding@updates.willyt.co>',
    to: ['wbtenggara@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'Will' }),
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
}
