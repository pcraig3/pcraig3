import Link from 'next/link'
import { css } from '@emotion/react'
import { spacing, pointLeftJustifiedLinks } from '../styles/utils'
import Layout from '../components/layout'

const mainStyles = css`
  span {
    display: block;
    margin-bottom: ${spacing.xxs};
  }

  ${pointLeftJustifiedLinks};
`
const Contact = () => (
  <Layout title="contact paul craig" styles={mainStyles}>
    <h1>Contact</h1>
    <p>
      <span>Email</span>
      <span>
        <Link href="mailto:paul@pcraig3.ca">
          <a title="pls no spam">
            paul
            <wbr />
            @pcraig3.ca
          </a>
        </Link>
      </span>
    </p>
    <p>
      <span>Twitter</span>
      <span>
        <Link href="https://twitter.com/pcraig3">
          <a title="pls retweet me">@pcraig3</a>
        </Link>
      </span>
    </p>
    <p>
      <span>Instagram</span>
      <span>
        <Link href="https://www.instagram.com/paulgorica">
          <a title="pls follow me">@paulgorica</a>
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

export default Contact
