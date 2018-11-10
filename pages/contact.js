import Link from 'next/link'
import { css } from 'react-emotion'
import { spacing, pointLeftJustifiedLinks } from '../components/__styles'
import Layout from '../components/layout'

const mainStyles = css`
  span {
    display: block;
    margin-bottom: ${spacing.xxs};
  }

  ${pointLeftJustifiedLinks};
`
export default () => (
  <Layout title="contact paul craig" className={mainStyles} h1="Contact">
    <p>
      <span>Email</span>
      <span>
        <Link href="mailto:paul@pcraig3.ca">
          <a title="pls no spam">
            paul<wbr />@pcraig3.ca
          </a>
        </Link>
      </span>
    </p>
    <p>
      <span>Twitter</span>
      <span>
        <Link href="https://twitter.com/pcraig3">
          <a title="pls follow me">@pcraig3</a>
        </Link>
      </span>
    </p>
    <p>
      <span>GitHub</span>
      <span>
        <Link href="https://www.github.com/pcraig3">
          <a title="pls ⭐ me">pcraig3</a>
        </Link>
      </span>
    </p>
    <p>
      <span>
        Facebook (if you <em>must</em>. 🤷)
      </span>
      <span>
        <Link href="https://www.facebook.com/PaulMCraig">
          <a title="pls be my friend">PaulMCraig</a>
        </Link>
      </span>
    </p>
  </Layout>
)
