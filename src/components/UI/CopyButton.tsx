import React, { useEffect, useState } from "react";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      let timeout: NodeJS.Timeout;
      timeout = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleCopy = () => {
    if (!text) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 bg-stone-600 hover:bg-stone-500 rounded-md text-sm flex items-center cursor-pointer"
    >
      {copied ? (
        <span className="text-xl">✅</span>
      ) : (
        <span className="text-xl">📋</span>
      )}
      <span className="ml-2">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
};

export default CopyButton;
