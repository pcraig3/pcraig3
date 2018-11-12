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

const wavingHand = css`
  display: inline-block;
  animation: wave 0.3s ease-in-out 0.8s 5;
  transform-origin: center bottom;

  @keyframes wave {
    50% {
      transform: rotate(10deg);
    }
  }
`

export default () => (
  <Layout className={mainStyles}>
    <h1 className={visuallyhidden}>Welcome to Paul Craig’s dumb website</h1>
    <p>
      Hi there.{' '}
      <span role="img" aria-label="Waving hand" className={wavingHand}>
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
