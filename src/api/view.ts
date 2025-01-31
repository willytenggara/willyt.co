// filepath: /Users/willy/Documents/Dev/willyt.co/src/pages/api/views.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query

  if (req.method === 'GET') {
    const blogView = await prisma.blogView.findUnique({
      where: { slug: slug as string },
    })

    if (blogView) {
      res.status(200).json({ views: blogView.views })
    } else {
      res.status(200).json({ views: 0 })
    }
  } else if (req.method === 'POST') {
    const blogView = await prisma.blogView.upsert({
      where: { slug: slug as string },
      update: { views: { increment: 1 } },
      create: { slug: slug as string, views: 1 },
    })

    res.status(200).json({ views: blogView.views })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
