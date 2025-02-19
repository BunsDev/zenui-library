import React, { useState } from "react";

// code block
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// icons
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

const ShowCode = ({ code }) => {
  const [isCopy, setIsCopy] = useState(false);

  // copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <div className="transition-all duration-300 ease-in-out relative">
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#000000d7] absolute right-0 top-0 cursor-pointer">
        {isCopy ? (
          <MdOutlineDone className="text-[1.3rem] text-primary" />
        ) : (
          <FaRegCopy
            className="text-[1.2rem] text-primary"
            onClick={copyToClipboard}
          />
        )}
      </div>
      <SyntaxHighlighter language="jsx" className='text-[14px] max-h-[400px] 400px:max-w-[380px] 425px:max-w-[638px] max-w-[320px]' style={dracula} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default ShowCode;
