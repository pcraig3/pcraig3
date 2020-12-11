import { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { css } from '@emotion/react'
import { layoutStyles, footerStyles, mainStyles } from '../styles/utils'
import Logo from './_logo'
import Nav from './_nav'
import SkipLink from './skipLink'
import { initGA, logPageView } from '../utils/analytics'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.state = { showMenu: this.props.router.query.showMenu === 'true' }
  }

  onToggle() {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu }
    })
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV === 'production') {
      if (window && !window.GA_INITIALIZED) {
        // eslint-disable-next-line no-undef
        initGA(process.env.RAZZLE_GA_ID)
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  }

  render() {
    const { children, title, styles, metaDescription, router } = this.props

    return (
      <div id="wrapper" css={layoutStyles} tabIndex={-1}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {metaDescription && <meta name="description" content={metaDescription} />}
        </Head>
        <script dangerouslySetInnerHTML={{ __html: `<!--googleoff: all-->` }} />
        <SkipLink title={title} />
        <script dangerouslySetInnerHTML={{ __html: `<!--googleon: all-->` }} />

        <main
          id="content"
          name="content"
          aria-label="Main content"
          tabIndex={-1}
          css={css`
            ${mainStyles} ${styles};
          `}
        >
          {children}
        </main>
        <footer
          id="footer"
          name="footer"
          tabIndex={-1}
          aria-label="Main navigation"
          className={this.state.showMenu ? 'show-menu ' : 'hide-menu '}
          css={footerStyles}
        >
          <Logo />
          <Nav showMenu={this.state.showMenu} onToggle={this.onToggle} pathname={router.pathname} />
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  metaDescription: PropTypes.string,
  router: PropTypes.object.isRequired,
  styles: PropTypes.object,
}

export default withRouter(Layout)
