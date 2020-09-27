import Layout from '../components/layout'
import { visuallyhidden } from '../components/__styles'
import RandomEmoji from '../components/randomEmoji'
import Link from 'next/link'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

const Index = () => (
  <Layout title="paul craig, web developer" metaDescription="hi, I'm Paul. I build websites and eat aux casse-croûtes. get in touch: paul@pcraig3.ca">
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
        chows{' '}
        <a href="https://twitter.com/pcraig3/status/1309970663600463873/photo/1" target="_blank">
          dogs
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

export default Index
