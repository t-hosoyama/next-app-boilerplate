/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import dayjs from 'dayjs'
import React from 'react'
import { useForm } from 'react-hook-form'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'
import { useSetLoadingSpinner } from '~/hooks/useLoadingSpinner'
import { useCreateUser, useFindUsers } from '~/openapi/generated/users'

type UserForm = {
  name: string
  birthday: string
}

export const OpenApiContainer: React.FC = () => {
  const { data, error, isLoading, refetch } = useFindUsers()
  const mutation = useCreateUser({
    mutation: {
      onSuccess: () => refetch(),
    },
  })
  useSetLoadingSpinner([isLoading, mutation.isLoading])

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<UserForm>({
    mode: 'onChange',
  })

  const isInvalid = !isDirty || !isValid
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

  const onSubmit = ({ name, birthday }: UserForm) => {
    mutation.mutate({ data: { name, birthday: new Date(birthday).toISOString() } })
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: top;
          margin-top: 2rem;
          gap: 1rem;
        `}
      >
        <div>
          <div>
            名前:
            <input
              type="text"
              {...register('name', {
                required: '必須項目です',
              })}
            />
          </div>
          <span
            css={css`
              color: red;
            `}
          >
            {errors.name && errors.name.message}
          </span>
        </div>
        <div>
          <div>
            誕生日:
            <input
              type="datetime-local"
              {...register('birthday', {
                required: '必須項目です',
              })}
            />
          </div>
          <span
            css={css`
              color: red;
            `}
          >
            {errors.birthday && errors.birthday.message}
          </span>
        </div>
        <div>
          <button disabled={isInvalid}>作成</button>
        </div>
      </form>
      <div>{mutation.isLoading && 'Loading...'}</div>
    </ContainerLayout>
  )
}
