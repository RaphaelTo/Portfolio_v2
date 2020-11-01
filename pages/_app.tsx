import type { AppProps } from 'next/app';
import { NoSsr } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import { theme } from '@/css/DefaultCSS';
import { store } from '@/store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NoSsr>
            <Component {...pageProps} />
          </NoSsr>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
