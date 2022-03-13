import Document, { Html, Head, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#ff725e" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
          <meta name="msapplication-TileColor" content="#ff725e" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ff725e" />
          <meta
            name="description"
            content="App for apply as frontend dev at Platzi"
          />
          <meta
            name="keywords"
            content="recipes, nextjs, ReactJS, frontend developer"
          />
          <meta name="author" content="Jose Avila" />
          <meta name="robots" content="index" />

          {/* google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Glory:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
