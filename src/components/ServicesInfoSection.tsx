import React from "react";

const ServicesInfoSection: React.FC = () => {
  return (
    <section>
      <div className="w-full flex fancy-info-holder items-center justify-center">
        <div className="flex flex-col w-4/12 items-center">
          <label className="info-header">Przyjazny</label>
          <label className="pb-4 font-bold fs-28">GROOMING</label>
          <label className="font-semibold">
            DOKŁADNY • BEZPIECZNY • DELIKATNY
          </label>
        </div>
        <div className="flex flex-col w-4/12 items-center">
          <label className="info-header">Certyfikowany</label>
          <label className="pb-4 font-bold fs-28">BEHAWIORYSTA</label>
          <label className="font-semibold">WNIKLIWY • UWAŻNY • KREATYWNY</label>
        </div>
        <div className="flex flex-col w-4/12 items-center">
          <label className="info-header">Komfortowy</label>
          <label className="pb-4 font-bold fs-28">DOMOWY HOTELIK</label>
          <label className="font-semibold">
            CAŁODOBOWY • RODZINNY • KAMERALNY
          </label>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfoSection;
