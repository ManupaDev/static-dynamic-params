export const dynamic = "force-static";
"use client";
import { useParams } from "next/navigation";

export async function generateStaticParams() {
    return []
  }

function Page() {
    const params = useParams();
  console.log(params);
  return <div>{JSON.stringify(params)}</div>;
}

export default Page;
