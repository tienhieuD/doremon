import '../styles/style.scss'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { AuthProvider } from '../lib/providers/auth-provider'
import { AlertProvider } from '../lib/providers/alert-dialog'
import { ToastProvider } from '../lib/providers/toast-provider'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <MoralisProvider
      appId="7C6Bsu3uPh3vKlt763hrVa0caWUulIWNfjfydqjM"
      serverUrl="https://yzvmgqckyikz.usemoralis.com:2053/server"
    >
      <ToastProvider>
        <AlertProvider>
          <AuthProvider>
            <DefaultSeo {...SEO} />
            {getLayout(<Component {...pageProps} />)}
          </AuthProvider>
        </AlertProvider>
      </ToastProvider>
    </MoralisProvider>
  )
}
