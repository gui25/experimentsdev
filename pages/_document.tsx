import React from 'react';
import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Dev Smart 🚀</title>
          
          <meta name="Description" content="Author: Guilherme Bernardo, Category: Development"/>
          <link rel="shortcut icon" type="image/png" href="https://gui25.github.io/main/favicon.png" /> 
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
