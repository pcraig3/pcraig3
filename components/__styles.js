import { css } from 'react-emotion'

export const ratio = parseFloat(1.333)
export const fontSizes = {
  md: 1,
  sm: 1 / ratio,
  xs: 1 / (ratio * ratio),
  lg: 1 * ratio,
  xl: 1 * (ratio * ratio),
  xxl: 2,
  xxxl: 1 * (ratio * ratio * ratio),
}

export const spacingBase = 30
export const spacing = {
  md: `${spacingBase}px`,
  sm: `${spacingBase / 2}px`,
  xs: `${spacingBase / 3}px`,
  xxs: `${spacingBase / 6}px`,
  lg: `${parseInt(spacingBase * 1.35)}px`,
  xl: `${spacingBase * 2}px`,
  xxl: `${spacingBase * 3}px`,
}

export const colours = {
  primary: 'mediumslateblue',
  secondary: '#FFDFDC',
  tertiary: 'aquamarine',
  focus: 'darkturquoise',
}

const breakpoints = {
  xxs: 321,
  xs: 440,
  sm: 641, // this is the govuk 'tablet' size
  md: 768,
  lg: 992,
  xl: 1200,
}

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

export const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const _visuallyhiddenReset = css`
  border: initial;
  clip: initial;
  height: auto;
  margin: initial;
  overflow: initial;
  padding: initial;
  position: initial;
  width: auto;
`

export const visuallyHiddenParagraphXXS = css`
  ${visuallyhidden};

  ${mq.xxs(css`
    ${_visuallyhiddenReset};
    margin-bottom: ${spacing.md};
  `)};
`

export const visuallyhiddenUntilFocus = css`
  ${visuallyhidden};

  :focus {
    position: absolute;
    clip: unset;
    height: auto;
    width: auto;
    top: 4px;
    left: 4px;
  }
`

export const typograpyStyles = css`
  html {
    font-size: 130%;
    line-height: 1.3;

    ${mq.xxs(css`
      font-size: 145%;
    `)};

    ${mq.sm(css`
      font-size: 155%;
      line-height: 1.27;
    `)};

    ${mq.md(css`
      font-size: 165%;
    `)};
  }
  body {
    font-size: ${fontSizes.md}rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }
  h1 {
    margin-bottom: ${spacing.xxl};
  }
  h2 {
    margin-bottom: ${spacing.md};
    ${mq.xxs(css`
      margin-top: ${spacing.xl};
    `)};
  }
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${spacing.md};
  }
  h1 {
    font-size: ${fontSizes.xl}rem;
    line-height: 1.05;

    ${mq.xxs(css`
      font-size: ${fontSizes.xxl}rem;
    `)};

    ${mq.xs(css`
      font-size: ${fontSizes.xxxl}rem;
    `)};
  }
  h2 {
    font-size: ${fontSizes.lg}rem;
    line-height: 1.05;

    ${mq.xs(css`
      font-size: ${fontSizes.xl}rem;
    `)};
  }
  h3,
  h4,
  h5,
  h6 {
    font-size: ${fontSizes.md}rem;
    line-height: 1.15;

    ${mq.xs(css`
      font-size: ${fontSizes.lg}rem;
    `)};
  }
  blockquote {
    margin-left: ${spacing.md};
  }
  p {
    margin-bottom: ${spacing.md};
  }

  :not(nav) > ul,
  :not(nav) > ol {
    margin-bottom: ${spacing.md};
    margin-left: 22px;

    ${mq.xs(css`
      margin-left: 0;
    `)};

    li {
      margin-bottom: ${spacing.xs};

      ${mq.md(css`
        margin-bottom: ${spacing.xxs};
      `)};

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  button {
    font-size: ${fontSizes.md}rem;
  }
`

export const bisqueLinks = css`
  a:hover,
  a:focus {
    background-color: ${colours.secondary};
  }
`

const _pointLinks = css`
  a {
    padding: 0 ${spacing.xxs};

    &::before,
    &::after {
      color: transparent;
    }
  }
  a:hover,
  a:focus,
  a[aria-current] {
    &::before,
    &::after {
      color: currentColor;
    }
  }
`

export const pointLeftLinks = css`
  ${_pointLinks};

  a::after {
    content: '\00a0☜';
  }
  a::before {
    content: none;
  }
`

export const pointLeftJustifiedLinks = css`
  ${pointLeftLinks};

  a {
    margin-left: -${spacing.xxs};
  }
`

export const pointRightLinks = css`
  ${_pointLinks};

  a::before {
    content: '☞\00a0';
  }
  a::after {
    content: none;
  }
`

export const layoutStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${spacing.sm};

  main,
  footer {
    &:focus {
      outline: none;
    }
  }

  ${mq.xs(css`
    margin: ${spacing.md};
  `)};

  ${mq.sm(css`
    margin: ${spacing.lg};
  `)};

  ${mq.md(css`
    margin: ${spacing.xl};
    margin-bottom: ${spacing.md};
  `)};
`

export const footerStyles = css`
  position: fixed;
  z-index: 100;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: ${spacing.sm} ${spacing.sm};
  text-align: right;
  border-top: 2px solid ${colours.secondary};
  background-color: white;

  ${mq.xs(css`
    padding: ${spacing.sm} ${spacing.md};
  `)};

  ${mq.sm(css`
    position: sticky;
    top: ${spacing.lg};
    flex: 1;
    padding: 0;
    width: initial;
    border-top: none;
    background-color: transparent;
  `)};

  ${mq.md(css`
    top: ${spacing.xl};
  `)};
`

export const mainStyles = css`
  flex: 4;
  margin-right: 0;
  margin-bottom: ${spacing.xl};

  ${mq.sm(css`
    margin-right: ${spacing.xs};
    margin-bottom: 0;
  `)};

  ${mq.md(css`
    flex: 3;
    margin-right: ${spacing.xl};
  `)};

  div {
    margin-bottom: ${spacing.md};
  }

  ${bisqueLinks};
`
