import Layout from '../components/layout'
import {
  visuallyhidden,
  visuallyHiddenParagraphXXS,
} from '../components/__styles'

export default () => (
  <Layout title="about">
    <h1>About</h1>

    <p className={visuallyHiddenParagraphXXS}>Hey-o, thanks for stopping by.</p>
    <p>
      I’m a web developer currently living in “Ott-a-vah” (as my Portuguese
      grandparents say).
    </p>
    <p>I like americanos, techno shows, and building shit that doesn’t suck.</p>
    <p className={visuallyhidden}>Let’s seize some levers, yo.</p>
  </Layout>
)
