import Layout from '../components/layout'
import { visuallyhidden } from '../components/__styles'
import RandomEmoji from '../components/randomEmoji'
import Link from 'next/link'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

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
        stabs{' '}
        <a
          href="https://twitter.com/kyliehavelock/status/1055101613726097408"
          target="_blank"
        >
          pumpkins
        </a>
      </li>
    </ul>
    {serverRuntimeConfig.onServer ? (
      <noscript>
        <p aria-hidden="true">
          <RandomEmoji />
        </p>
      </noscript>
    ) : (
      <p aria-hidden="true">
        <RandomEmoji />
      </p>
    )}
  </Layout>
)
