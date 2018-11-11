import Layout from '../components/layout'
import { css } from 'react-emotion'
import { fontSizes, mq, visuallyhidden } from '../components/__styles'

const mainStyles = css`
  margin-top: unset;

  p {
    font-size: ${fontSizes.lg}rem;
  }

  ${mq.sm(css`
    margin-top: 23px;

    p {
      font-size: unset;
    }
  `)};
`

export default () => (
  <Layout className={mainStyles}>
    <h1 className={visuallyhidden}>Welcome to Paul Craig's dumb website</h1>
    <p>Hi there thank you for visiting my website.</p>
    <p>It is a good website.</p>
  </Layout>
)
