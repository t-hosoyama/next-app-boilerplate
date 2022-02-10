import dayjs from 'dayjs'
import React from 'react'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'
import { useUsersQuery } from '~/graphql/users.generated'

export const GraphQLContainer: React.FC = () => {
  const { loading, error, data } = useUsersQuery()

  const title = 'GralQL example with apollo client'

  if (loading) {
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
      {data?.users.map(({ id, name, birthday }) => (
        <ul key={id}>
          <li>
            {id}: {name} {dayjs(birthday).format('YYYY/M/D')}
          </li>
        </ul>
      ))}
    </ContainerLayout>
  )
}
