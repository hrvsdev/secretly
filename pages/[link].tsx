import SecretView from "../components/secret-view-section";

import { getSecret } from "../firebase/db";

import type { GetServerSidePropsContext } from "next";
import type { secretDataTypes } from "../firebase/types";

export default function LinkPage({ data }: SecretViewPageTypes): JSX.Element {
  return <SecretView data={data} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Getting link param from URL
  const link = context.query.link as string;

  // Getting secret from database
  const data = (await getSecret(link)).data || null;

  // Returning data as props
  return {
    props: { data },
  };
}

interface SecretViewPageTypes {
  data: secretDataTypes;
}
