/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'

type BrandContainerProps = {
  brand: string
}

export const BrandContainer: React.FC<BrandContainerProps> = ({ brand }) => {
  return (
    <ContainerLayout title="Dynamic routing example">
      <ul
        css={css`
          line-height: 2em;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 3rem;
          text-decoration: underline;
          margin-bottom: 2rem;
        `}
      >
        <li>
          <Link href="/brand1/">brand1</Link>
        </li>
        <li>
          <Link href="/brand2/">brand2</Link>
        </li>
        <li>
          <Link href="/brand3/">brand3</Link>
        </li>
      </ul>
      <div>ブランド: {brand}</div>
    </ContainerLayout>
  )
}
