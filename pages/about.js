import Link from 'next/link'
import Layout from '../components/layout'
import { visuallyhidden, visuallyHiddenParagraphXXS } from '../styles/utils'

const About = () => (
  <Layout title="about paul craig">
    <h1>About</h1>

    <p css={visuallyHiddenParagraphXXS}>Hey-o, thanks for stopping by.</p>
    <p>
      I’m a web developer currently{' '}
      <Link href="/lists-places-ive-lived">
        <a>living in “Ottava”</a>
      </Link>{' '}
      (as my Portuguese grandparents say).
    </p>
    <p>
      I{' '}
      <Link href="/lists-things-i-like">
        <a>like</a>
      </Link>{' '}
      americanos, techno shows, and shipping shit that doesn’t suck.
    </p>
    <p css={visuallyhidden}>Let’s seize some levers, yo.</p>
  </Layout>
)

export default About
