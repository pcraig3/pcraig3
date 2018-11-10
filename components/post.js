import { css } from 'react-emotion'
import Link from 'next/link'
import Layout from './layout'
import Img from './img'
import {
  fontSizes,
  mq,
  spacing,
  pointLeftJustifiedLinks,
} from '../components/__styles'

const subheadStyles = css`
  margin-top: -${spacing.lg};
  margin-bottom: ${spacing.xl};

  text-transform: uppercase;
  font-size: ${fontSizes.md}rem;
`

const contentStyles = css`
  margin-bottom: ${spacing.xl} !important;
`

export default ({ h1, h2, imgSrc, children }) => (
  <Layout title={h1}>
    <h1>{h1}</h1>
    <h2 className={subheadStyles}>{h2}</h2>
    <Img
      src={imgSrc}
      alt="Screenshot of the GOV.UK Digital Marketplace"
      year="PLACEHOLDER"
    />
    <div className={contentStyles}>{children}</div>
    <div className={pointLeftJustifiedLinks}>
      <Link href="/work">
        <a>Back to /work</a>
      </Link>
    </div>
  </Layout>
)
