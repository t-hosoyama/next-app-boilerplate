/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

export const Header: React.FC = ({ children }) => {
  return <header css={cssHeader}>{children}</header>
}

const cssHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`
