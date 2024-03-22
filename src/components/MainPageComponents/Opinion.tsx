import React from "react";

interface OpinionProps {
  elm: {
    text: string;
    data: string;
  };
}

const Opinion: React.FC<OpinionProps> = ({ elm }) => {
  return (
    <div className="flex flex-col items-center w-10/12 w-90">
      <div>
        <p className="opinion-context p-5 rounded-2xl text-lg select-none">
          <span className="text-center flex ">{elm?.text}</span>
        </p>
      </div>
      <div className="mt-5">{elm?.data}</div>
    </div>
  );
};

export default Opinion;
