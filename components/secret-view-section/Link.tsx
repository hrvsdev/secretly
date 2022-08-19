import { useRouter } from "next/router";

export default function Link(): JSX.Element {
  const router = useRouter();
  const link = router.query.link;

  return <div>{link}</div>;
}
