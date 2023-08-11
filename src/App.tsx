import { FC } from 'react';

import { QueryClientProvider } from 'react-query';

import { AuthProvider } from 'providers/AuthProvider';

import { client } from 'lib/client';

import { Routes } from 'Routes';

export const App: FC = () => {
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </QueryClientProvider>
  );
};
