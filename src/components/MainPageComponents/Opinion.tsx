import React, { useState } from "react";

interface OpinionProps {
  elm: {
    text: string;
    data: string;
  };
}

const Opinion: React.FC<OpinionProps> = ({ elm }) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseDown = (): void => {
    setIsGrabbing(true);
  };

  const handleMouseUp = (): void => {
    setIsGrabbing(false);
  };
  return (
    <div
      className={`flex flex-col items-center w-11/12 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      aria-label="opinion holder"
    >
      <>
        <p className="opinion-context p-5 rounded-2xl text-base select-none">
          <span
            className="text-center flex "
            aria-label={` Opinion ${elm?.text}`}
            tabIndex={0}
          >
            {elm?.text}
          </span>
        </p>
      </>
      <div className="mt-5" aria-label="opinion data">
        {elm?.data}
      </div>
    </div>
  );
};

export default Opinion;
