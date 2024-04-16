import React from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";

const PriceList: React.FC = () => {
  return (
    <div>
      <div className="w-full overflow-hidden relative priceList-img">
        <img src={p1} alt="loading err" className="w-full priceList-img" />
        <div className="absolute z-1 price-list-text flex flex-col">
          <i className="text-6xl fancy-text tracking-wide">Cennik</i>
          <span className="text-4xl font-bold">Pielęgnacji</span>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-10 ">
        <section className="w-8/12 text-center">
          <p>
            {" "}
            W naszym salonie szczególną wagę przykładamy do komfortu naszych
            klientów, dlatego każdy piesek otrzymuje tyle czasu, ile potrzebuje
            aby pielęgnacja przebiegła jak najbardziej przyjemnie. Nie oferujemy
            jednak pielęgnacji bez kąpieli pieska. Właśnie kąpiel oraz suszenie
            jest kluczowe w czasie zabiegu, gdyż przygotowuje ona włos do
            strzyżenia, trymowania lub wyczesywania oraz zapewnia higienę pracy.
            do nas!
          </p>
          <p className="mt-5">
            Cena jest uzależniona od stanu pieska i jego zachowania. W przypadku
            psa z sierścią skołtunioną dopłata do usługi wynosi 50 zł. Również w
            przypadku psów agresywnych naliczana jest dodatkowa opłata,
            uzależniona od rasy psa.{" "}
          </p>
          <p className="mt-5 font-bold">
            Cena jest uzależniona od stanu pieska i jego zachowania.
          </p>
        </section>
      </div>
      <div className="mt-20 priceList-container"></div>
      <div className="ml-10 mt-10 w-8/12 flex flex-col">
        <span>
          Prosimy o punktualne przybycie na umówioną wizytę. Zastrzegamy sobie
          prawo do przełożenia, anulowania lub doliczenia <b>50%</b> wartości
          pielęgnacji w przypadku spóźnienia <b>powyżej 15 minut</b>.
        </span>
        <b className="mt-5">Ponad to:</b>
        <ul className="mt-2 list-disc">
          <li className="mb-1">
            Rozczesywanie sierści z kołtunów – dodatkowo płatne
            <b className="ml-1 color-pink">60 zł/godzina</b>
          </li>
          <li className="mb-1">
            Psy problemowe (wymagające drugiej osoby do pomocy) – dodatkowo
            płatne - <b className="color-pink ">40 zł</b>
          </li>
          <li className="mb-1">
            Kąpiel przeciwpchelna – <b className="color-pink ">30 zł</b>
          </li>
          <li className="mb-1">
            Obcinanie pazurków – <b className="color-pink ">30 zł</b>
          </li>
          <li className="mb-1">
            Usuwanie włosów z uszu – <b className="color-pink ">20 zł</b>
          </li>
        </ul>
      </div>
      <div className="w-full mt-20 mb-20">
        <span className=" mb-10 flex justify-center font-semibold text-xl">
          Cennik akcesoriów sklepowych
        </span>
        <div className="flex justify-center mt-5">
          <table className="table-spacing rounded-md">
            <thead>
              <tr>
                <th className="w-3/12">Nazwa</th>
                <th className="w-6/12">Do czego</th>
                <th className="w-3/12">Cenna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-3/12 text-center break-all br-1">Sanki</td>
                <td className=" br-1 w-60 pl-5 pr-5 break-all pt-5 ">
                  Zjeżdzanie Szybkie bez patrzenia na l;udzi do czesania i
                  patrzenia na ludzi jak szybko jedzie tak bo szybako bardzo
                  jedzie{" "}
                </td>
                <td className="w-3/12 text-center">100zł</td>
              </tr>
              <tr>
                <td className="w-3/12 text-center break-all br-1">Sanki</td>
                <td className=" br-1 w-60 pl-5 pr-5 break-all pt-5 pb-5">
                  Zjeżdzanie Szybkie bez patrzenia na l;udzi do czesania i
                  patrzenia na ludzi jak szybko jedzie tak bo szybako bardzo
                  jedzie{" "}
                </td>
                <td className="w-3/12 text-center">100zł</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
