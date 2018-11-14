import PropTypes from 'prop-types'
import Link from 'next/link'
import { pointLeftJustifiedLinks } from '../components/__styles'

const BackLink = ({ href = '/' }) => (
  <div className={pointLeftJustifiedLinks}>
    <Link href={href}>
      <a>Back to {href}</a>
    </Link>
  </div>
)

BackLink.propTypes = {
  href: PropTypes.string,
}

export default BackLink
