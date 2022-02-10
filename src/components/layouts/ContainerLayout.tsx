/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'

import { Header } from '../headers/Header'
import { Inquiry } from '../headers/Inquiry'
import { Logo } from '../headers/Logo'
import { Rule } from '../headers/Rule'

type ContainerProps = {
  title: string
  children: React.ReactNode
  backLinkUrl?: string | null
}

export const ContainerLayout: React.FC<ContainerProps> = ({
  title,
  children,
  backLinkUrl = '/',
}) => {
  return (
    <>
      <Header>
        <Logo />
        <div css={cssHeaderRightItem}>
          <Rule />
          <Inquiry />
        </div>
      </Header>
      <div
        css={css`
          margin: 2rem;
        `}
      >
        {backLinkUrl && (
          <Link href={backLinkUrl} passHref>
            <a css={cssBackLink}>&larr; back</a>
          </Link>
        )}

        <h1 css={cssTitle}>{title}</h1>

        {children}
      </div>
    </>
  )
}

const cssHeaderRightItem = css`
  display: flex;
  gap: 1rem;
`

const cssBackLink = css`
  display: block;
  margin: 1rem 0;
`

const cssTitle = css`
  font-size: 24px;
  font-weight: bold;
  margin: 1rem 0;
`
