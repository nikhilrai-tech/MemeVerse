// src/pages/_app.tsx
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { store } from '../store';
import { Header } from '../components/shared/Header';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <div className="min-h-screen">
          <Header />
          <Component {...pageProps} />
          <Toaster position="bottom-right" />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;