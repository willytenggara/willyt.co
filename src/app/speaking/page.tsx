import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events all around the world and been interviewed for many podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <SpeakingSection title="Podcasts">
          <Appearance
            href="https://www.youtube.com/watch?v=s5jUd3QFrtQ"
            title="Find your passion with IKIGAI method"
            description="The story of how I figure out my passion. "
            event="Satu Persen Podcast, 26th Apr 2023"
            cta="Watch the podcast video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=8rGXgDZfJD4"
            title="Indonesians Talent Who Succeed Working as a Software Engineer in Hong Kong"
            description="My story of becoming software engineer with no IT background"
            event="Purwadhika, 29th Oct 2021"
            cta="Watch the podcast video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
