import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="BW flics platform for contact and payment"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="keywords"
            content="Photography, Rochester, Sports, high quality, Adi, Manikonda, Adi Manikonda"
          />
          <meta name="author" content="Adi Manikonda" />
          <meta name="theme-color" content="#1b1b1b" />
        </Head>
        <body style={{ background: "#1b1b1b" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
