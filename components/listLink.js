import PropTypes from 'prop-types'
import { css } from '@emotion/react'
import Link from 'next/link'
import { fontSizes, mq, spacing } from '../styles/utils'

export const lineListsLeft = css`
  ul,
  ol {
    margin-left: 0;
  }
`

const listLinkStyles = css`
  /* Removing some margin to make up for the padding on the links */
  margin-bottom: calc(${spacing.xl} - 10px) !important;
  list-style: none;

  h2 {
    font-size: ${fontSizes.md}rem;
    margin-top: 0;
    margin-bottom: ${spacing.xxs};

    ${mq.xs(css`
      font-size: ${fontSizes.lg}rem;
    `)};

    ${mq.sm(css`
      margin-bottom: ${spacing.xs};
    `)};
  }

  a {
    display: inline-block;
    padding: ${spacing.xxs};
    margin-left: -${spacing.xxs};

    p {
      margin-bottom: 0;
      color: black;
    }

    &:hover,
    &:focus {
      p {
        color: inherit;
      }
    }
  }
`

const ListLink = ({ h2, subheading, href }) => (
  <li css={listLinkStyles}>
    <Link href={href}>
      <a>
        <h2>{h2}</h2>
        {subheading ? <p>{subheading}</p> : null}
      </a>
    </Link>
  </li>
)

ListLink.propTypes = {
  h2: PropTypes.string.isRequired,
  subheading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.string,
}

export default ListLink
