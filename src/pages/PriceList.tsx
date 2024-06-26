import React from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const PriceList: React.FC = () => {
  const [priceListRef, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const PriceListItemAnimate = useSpring({
    opacity: elementInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const [priceListExtra, elementInViewFirst] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const AboutUsAnimate = useSpring({
    opacity: elementInViewFirst ? 1 : 0,
    transform: elementInViewFirst ? "translateX(0%)" : "translateX(-100%)",
    config: { tension: 190, friction: 65 },
  });

  return (
    <div>
      <div className="w-full overflow-hidden relative priceList-img">
        <img
          src={p1}
          alt="loading err"
          className="w-full priceList-img object-cover"
        />
        <div className="absolute z-1 price-list-text flex flex-col top-1/2 left-1/2">
          <i className="text-6xl fancy-text tracking-wide">Cennik</i>
          <span className="text-3xl sm:text-4xl font-bold">Pielęgnacji</span>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-10 ">
        <section className="w-full sm:w-8/12 text-center ps-5 pr-5 sm:ps-0 sm:pr-0">
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
      <section>
        <div
          className="mt-20 priceList-container p-12 w-full flex flex-col items-center lg:flex-row lg:items-start"
          ref={priceListRef}
        >
          <animated.div
            className="w-10/12 lg:w-4/12 flex justify-center flex-col items-center price-list-item-holder mb-8 lg:mb-0 rounded-3xl"
            style={PriceListItemAnimate}
          >
            <div className="text-xl font-semibold border-b-2 border-black color-pink">
              Strzyżenie z kąpielą i pełną kosmetyką
            </div>
            <div>
              <ul className="list-disc mt-8 pl-2">
                <li className="mb-1">
                  Yorkshire Terrier:{" "}
                  <span className="color-pink font-semibold">140zł</span>
                </li>
                <li className="mb-1">
                  Maltańczyk:{" "}
                  <span className="color-pink font-semibold">150zł</span>
                </li>
                <li className="mb-1">
                  Shih Tzu:{" "}
                  <span className="color-pink font-semibold">160zł</span>
                </li>
                <li className="mb-1">
                  Sznaucer miniatura:{" "}
                  <span className="color-pink font-semibold">160zł</span>
                </li>
                <li className="mb-1">
                  West Highland White Terrier:{" "}
                  <span className="color-pink font-semibold">170zł</span>
                </li>
                <li className="mb-1">
                  Sznaucer średni:{" "}
                  <span className="color-pink font-semibold">200zł</span>
                </li>
                <li className="mb-1">
                  Bichon Frise (fryzura komercyjna):{" "}
                  <span className="color-pink font-semibold">170zł</span>
                </li>
                <li className="mb-1">
                  Szpic miniaturowy:{" "}
                  <span className="color-pink font-semibold">150zł</span>
                </li>
                <li className="mb-1">
                  Szpic mały:{" "}
                  <span className="color-pink font-semibold">160zł</span>
                </li>
                <li className="mb-1">
                  Kerry Blue Terrier:{" "}
                  <span className="color-pink font-semibold">320zł</span>
                </li>
                <li className="mb-1">
                  Golden Retriever:{" "}
                  <span className="color-pink font-semibold">250zł</span>
                </li>
                <li className="mb-1">
                  Fox Terrier:{" "}
                  <span className="color-pink font-semibold">180zł</span>
                </li>
                <li className="mb-1">
                  Terrier Walijski:{" "}
                  <span className="color-pink font-semibold">180zł</span>
                </li>
                <li className="mb-1">
                  Pudel Toy:{" "}
                  <span className="color-pink font-semibold">170zł</span>
                </li>
                <li className="mb-1">
                  Pudel miniaturowy:{" "}
                  <span className="color-pink font-semibold">180zł</span>
                </li>
                <li className="mb-1">
                  Pudel średni (fryzura komercyjna):{" "}
                  <span className="color-pink font-semibold">190zł</span>
                </li>
                <li className="mb-1">
                  Pudel duży (fryzura komercyjna):{" "}
                  <span className="color-pink font-semibold">300zł</span>
                </li>
                <li className="mb-1">
                  Maltipoo:{" "}
                  <span className="color-pink font-semibold">170zł</span>
                </li>
                <li className="mb-1">
                  Pekińczyk:{" "}
                  <span className="color-pink font-semibold">150zł</span>
                </li>
                <li className="mb-1">
                  Cavapoo:{" "}
                  <span className="color-pink font-semibold">200zł</span>
                </li>
                <li className="mb-1">
                  Terrier szkocki:{" "}
                  <span className="color-pink font-semibold">200zł</span>
                </li>
                <li className="mb-1">
                  Cockapoo:{" "}
                  <span className="color-pink font-semibold">220zł</span>
                </li>
              </ul>
            </div>
          </animated.div>
          <animated.div
            className="w-10/12 lg:w-4/12 flex flex-col items-center price-list-item-holder ml-5 mb-8 lg:mb-0 rounded-3xl"
            style={PriceListItemAnimate}
          >
            <div className="text-xl font-semibold border-b-2 border-black color-pink">
              Trymowanie z kąpielą i pełną kosmetyką
            </div>
            <ul className="list-disc mt-8  pl-2">
              <li className="mb-1">
                Springer Spaniel angielski:{" "}
                <span className="color-pink font-semibold">350zł</span>
              </li>
              <li className="mb-1">
                Sznaucer miniaturowy:{" "}
                <span className="color-pink font-semibold">230zł</span>
              </li>
              <li className="mb-1">
                Sznaucer średni:{" "}
                <span className="color-pink font-semibold">320zł</span>
              </li>
              <li className="mb-1">
                Airedale Terrier:{" "}
                <span className="color-pink font-semibold">450zł</span>
              </li>
              <li className="mb-1">
                Jack Russell Terrier:{" "}
                <span className="color-pink font-semibold">180zł</span>
              </li>
              <li className="mb-1">
                Border Terrier:{" "}
                <span className="color-pink font-semibold">180zł</span>
              </li>
              <li className="mb-1">
                West Highland White Terrier:{" "}
                <span className="color-pink font-semibold">220zł</span>
              </li>
              <li className="mb-1">
                Cavalier King Charles Spaniel:{" "}
                <span className="color-pink font-semibold">190zł</span>
              </li>
              <li className="mb-1">
                Cocker Spaniel angielski:{" "}
                <span className="color-pink font-semibold">270zł</span>
              </li>
              <li className="mb-1">
                Flat Coated Retriever:{" "}
                <span className="color-pink font-semibold">340zł</span>
              </li>
              <li className="mb-1">
                Fox Terrier:{" "}
                <span className="color-pink font-semibold">250zł</span>
              </li>
              <li className="mb-1">
                Terrier walijski:{" "}
                <span className="color-pink font-semibold">250zł</span>
              </li>
              <li className="mb-1">
                Gryfonik belgijski i brukselski:{" "}
                <span className="color-pink font-semibold">180zł</span>
              </li>
              <li className="mb-1">
                Jamnik szorstko włosy standard:{" "}
                <span className="color-pink font-semibold">190zł</span>
              </li>
              <li className="mb-1">
                Terrier szkocki:{" "}
                <span className="color-pink font-semibold">250zł</span>
              </li>
              <li className="mb-1">
                Cairn Terrier:{" "}
                <span className="color-pink font-semibold">220zł</span>
              </li>
              <li className="mb-1">
                Terrier irlandzki:{" "}
                <span className="color-pink font-semibold">260zł</span>
              </li>
            </ul>
          </animated.div>
          <animated.div
            className="w-10/12 lg:w-4/12 flex flex-col items-center price-list-item-holder ml-5 mb-8 lg:mb-0 p-4 rounded-3xl"
            style={PriceListItemAnimate}
          >
            <div className="text-xl font-semibold border-b-2 border-black color-pink">
              Kosmetyka I kąpiel
            </div>
            <ul className="list-disc mt-8  pl-2">
              <li className="mb-1">
                Owczarek szkocki długowłosy:{" "}
                <span className="color-pink font-semibold">290zł</span>
              </li>
              <li className="mb-1">
                Owczarek niemiecki długowłosy:{" "}
                <span className="color-pink font-semibold">280zł</span>
              </li>
              <li className="mb-1">
                Owczarek niemiecki krótkowłosy:{" "}
                <span className="color-pink font-semibold">250zł</span>
              </li>
              <li className="mb-1">
                Samoyed: <span className="color-pink font-semibold">400zł</span>
              </li>
              <li className="mb-1">
                Border Collie:{" "}
                <span className="color-pink font-semibold">200zł</span>
              </li>
              <li className="mb-1">
                Bichon: <span className="color-pink font-semibold">100zł</span>
              </li>
              <li className="mb-1">
                Chow Chow:{" "}
                <span className="color-pink font-semibold">280zł</span>
              </li>
              <li className="mb-1">
                Maltańczyk:{" "}
                <span className="color-pink font-semibold">80zł</span>
              </li>
              <li className="mb-1">
                Maltańczyk z pełnym włosem:{" "}
                <span className="color-pink font-semibold">150zł</span>
              </li>
              <li className="mb-1">
                Cocker Spaniel:{" "}
                <span className="color-pink font-semibold">160zł</span>
              </li>
              <li className="mb-1">
                Kerry Blue Terrier:{" "}
                <span className="color-pink font-semibold">200zł</span>
              </li>
              <li className="mb-1">
                Akita długowłosa:{" "}
                <span className="color-pink font-semibold">320zł</span>
              </li>
              <li className="mb-1">
                Labrador:{" "}
                <span className="color-pink font-semibold">230zł</span>
              </li>
              <li className="mb-1">
                Golden Retriever:{" "}
                <span className="color-pink font-semibold">220zł</span>
              </li>
              <li className="mb-1">
                Shi-Tzu: <span className="color-pink font-semibold">100zł</span>
              </li>
              <li className="mb-1">
                Shi-Tzu w pełnym włosie:{" "}
                <span className="color-pink font-semibold">180zł</span>
              </li>
              <li className="mb-1">
                Pudel Toy:{" "}
                <span className="color-pink font-semibold">120zł</span>
              </li>
              <li className="mb-1">
                Pudel Miniatura:{" "}
                <span className="color-pink font-semibold">130zł</span>
              </li>
              <li className="mb-1">
                Pudel Średni:{" "}
                <span className="color-pink font-semibold">140zł</span>
              </li>
              <li className="mb-1">
                Syberyjski Husky:{" "}
                <span className="color-pink font-semibold">320zł</span>
              </li>
              <li className="mb-1">
                Papillon:{" "}
                <span className="color-pink font-semibold">130zł</span>
              </li>
              <li className="mb-1">
                Mops: <span className="color-pink font-semibold">130zł</span>
              </li>
            </ul>
          </animated.div>
        </div>
      </section>
      <section ref={priceListExtra}>
        <animated.div
          className="pl-2 pr-2 sm:pl-0 sm:pr-0 sm:ml-10 mt-10 w-full sm:w-8/12 flex flex-col"
          style={AboutUsAnimate}
        >
          <span>
            Prosimy o punktualne przybycie na umówioną wizytę. Zastrzegamy sobie
            prawo do przełożenia, anulowania lub doliczenia <b>50%</b> wartości
            pielęgnacji w przypadku spóźnienia <b>powyżej 15 minut</b>.
          </span>
          <b className="mt-5">Ponad to:</b>
          <ul className="mt-2 list-disc ">
            <li className="mb-2">
              Rozczesywanie sierści z kołtunów – dodatkowo płatne
              <b className="ml-1 color-pink">60 zł/godzina</b>
            </li>
            <li className="mb-3 sm:mb-1">
              Psy problemowe (wymagające drugiej osoby do pomocy) – dodatkowo
              płatne - <b className="color-pink ">40 zł</b>
            </li>
            <li className="mb-3 sm:mb-1">
              Kąpiel przeciwpchelna – <b className="color-pink ">30 zł</b>
            </li>
            <li className="mb-3 sm:mb-1">
              Obcinanie pazurków – <b className="color-pink ">30 zł</b>
            </li>
            <li className="mb-3 sm:mb-1">
              Usuwanie włosów z uszu – <b className="color-pink ">20 zł</b>
            </li>
            <li className="mb-3 sm:mb-1">
              Wizyta adaptacyjna - Darmowa usługa.{" "}
              <Link to="" className="text-sky-600 border-b-2 border-sky-600">
                Więcej dowiesz się tutaj.
              </Link>{" "}
            </li>
            <li className="mb-3 sm:mb-1">
              Wizyta zapoznawcza - Cena wizyty adaptacyjnej jest ustalana
              indywidualnie.{" "}
              <Link className="text-sky-600 border-b-2 border-sky-600" to="">
                Więcej dowiesz się tutaj.
              </Link>
            </li>
          </ul>
        </animated.div>
      </section>
      <div className="w-full mt-10 sm:mt-[5rem]  mb-20">
        <span className=" mb-10 flex justify-center font-semibold text-2xl">
          Cennik akcesoriów sklepowych
        </span>
        <div className="flex justify-center mt-5">
          <table className="table-spacing rounded-md  sm:w-8/12">
            <thead>
              <tr>
                <th className="w-3/12">Nazwa</th>
                <th className="w-6/12">Do czego</th>
                <th className="w-3/12">Cenna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-3/12 text-center break-all border-solid border-1 border-black">
                  Sanki
                </td>
                <td className="   border-solid border-1 border-black w-3/5 pl-5 pr-5 break-all pt-5 pb-5  text-sm sm:text-base">
                  Zjeżdzanie Szybkie bez patrzenia na l;udzi do czesania i
                  patrzenia na ludzi jak szybko jedzie tak bo szybako bardzo
                  jedzie{" "}
                </td>
                <td className="w-3/12 text-center text-sm sm:text-base">
                  100zł
                </td>
              </tr>
              <tr>
                <td className="w-3/12 text-center break-all   border-solid border-1 border-black text-sm sm:text-base">
                  Sanki
                </td>
                <td className="    w-3/5 pl-5 pr-5 break-all pt-5 pb-5 text-sm sm:text-base">
                  Zjeżdzanie Szybkie bez patrzenia na l;udzi do czesania i
                  patrzenia na ludzi jak szybko jedzie tak bo szybako bardzo
                  jedzie{" "}
                </td>
                <td className="w-3/12 text-center text-sm sm:text-base">
                  100zł
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
