import React from "react";

export interface BlogProps {
  title: string;
}

export default function Blog(props: BlogProps) {
  return <div>Blog page- {props.title}</div>;
}
