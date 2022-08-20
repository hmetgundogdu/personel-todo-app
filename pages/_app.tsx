import '@fontsource/roboto';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import AppLayout from '@/layout/AppLayout/AppLayout';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
