import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>One Time Secret 🤫 | Encrypted and Secure</title>
        <meta
          name="description"
          content="Share a one-time secret. Secret Share lets you securely share sensitive data such as passwords, API keys, and OTPs using end-to-end encryption that is destroyed instantly after viewing once."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
