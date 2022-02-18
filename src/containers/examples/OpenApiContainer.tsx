import dayjs from 'dayjs'
import React from 'react'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'
import { useFindUsers } from '~/openapi/generated/users'

export const OpenApiContainer: React.FC = () => {
  const { data, error, isLoading } = useFindUsers()

  const title = 'OpenAPI example with generator'

  if (isLoading) {
    return (
      <ContainerLayout title={title}>
        <p>Loading...</p>
      </ContainerLayout>
    )
  }

  if (error) {
    console.log(error)
    return (
      <ContainerLayout title={title}>
        <p>Error :(</p>
      </ContainerLayout>
    )
  }

  return (
    <ContainerLayout title={title}>
      {data?.map(({ id, name, birthday }) => (
        <ul key={id}>
          <li>
            {id}: {name} {dayjs(birthday).format('YYYY/M/D')}
          </li>
        </ul>
      ))}
    </ContainerLayout>
  )
}
