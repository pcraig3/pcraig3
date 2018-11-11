import { css } from 'react-emotion'
import { spacing, colours, mq } from './__styles'

const _hoverImg = css`
  background-color: #ffe4c4; /* can't use colours here because they get distorted */

  figcaption {
    display: block;
  }

  img {
    filter: grayscale(100%) contrast(1) blur(0);
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
  }

  &::before {
    background-color: #7b68ee;
    bottom: 0;
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: soft-light;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`

const imgStyles = css`
  background-color: ${colours.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 100%;
  height: 100%;
  overflow: initial;
  padding: ${spacing.sm};
  position: relative;

  ${mq.xs(css`
    padding: 20px;
  `)};

  img {
    flex: 1 0 100%;
    height: 100%;
    position: relative;
    width: 100%;
  }

  figcaption {
    display: none;
  }

  :hover {
    ${_hoverImg};
  }
`

const captionStyles = css`
  position: absolute;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  z-index: 2;
  padding: ${spacing.sm};
  color: black;
  background-color: ${colours.tertiary};

  > * {
    margin: 0 !important;
    display: inline-block;
    line-height: 0.9;
  }

  :hover {
    border-bottom: 2px solid ${colours.tertiary};
    border-right: 2px solid ${colours.tertiary};

    background: white;
  }
`

const Figure = ({ src, alt, hoverText }) => (
  <figure className={imgStyles}>
    <figcaption className={captionStyles}>
      {hoverText ? <div>{hoverText}</div> : null}
    </figcaption>
    <img src={`${src}`} alt={alt} />
  </figure>
)

const imgWrapperStyles = css`
  margin-bottom: ${spacing.xl} !important;
  }

  a:focus figure { ${_hoverImg}; }
`

export default ({ href, ...props }) => (
  <div className={imgWrapperStyles}>
    {href ? (
      <a href={href} target="_blank">
        <Figure {...props} />
      </a>
    ) : (
      <Figure {...props} />
    )}
  </div>
)
