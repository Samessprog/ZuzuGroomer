import React from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";

const Regulations: React.FC = () => {
  return (
    <div>
      <div className="relative regulamin-img">
        <img
          src={p1}
          className="w-full h-1/12 regulamin-img relative object-cover"
          alt="loading err"
        />
        <div className="absolute regulation-text">
          <span className=" object-cover text-6xl fancy-text tracking-wide">
            Regulamin
          </span>
        </div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Regulations;
