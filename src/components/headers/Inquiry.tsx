/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

export const Inquiry: React.FC = () => {
  return (
    <div css={cssContainer}>
      <a href="/" target="_blank" rel="noopener">
        <span css={cssInquiryIcon}>!</span>お問合せ
      </a>
    </div>
  )
}

const cssContainer = css`
  display: inline-block;
`

const cssInquiryIcon = css`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  text-align: center;
`
