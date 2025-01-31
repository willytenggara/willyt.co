import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { supabase } from '@/lib/supabaseClient'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Invalid slug' })
  }

  if (req.method === 'GET') {
    // Fetch view count from Prisma
    const view = await prisma.blogView.findUnique({
      where: { slug },
    })

    return res.status(200).json({ views: view?.views || 0 })
  }

  if (req.method === 'POST') {
    // Increment view count in Prisma
    const view = await prisma.blogView.upsert({
      where: { slug },
      update: { views: { increment: 1 } },
      create: { slug, views: 1 },
    })

    return res.status(200).json({ views: view.views })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
