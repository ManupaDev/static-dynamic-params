"use client";
export const dynamic = "force-static";

function Page({ params: { id } }: { params: { id: string } }) {
  console.log(id);
  return <div>{id}</div>;
}

export default Page;
