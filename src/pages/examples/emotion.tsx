import { css } from '@emotion/css'
import type { NextPage } from 'next'
import Link from 'next/link'

const EmotionExample: NextPage = () => {
  const buttonHoverColor = 'white'
  return (
    <>
      <div
        className={css`
          margin: 2rem;
        `}
      >
        <Link href="/">&larr; back</Link>

        <h1
          className={css`
            padding: 0.5rem;
            color: #0000cc;
            background-color: #ccccff;
          `}
        >
          Emotion exampl
        </h1>

        <div
          className={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            cursor: pointer;
            &:hover {
              color: ${buttonHoverColor};
              background-color: violet;
            }
          `}
        >
          Hover to change color.
        </div>
      </div>
    </>
  )
}

export default EmotionExample
