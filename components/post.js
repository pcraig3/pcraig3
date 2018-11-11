import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import Link from 'next/link'
import Layout from './layout'
import Img from './_img'
import {
  fontSizes,
  spacing,
  pointLeftJustifiedLinks,
} from '../components/__styles'

const subheadStyles = css`
  margin-top: calc(-${spacing.lg} - ${spacing.md});
  margin-bottom: ${spacing.xl};

  text-transform: uppercase;
  font-size: ${fontSizes.md}rem;
`

const contentStyles = css`
  margin-bottom: ${spacing.xl} !important;
`

const Post = ({
  h1,
  subheading,
  title,
  imgSrc,
  imgAlt,
  href,
  hoverText,
  children,
}) => (
  <Layout title={title || h1}>
    <h1>{h1}</h1>
    <h2 className={subheadStyles}>{subheading}</h2>
    <Img
      src={imgSrc}
      alt={imgAlt}
      href={href}
      hoverText={hoverText || 'VISIT  ☞'}
    />
    <div className={contentStyles}>{children}</div>
    <div className={pointLeftJustifiedLinks}>
      <Link href="/work">
        <a>Back to /work</a>
      </Link>
    </div>
  </Layout>
)

Post.propTypes = {
  h1: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  subheading: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hoverText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}

export default Post
