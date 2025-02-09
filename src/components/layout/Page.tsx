import { useState } from "react";
import { WithChildrenProps } from "../../types/common";
import Tooltip from "../UI/Tooltip";
import Menu from "./Menu";

const Page = ({ children }: WithChildrenProps) => {
  const [isOpen, setIsOpen] = useState(() => {
    return localStorage.getItem("menuOpen") === "true";
  });

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
    localStorage.setItem("menuOpen", JSON.stringify(!isOpen));
  };

  return (
    <div className="flex bg-gray-900 text-gray-200 min-h-screen">
      <div
        data-testid="sidebar"
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-gray-300 transition-all duration-300 flex flex-col p-4  relative`}
      >
        <div className="flex justify-end">
          <Tooltip text={isOpen ? "Collapse" : "Extend"} position="right">
            <button
              onClick={handleOnToggle}
              className="mb-4 p-1 cursor-pointer"
            >
              {isOpen ? "➖" : "➕"}
            </button>
          </Tooltip>
        </div>
        <Menu isOpen={isOpen} />
      </div>

      <div className="flex-1 p-6 bg-gray-850 h-full w-full">{children}</div>
    </div>
  );
};

export default Page;
