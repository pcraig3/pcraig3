import { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { css, injectGlobal } from 'react-emotion'
import {
  colours,
  typograpyStyles,
  layoutStyles,
  headerStyles,
  mainStyles,
} from './__styles'
import Logo from './_logo'
import Nav from './_nav'

injectGlobal`
  html {
    font-family: 'Gothic A1', sans-serif;
    overflow-y: scroll;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:focus {
    outline: 2px solid ${colours.focus};
  }
  a,
  a:visited,
  button {
    display: inline-block;
    text-decoration: none;
    color: ${colours.primary};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    color: black;
    background: ${colours.tertiary};
  }

  ${typograpyStyles};
`

const outlineAll = function(outline) {
  return outline === undefined
    ? ``
    : !outline
      ? `* { outline: 1px solid orange;}`
      : `* { outline: 1px solid ${outline};}`
}

class Layout extends Component {
  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.state = { showMenu: this.props.router.query.showMenu === 'true' }
  }

  onToggle() {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu }
    })
  }

  render() {
    const {
      children,
      title,
      className,
      router: { query, pathname },
    } = this.props
    return (
      <div
        id="wrapper"
        className={`${css`
          ${outlineAll(query.outline)} ${layoutStyles};
        `}`}
      >
        <Head>
          <title>{title ? `${title} paul craig` : 'paul craig'}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header
          className={`${this.state.showMenu ? 'show-menu ' : 'hide-menu '}${css`
            ${headerStyles};
          `}`}
        >
          <Logo />
          <Nav
            showMenu={this.state.showMenu}
            onToggle={this.onToggle}
            pathname={pathname}
          />
        </header>
        <main
          className={css`
            ${mainStyles} ${className};
          `}
        >
          {children}
        </main>
      </div>
    )
  }
}

Layout.defaultProps = {
  children: {},
  title: null,
  className: css``,
  url: {},
}

Layout.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
}

export default withRouter(Layout)
