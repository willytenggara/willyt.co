import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type BlogWithSlug, getAllBlogs } from '@/lib/blogs'
import { formatDate } from '@/lib/formatDate'

function Blog({ blog }: { blog: BlogWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blogs/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
          {blog.readDuration && ` • ${blog.readDuration}`}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
        {blog.readDuration && ` • ${blog.readDuration}`}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'All of my long-form thoughts on life, leadership, goodness of God, and more, collected in chronological order.',
}

export default async function BlogsIndex() {
  let blogs = await getAllBlogs()

  return (
    <SimpleLayout
      title="A living proof of God's love and faithfulness"
      intro="All of my long-form thoughts on life, leadership, goodness of God, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogs.map(
            (blog) => blog.release && <Blog key={blog.slug} blog={blog} />,
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
