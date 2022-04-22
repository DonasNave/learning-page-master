import { CopyBlock, googlecode } from "react-code-blocks";

export default function CodeBlock({ code }) {
  return <CopyBlock
    text={code}
    language={'python'}
    showLineNumbers={true}
    theme={googlecode}
    codeBlock
  />;
}
