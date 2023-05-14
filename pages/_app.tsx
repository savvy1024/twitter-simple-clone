import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Modal from '../components/Modal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Modal isOpen title="test modal"/>
     <Layout>
       <Component {...pageProps} />
     </Layout>
    </>
  )
}
