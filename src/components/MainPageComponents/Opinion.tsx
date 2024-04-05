import React, { useState } from "react";

interface OpinionProps {
  elm: {
    text: string;
    data: string;
  };
}

const Opinion: React.FC<OpinionProps> = ({ elm }) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };
  return (
    <div
      className={`flex flex-col items-center w-11/12 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div>
        <p className="opinion-context p-5 rounded-2xl text-base select-none">
          <span className="text-center flex ">{elm?.text}</span>
        </p>
      </div>
      <div className="mt-5">{elm?.data}</div>
    </div>
  );
};

export default Opinion;
