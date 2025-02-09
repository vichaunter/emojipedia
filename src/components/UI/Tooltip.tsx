import { useState } from "react";

type Props = {
  text: string;
  children: React.ReactNode;
  disabled?: boolean;
  position?: "top" | "right";
};
const tooltipStyles = {
  top: "absolute left-1/2 -translate-x-1/2 -top-full -mt-2",
  right: "absolute left-full top-1/2 -translate-y-1/2 ml-2",
};
const Tooltip = ({
  text,
  children,
  disabled = false,
  position = "top",
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex max-w-max flex-col items-center justify-center"
      >
        {children}
        {!disabled && (
          <div
            data-testid="tooltip"
            style={{
              transform: isHovered ? "scale(1)" : "scale(0)",
              opacity: isHovered ? 1 : 0,
            }}
            className={`${tooltipStyles[position] || tooltipStyles.top} min-w-max transform px-3 py-2 transition-all z-10 text-sm font-medium duration-300`}
          >
            <div className="flex max-w-xs flex-col items-center shadow-lg">
              <div className="p-2 text-white bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700">
                {text}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tooltip;
