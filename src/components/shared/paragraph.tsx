import { ReactNode } from "react";

export function Paragraph(props: { children: ReactNode }) {
  const children = props.children;

  if (typeof children !== "string") {
    return null;
  }

  const regex = /“([^”]*)”/g;
  const boldTexts = children.split(regex).map((text, index) => {
    return index % 2 !== 0 ? <strong key={index}>"{text}"</strong> : text;
  });

  return <p className="my-3">{boldTexts}</p>;
}
