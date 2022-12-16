import React from "react";
import Prism from "prismjs";

interface CodeProps {
  code: string;
}

export const Code = ({ code }: CodeProps) => {
  //   const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

  return (
    <pre>
      <code className="language-js">{code}</code>
    </pre>
  );
};
