/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

export const Rule: React.FC = () => {
  return (
    <div css={cssContainer}>
      <a href="/" target="_blank" rel="noopener">
        <span css={cssRuleIcon}>?</span>規約
      </a>
    </div>
  )
}

const cssContainer = css`
  display: inline-block;
`

const cssRuleIcon = css`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  text-align: center;
`
