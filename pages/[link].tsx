import Link from "../components/secret-view-section";
import { saveSecret } from "../firebase/db";

export default function LinkPage({ res }: any): JSX.Element {
  return <>{JSON.stringify(res)}</>;
}

export async function getServerSideProps(context: any) {
  const res = await saveSecret({ type: "redirect", secret: "Hello" });
  console.log(res);
  return {
    props: { res: res.success },
  };
}
