import 'react-calendar/dist/Calendar.css'

import type { NextPage } from 'next'
import { css } from '@emotion/css'
import { useState } from 'react'
import Calendar, { CalendarTileProperties } from 'react-calendar'
import Link from 'next/link'

const ReactCalendar: NextPage = () => {
  const [value, onChange] = useState(new Date())

  const deniedDates = [11, 12, 13, 14]

  const getTileContent = (props: CalendarTileProperties) => {
    const { view, date } = props

    if (view !== 'month') {
      return null
    }

    const d = new Date(date)
    if (deniedDates.some((deniedDate) => deniedDate === d.getDate())) {
      return <p>✕</p>
    }

    return <p>◯</p>
  }

  const getTitleDisabled = ({ date }: CalendarTileProperties) => {
    return deniedDates.some((deniedDate) => deniedDate === date.getDate())
  }

  return (
    <>
      <div
        className={css`
          padding: 2rem;
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
          Calendar exampl
        </h1>

        <Calendar
          locale={'ja-JP'}
          value={value}
          tileContent={getTileContent}
          tileDisabled={getTitleDisabled}
          onChange={onChange}
          onClickDay={(value) => {
            console.log(value)
          }}
        />
      </div>
    </>
  )
}

export default ReactCalendar
