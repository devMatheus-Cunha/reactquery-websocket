import { useState } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 1000 * 60 * 10, // cache data for 10 minutes
        staleTime: 1000 * 60 * 5, // consider data stale after 5 minutes
        // refetchInterval: 1000 * 60 * 15, // refetch data every 15 minutes
        refetchOnMount: true, // refetch data when component first mounts
        retry: false // Disable automatic refetch attempt
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
