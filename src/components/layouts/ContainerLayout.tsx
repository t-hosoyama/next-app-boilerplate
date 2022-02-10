import { css } from '@emotion/css'
import Link from 'next/link'
import React from 'react'

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
    <div
      className={css`
        margin: 2rem;
      `}
    >
      {backLinkUrl && (
        <Link href={backLinkUrl} passHref>
          <a className={cssBackLink}>&larr; back</a>
        </Link>
      )}

      <h1 className={cssTitle}>{title}</h1>

      {children}
    </div>
  )
}

const cssBackLink = css`
  display: block;
  margin: 1rem 0;
`

const cssTitle = css`
  font-size: 24px;
  font-weight: bold;
  margin: 1rem 0;
`
