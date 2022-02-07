import { css } from '@emotion/css'
import Link from 'next/link'
import React from 'react'

import { useUsersQuery } from '~/graphql/users.generated'

const Layout: React.FC = ({ children }) => {
  return (
    <div
      className={css`
        margin: 2rem;
      `}
    >
      <Link href="/">&larr; back</Link>
      <h1>GralQL example with apollo client</h1>

      {children}
    </div>
  )
}

const GraphQLExample: React.FC = () => {
  const { loading, error, data } = useUsersQuery()

  if (loading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  }

  if (error) {
    console.log(error)
    return (
      <Layout>
        <p>Error :(</p>
      </Layout>
    )
  }

  return (
    <Layout>
      {data?.users.map(({ id, name, birthday }) => (
        <ul key={id}>
          <li>
            {id}: {name} {birthday}
          </li>
        </ul>
      ))}
    </Layout>
  )
}

export default GraphQLExample
