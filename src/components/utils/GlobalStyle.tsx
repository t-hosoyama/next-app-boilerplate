import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'
import React from 'react'

export const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  )
}
