import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

const Home = dynamic(() => import("../components/home"), { suspense: true });

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
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Home />
      </Suspense>
    </div>
  );
};

export default Root;
