import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: {
    'https://graphql.datocms.com/': {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_GRAPHQL_API_KEY as string,
        'X-Exclude-Invalid': 'true',
      },
    },
  },
  documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
