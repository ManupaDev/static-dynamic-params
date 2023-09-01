"use client";
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  console.log(params);
  return <div>{JSON.stringify(params)}</div>;
}

export default Page;
