/** @type {import('oval').Config} */
module.exports = {
  openapi: {
    output: {
      mode: 'tags',
      target: 'src/openapi/generated/openapi.ts',
      client: 'react-query',
      mock: false,
      clean: true,
      prettier: true,
      override: {
        query: {
          useQuery: true,
        },
        mutator: {
          path: 'src/openapi/config.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: 'docker/api/openapi.yaml',
    },
  },
}
