import React from "react";

const PhilosophySection: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col motto-holder items-center">
        <header className="motto-header">Moja filozofia</header>
        <div className="text-lg">Umysł • Ciało • Dusza</div>
        <div className="font-bold fs-20 mt-5 mb-9 header-section">
          KAŻDY Z NAS NOSI W SOBIE PIĘKNO
        </div>
        <div className="w-8/12 flex flex-col motto-description pl-5 pr-5 ">
          <p className="mb-3">
            Podstawą udanego pobytu u mnie jest poczucie bezpieczeństwa, które
            pozwoli się odpowiednio zrelaksować oraz wypocząć.
          </p>
          <p className="mb-3">
            Efektem takiego stanu jest dobry humor i samopoczucie Twojego
            pupila.
          </p>
          <p className="mb-3">
            Do dyspozycji zwierzaków są różnego rodzaju zabawki typu kong,
            piłki, pluszaki, zabawki logiczne i maty węchowe. Każdy znajdzie coś
            dla siebie. Oczywiście nie zapominajmy o świetnym towarzystwie moich
            suczek, które chętnie potowarzyszą przy zabawie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
