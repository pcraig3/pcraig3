import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import Layout from './layout'
import Img from './_img'
import BackLink from './backLink'
import { fontSizes, spacing, mq } from './__styles'

export const subheadStyles = css`
  margin-top: calc(-${spacing.lg} - ${spacing.lg});
  margin-bottom: ${spacing.lg};

  text-transform: uppercase;
  font-size: ${fontSizes.md}rem;

  ${mq.xs(css`
    margin-top: calc(-${spacing.lg} - ${spacing.md});
    margin-bottom: ${spacing.xl};
  `)};
`

const contentStyles = css`
  margin-bottom: ${spacing.lg} !important;

  ${mq.xs(css`
    margin-bottom: ${spacing.xl} !important;
  `)};
`

const Post = ({
  h1,
  subheading,
  title,
  imgSrc,
  imgAlt,
  href,
  linkText,
  children,
}) => (
  <Layout title={title || h1}>
    <h1>{h1}</h1>
    <h2 className={subheadStyles}>{subheading}</h2>
    <Img
      src={imgSrc}
      alt={imgAlt}
      href={href}
      linkText={linkText}
      hoverText={href ? 'VISIT ☞' : 'ARCHIVED ☠'}
    />
    <div className={contentStyles}>{children}</div>
    <BackLink href="/work" />
  </Layout>
)

Post.propTypes = {
  h1: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  subheading: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  href: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}

export default Post
