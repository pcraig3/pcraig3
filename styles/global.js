import { css, Global } from '@emotion/react'
import { colours, typograpyStyles } from './utils'

export const globalStyles = (
  <Global
    styles={css`
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

      body,
      #wrapper,
      #content {
        &:focus {
          outline: none;
        }
      }

      ${typograpyStyles};
    `}
  />
)
