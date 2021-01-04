import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* tags in here appears after the tags in <HEAD> in Layout */}
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Gothic+A1:400,600&amp;display=fallback"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Gothic+A1:400,600&amp;display=fallback"
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

export default MyDocument
