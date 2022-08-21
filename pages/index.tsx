import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

const Home = dynamic(() => import("../components/home"), { suspense: true });

const Root: NextPage = () => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Home />
    </Suspense>
  );
};

export default Root;