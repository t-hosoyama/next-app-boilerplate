import React from 'react'
import { useState } from 'react'
import type { CalendarTileProperties } from 'react-calendar'

import { Calendar } from '~/components/calendars/Calendar'
import { ContainerLayout } from '~/components/layouts/ContainerLayout'

export const CalendarContainer: React.FC = () => {
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
      <ContainerLayout title="Calendar exampl">
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
      </ContainerLayout>
    </>
  )
}
