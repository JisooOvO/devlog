import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../markdown.css";

function countSpaces(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") count++;
    else break;
  }

  return count / 2;
}

const MarkdownLayout = ({ contents }) => {
  const components = {
    code: ({ node, inline, className, children, ...props }) => {
      const pList = children.split("\n");
      const newChildren = pList.map((p, idx) => {
        const classLists = [];
        const tab = countSpaces(p);

        if (tab !== 0) {
          classLists.push("tab-span");
          classLists.push(`tab${tab}`);
        }

        if (
          String(p).trim().startsWith("//") ||
          String(p).trim().startsWith("...")
        ) {
          classLists.push("annotation");
        }

        return (
          <span
            key={idx}
            style={{
              marginLeft: classLists.includes("tab-span") ? `${15 * tab}px` : 0,
            }}
            className={classLists.join(" ")}
          >
            {p}
          </span>
        );
      });
      return (
        <code className={className} {...props}>
          {newChildren}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown
      className={"markdown"}
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {contents}
    </ReactMarkdown>
  );
};

export default MarkdownLayout;
