import '../styles/style.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';

import LayoutComponent from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent {...pageProps}>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
