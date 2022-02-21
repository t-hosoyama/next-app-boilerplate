/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from '@emotion/react'
import React from 'react'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'

type ButtonColor = {
  hover: string
  active: string
}

export const EmotionContainer: React.FC = () => {
  const theme = useTheme()
  const buttonColors: ButtonColor = {
    hover: 'white',
    active: 'black',
  }

  return (
    <ContainerLayout title="Emotion example">
      <div css={cssExampleButton(buttonColors)}>Hover to change color.</div>
      <div css={cssExampleButtonWithTheme(theme)}>Hover to change color.</div>
    </ContainerLayout>
  )
}

const cssExampleButton = (colors: ButtonColor) => css`
  width: 300px;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: ${colors.hover};
    background-color: violet;
  }
  &:active {
    color: ${colors.active};
  }
`

const cssExampleButtonWithTheme = (theme: Theme) => css`
  margin: 1rem 0;
  width: 300px;
  padding: 32px;
  background-color: ${theme.colors.primary};
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.75;
  }
  &:active {
    opacity: 1;
  }
`
