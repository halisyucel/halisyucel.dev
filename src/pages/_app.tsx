import '@/styles/globals.scss';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import RouterTransition from '@/components/RouterTransition';
import { setIsInsideIframe } from '@/redux/config';
import { store } from '@/redux/store';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    if (window.location !== window.parent.location) {
      store.dispatch(setIsInsideIframe(true));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Halis Yücel</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}
      >
        <NotificationsProvider>
          <ReduxProvider store={store}>
            <RouterTransition />
            <Component {...pageProps} />
          </ReduxProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}