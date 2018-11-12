import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import Link from 'next/link'
import { fontSizes, mq, spacing } from '../components/__styles'

const workLinkStyles = css`
  /* Removing some margin to make up for the padding on the links */
  margin-bottom: calc(${spacing.xl} - 10px) !important;

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

const WorkLink = ({
  h2,
  subheading,
  href = '/work-govuk-digital-marketplace',
}) => (
  <div className={workLinkStyles}>
    <Link href={href}>
      <a>
        <h2>{h2}</h2>
        <p>{subheading}</p>
      </a>
    </Link>
  </div>
)

WorkLink.propTypes = {
  h2: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  href: PropTypes.string,
}

export default WorkLink
