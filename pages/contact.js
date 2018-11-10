import Link from 'next/link'
import { css } from 'react-emotion'
import { spacing, pointLeftLinks } from '../components/__styles'
import Layout from '../components/layout'

const mainStyles = css`
  span {
    display: block;
    margin-bottom: ${spacing.xxs}px;
  }

  a {
    padding-left: ${spacing.xxs}px;
    padding-right: ${spacing.xxs}px;
    margin-left: -${spacing.xxs}px;
  }

  ${pointLeftLinks};
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
          <a title="pls star me">pcraig3</a>
        </Link>
      </span>
    </p>
    <p>
      <span>Facebook(?)</span>
      <span>
        <Link href="https://www.facebook.com/PaulMCraig">
          <a title="pls be my friend">PaulMCraig</a>
        </Link>
      </span>
    </p>
  </Layout>
)
