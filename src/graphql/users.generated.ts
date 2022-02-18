import * as Types from './types.generated';

import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
import { fetcher } from './config';
export type UserFieldsFragment = { __typename?: 'users', id: number, name: string, birthday: any };

export type UsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, name: string, birthday: any }> };

export type SubscribeUsersSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type SubscribeUsersSubscription = { __typename?: 'subscription_root', users: Array<{ __typename?: 'users', id: number, name: string, birthday: any }> };

export type CreateUserMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
  birthday?: Types.InputMaybe<Types.Scalars['timestamptz']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export const UserFieldsFragmentDoc = `
    fragment UserFields on users {
  id
  name
  birthday
}
    `;
export const UsersDocument = `
    query users {
  users {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) =>
    useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['users'] : ['users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );

useUsersQuery.getKey = (variables?: UsersQueryVariables) => variables === undefined ? ['users'] : ['users', variables];
;

export const SubscribeUsersDocument = `
    subscription subscribeUsers {
  users {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const CreateUserDocument = `
    mutation createUser($name: String, $birthday: timestamptz) {
  insert_users(objects: [{name: $name, birthday: $birthday}]) {
    affected_rows
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['createUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );