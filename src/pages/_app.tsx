import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../../prismicio'
import Header from "../components/Header"


import { AppProps } from 'next/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (

    <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={({ href, children, ...props }) => (
      <Link href={href}>
        <a {...props}>
          {children}
        </a>
      </Link>
    )}
  >
    <PrismicPreview repositoryName={repositoryName}>
       <Header />
       <Component {...pageProps} />     
       

    </PrismicPreview>
  </PrismicProvider> 

  )
}

export default MyApp;
