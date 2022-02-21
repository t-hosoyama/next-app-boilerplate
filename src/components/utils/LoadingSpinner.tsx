/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { loadingState } from '~/states/loading'

export const LoadingSpinner: React.FC = () => {
  const isLoading = useRecoilValue(loadingState)

  return (
    <>
      <div css={modalCss} className={isLoading ? 'show' : ''}>
        <ul css={spinnerCss}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

const modalCss = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  &.show {
    opacity: 1;
    pointer-events: auto;
  }
  &.-complete {
    opacity: 0;
    visibility: hidden;
    transition-duration: 1s;
  }
`

const spinnerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 60px;
  height: 14px;
  @keyframes preload {
    0% {
      background: #fccf00;
      opacity: 1;
    }
    50% {
      background: #fff;
      opacity: 0.5;
    }
    100% {
      background: #fccf00;
      opacity: 1;
    }
  }
  li {
    background: #fff;
    opacity: 0.5;
    display: block;
    float: left;
    width: 1rem;
    height: 1rem;
    border: 0.1rem solid #fccf00;
    line-height: 12px;
    padding: 0;
    position: relative;
    margin: 0 0 0 4px;
    animation: preload 1s infinite;
    top: -50%;
    border-radius: 50%;
  }
  li:first-child {
    margin-left: 0;
  }
  li:nth-child(2) {
    animation-delay: 0.15s;
  }
  li:nth-child(3) {
    animation-delay: 0.3s;
  }
`
