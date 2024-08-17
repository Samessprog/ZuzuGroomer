import React from "react";

interface ServicesInter {
  children: object;
  title: string;
}

const ServicesCard: React.FC<ServicesInter> = ({ children, title }) => {
  return (
    <>
      <span
        className="flex justify-center mt-3 mb-3 text-lg font-semibold"
        role="heading"
        aria-level={5}
      >
        <i>{title}</i>
      </span>
      <div
        className="text-justify text-sm lg:text-base"
        role="note"
        aria-label="services-info"
      >
        {children}
      </div>
    </>
  );
};

export default ServicesCard;
