import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();
  return <div>Detail {JSON.stringify(router.query)}</div>;
};

export default Detail;
