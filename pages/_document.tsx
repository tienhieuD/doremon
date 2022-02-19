import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head >
        <link href="https://api.fontshare.com/css?f[]=cabinet-grotesk@800&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="dialog-root"></div>
          <div id="popover-root"></div>
          <div id="alert-root"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
