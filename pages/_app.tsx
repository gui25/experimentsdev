
import ThemeContainer from "../contexts/theme/ThemeContainer"
import Head from 'next/Head'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <>
      <Head>
          <title>Dev Smart 🚀</title>
          <link rel="manifest" href="/manifest.json" />
          
          
        </Head>
      </>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
