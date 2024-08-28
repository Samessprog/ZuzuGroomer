import React from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import pp1 from "../assets/ZdjęciaPsów/1.jpeg";

const LoyaltyProgram: React.FC = () => {
  return (
    <>
      <section>
        <div className="relative">
          <img
            src={p1}
            alt="loading err"
            role="img"
            className="contact-img w-full object-cover"
          />
          <span
            className="text-center absolute text-6xl fancy-text tracking-wide contact-info-text z-1 left-1/2 top-1/2"
            role="heading"
            aria-level={1}
          >
            <i>Program Lojalnościowy</i>
          </span>
        </div>
      </section>
      <main className="pb-20">
        <section className="w-full flex justify-center mt-10 mb-10 text-sm lg:text-base">
          <div
            className="w-11/12 lg:w-8/12 text-center "
            role="note"
            aria-label="wstep do akrty lojalnosciowej"
          >
            W naszym salonie istnieje możliwość skorzystania z programu
            lojalnościowego. Dzięki niemu mogą Państwo uzyskać dostęp do
            różnorodnych zniżek. Uczestnictwo w programie lojalnościowym pozwala
            na gromadzenie pieczątek za wykonane usługi groomerskie, które
            następnie można wymieniać na atrakcyjne rabaty.{" "}
            <div>
              <strong>
                Zostań naszym klientem i dołącz do naszego programu
                lojalnościowego
              </strong>
            </div>{" "}
          </div>
        </section>
        <section className="flex pl-5 pr-5 md:pr-0 lg:pl-10 lg:pr-10 mt-10 lg:mt-20 flex-col lg:flex-row items-center">
          <div className="lg:w-7/12">
            <span
              className="flex justify-center mb-5 text-2xl font-semibold color-pink text-center"
              role="heading"
              aria-level={2}
              aria-label="KARTA-LOJALNOŚCIOWA-SHAGGY"
            >
              KARTA LOJALNOŚCIOWA SHAGGY
            </span>
            <div
              className="text-justify flex flex-col mt-5 text-sm lg:text-base"
              role="note"
              aria-label="opis-karty-lojalnosciowej"
            >
              {" "}
              Karta lojalnościowa jest przypisana do jednego klienta oraz jego
              pupila. Zawiera informacje takie jak imię klienta i imię pupila.
              Klient zbiera pieczątki za wykonane usługi powyżej 50zł. Po
              uzyskaniu określonej liczby pieczątek, klient otrzymuje zniżkę na
              wybraną przez niego usługę powyżej 50zł z poniższymi zasadami:
              <ul className="list-disc ml-8 mt-5 lg:mt-2 mb-5 lg:mb-2">
                <li>
                  <strong> 5 pieczątek </strong> - klient otrzymuje{" "}
                  <strong>10%</strong> zniżki na kolejny zakup.
                </li>
                <li>
                  <strong>10 pieczątek</strong> - klient otrzymuje
                  <strong> 20%</strong> zniżki na kolejny zakup.
                </li>
              </ul>
              <strong>
                {" "}
                <em>Zniżki nie łączą się z innymi promocjami.</em>
              </strong>
              <>
                <span
                  className="text-xl color-pink mt-5 lg:mt-2"
                  role="heading"
                  aria-level={3}
                  aria-label="Zalety naszego programu:"
                >
                  Zalety naszego programu:
                </span>
                <ul
                  className="loyalty-program-benefits mb-5 lg:mb-0"
                  role="list"
                  aria-braillelabel="zaletyKarty"
                >
                  <li
                    className="text-lg flex items-center pl-2 mt-2 list-icon"
                    id="zaletyKarty"
                    aria-label="Zniżki"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="19px"
                      viewBox="0 -960 960 960"
                      width="19px"
                      fill="#00000"
                      className="mr-2"
                    >
                      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                    </svg>
                    Zniżki
                  </li>
                  <li className="text-lg flex items-center pl-2 list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="19px"
                      viewBox="0 -960 960 960"
                      width="19px"
                      fill="#00000"
                      className="mr-2"
                    >
                      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                    </svg>
                    Promocje i Oferty Specjalne
                  </li>
                  <li className="text-lg flex items-center pl-2 list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="19px"
                      viewBox="0 -960 960 960"
                      width="19px"
                      fill="#00000"
                      className="mr-2"
                    >
                      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                    </svg>
                    Akcie promocyjne
                  </li>
                </ul>
              </>
            </div>
          </div>
          <div className="w-full sm:w-10/12 lg:w-5/12 lg:ml-10 ">
            <div className="layality-program-img-holder">
              <img src={pp1} alt="loading err" className="w-full h-full" />
            </div>

            <span className="flex justify-end mt-2 text-sm text-gray-500 mr-2">
              Więcej informacji w lokalu!
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoyaltyProgram;
