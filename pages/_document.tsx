import React from 'react';
import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>Dev Smart 🚀</title>
          
          <meta name="Description" content="Author: Guilherme Bernardo, Category: Development">
          
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap" rel="stylesheet" /> 
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
