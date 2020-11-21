
import ThemeContainer from "../contexts/theme/ThemeContainer"
import Head from 'next/Head'
import React from 'react'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <>
      <Head>
          <title>Dev Smart 🚀</title>
          <Link rel="manifest" href="/manifest.json" />
          
          
        </Head>
      </>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
