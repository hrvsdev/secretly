import type { NextPage } from "next";
import Head from "next/head";

import Home from "../components/home";

const Root: NextPage = () => {
  return (
    <div>
      <Head>
        <title>One Time Secret 🤫 | Encrypted and Secure</title>
        <meta
          name="description"
          content="Share a one-time secret. Secret Share lets you securely share sensitive data such as passwords, API keys, and OTPs using end-to-end encryption that is destroyed instantly after viewing once."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  );
};

export default Root;
