export const metadata = {
  title: 'About - Ethereal',
  description: 'Page description',
}

import Hero from '@/components/hero-about'
import Story from '@/components/story'
import Team from '@/components/team'
import Cta from '@/components/cta'

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Team />
      <Cta />
    </>
  )
}
