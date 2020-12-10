import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import Link from 'next/link'
import { bisqueLinks, colours, mq, pointRightLinks, pointLeftLinks, spacing } from './__styles'

const navStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 39px;

  .hide-menu & {
    justify-content: flex-end;
  }

  ${mq.xs(css`
    justify-content: flex-end;
  `)};
`

const ulStyles = css`
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: -${spacing.xxs};
  list-style: none;
  ${pointLeftLinks};

  .hide-menu & {
    display: none;
  }

  ${mq.xs(css`
    align-items: flex-end;
    margin-left: 0;
    ${pointRightLinks};
  `)};

  ${mq.sm(css`
    .hide-menu & {
      display: flex;
    }
  `)};

  li {
    a {
      overflow: hidden;
      display: block;
    }

    &:not(:last-of-type) {
      margin-bottom: ${spacing.xxs};
    }
  }

  ${bisqueLinks};
`

const formStyles = css`
  order: 2;
`

const buttonStyles = css`
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: ${spacing.md};
  padding: 0 ${spacing.xxs};
  width: 82px;
  text-align: center;
  border: 2px solid ${colours.secondary};

  :hover,
  :focus {
    background-color: ${colours.secondary};
    outline: 2px solid ${colours.focus};
  }

  ${mq.sm(css`
    display: none;
  `)};

  span {
    padding: 0;
  }
`

const ToggleButton = ({ onToggle, showMenu }) => {
  return (
    <form className={formStyles}>
      <button
        className={buttonStyles}
        onClick={(e) => {
          e.preventDefault()
          onToggle()
        }}
        aria-controls="navLinks"
        aria-expanded={showMenu}
        aria-label="Toggle navigation"
      >
        {showMenu ? <span>x</span> : <span>menu</span>}
      </button>
    </form>
  )
}

const toggleButtonProps = {
  onToggle: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
}

ToggleButton.propTypes = toggleButtonProps

const NavLink = ({ path, pathname }) => (
  <li>
    <Link href={`${path}`}>
      <a {...(path === pathname ? { 'aria-current': 'page' } : {})}>
        {path === '/' ? 'home' : path.split('/').pop()}
      </a>
    </Link>
  </li>
)

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
}

const Nav = ({ onToggle, showMenu, pathname }) => (
  <nav className={navStyles}>
    <ToggleButton onToggle={onToggle} showMenu={showMenu} pathname={pathname} />
    <ul className={ulStyles} id="navLinks">
      {showMenu ? <NavLink path="/" pathname={pathname} /> : ''}
      <NavLink path="/about" pathname={pathname} />
      <NavLink path="/work" pathname={pathname} />
      <NavLink path="/contact" pathname={pathname} />
    </ul>
  </nav>
)

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
  ...toggleButtonProps,
}

export default Nav
