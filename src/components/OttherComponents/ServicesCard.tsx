import React, { Children } from "react";

const ServicesCard: React.FC = ({ children, title }) => {
  return (
    <>
      <span
        className="flex justify-center mt-3 mb-3 text-lg font-semibold"
        role="heading"
        aria-level={5}
      >
        <i>{title}a</i>
      </span>
      <div className="text-justify" role="note" aria-label="services-info">
        {children}
      </div>
    </>
  );
};

export default ServicesCard;
