import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import './index.css';
import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
