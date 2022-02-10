/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

export const Logo: React.FC = () => {
  return <h1 css={cssContainer}>ブランドロゴ</h1>
}

const cssContainer = css`
  display: inline-block;
`
