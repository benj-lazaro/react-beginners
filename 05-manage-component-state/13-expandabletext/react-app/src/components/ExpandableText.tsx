import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  // Initial summarization of the text content (i.e. children)
  if (children.length <= maxChars) return <p>{children}</p>;

  // Toggle switch for contracting / expanding the text content (i.e. children)
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
