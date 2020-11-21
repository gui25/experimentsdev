import React from 'react';
import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
        <title>Dev Smart 🚀</title>
          <link rel="manifest" href="/manifest.json" />
          
          <meta name="Description" content="Author: Guilherme Bernardo, Category: Development"/>
          <link rel="shortcut icon" type="image/png" href="https://gui25.github.io/main/favicon.png" />
          <link rel="apple-touch-icon" href="https://gui25.github.io/main/favicon.png"/>
          <meta name="theme-color" content="#5008af"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
