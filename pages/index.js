import Layout from '../components/layout'
import { css } from 'react-emotion'
import { mq, visuallyhidden } from '../components/__styles'
import Link from 'next/link'

const mainStyles = css`
  margin-top: none;

  ${mq.sm(css`
    margin-top: 23px;
  `)};
`

export default () => (
  <Layout className={mainStyles}>
    <h1 className={visuallyhidden}>Welcome to Paul Craig’s dumb website</h1>
    <p>
      Hi there.{' '}
      <span role="img" aria-label="Waving hand">
        👋
      </span>
    </p>
    <p>
      My name is Paul Craig and{' '}
      <Link href="/work">
        <a>I like making websites</a>
      </Link>.
    </p>
    <p>
      I also made <em>this</em> website. (woah so meta!!{' '}
      <span role="img" aria-label="Dizzy face">
        😵
      </span>)
    </p>
  </Layout>
)
