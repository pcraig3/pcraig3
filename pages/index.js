import Layout from '../components/layout'
import { visuallyhidden } from '../components/__styles'
import RandomEmoji from '../components/randomEmoji'
import Link from 'next/link'

export default () => (
  <Layout>
    <h1>
      Paul Craig<span className={visuallyhidden}>: web developer</span>
    </h1>
    <ul>
      <li>
        builds{' '}
        <Link href="/work">
          <a>websites</a>
        </Link>
      </li>
      <li>
        makes{' '}
        <Link href="/lists">
          <a>lists</a>
        </Link>
      </li>
      <li>
        knifes{' '}
        <a
          href="https://twitter.com/kyliehavelock/status/1055101613726097408"
          target="_blank"
        >
          pumpkins
        </a>
      </li>
      <li aria-hidden="true">
        <RandomEmoji />
      </li>
    </ul>
  </Layout>
)
