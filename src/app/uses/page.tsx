import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air M1, 8GB RAM, (2020)">
            I was using an Intel-based 13” MacBook Air prior to this and the
            difference is night and day. I&apos;ve never heard the fans turn on
            a single time (becasue it doesn&apos;t have one), even under the
            incredibly heavy loads I put it through with our various launch
            simulations.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I don&apos;t care if it&apos;s missing all of the fancy IDE features
            everyone else relies on, VS Code is still the best text editor ever
            made.
          </Tool>
          <Tool title="Xcode">
            I use Xcode only to build iOS app, build with NextJS and Capacitor.
            Fixing things when needed in Xcode. Other than that, doesn&apos;t
            really use as much as VS code.
          </Tool>
          <Tool title="Android Studio">
            Best use of Android Studio is in Windows.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Design">
          <Tool title="Figma">
            I started using Figma as just a design tool but now it&apos;s become
            my virtual whiteboard for the entire company. Never would have
            expected the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            I use Notion for basically everything, from managing my personal
            life, studies, and work.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
