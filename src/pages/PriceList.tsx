import React from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, type SpringValues } from "react-spring";

const PriceList: React.FC = () => {
  const [priceListRef, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const PriceListItemAnimate = useSpring({
    opacity: elementInView ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  const [priceListExtra, elementInViewFirst] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const servicesInfoAnimate = (
    elementInViewFirst: boolean,
    translate: string,
    delayNumber: number,
  ): SpringValues<React.CSSProperties> => {
    return useSpring({
      opacity: elementInViewFirst ? 1 : 0,
      transform: elementInViewFirst ? `translateX(0%)` : `${translate}`,
      delay: delayNumber,
      config: { tension: 150, friction: 70 },
    });
  };

  return (
    <>
      <div className="w-full overflow-hidden relative priceList-img">
        <img
          src={p1}
          alt="loading err"
          className="w-full priceList-img object-cover"
        />
        <header>
          <div
            className="absolute z-1 price-list-text flex flex-col top-1/2 left-1/2"
            role="heading"
            aria-level={1}
          >
            <h1>
              <em className="absolute dog-behaviorist-text text-4xl md:text-6xl top-1/2 left-1/2 font-semibold text-center color-pink">
                Cennik
              </em>
            </h1>
          </div>
        </header>
      </div>
      <div className=" flex justify-center items-center mt-10 ">
        <section
          className="w-full sm:w-8/12 text-center ps-5 pr-5 sm:ps-0 sm:pr-0 text-base sm:text-base"
          role="document"
          aria-label="preliminary information"
        >
          <p>
            {" "}
            W naszym salonie szczególną wagę przykładamy do komfortu naszych
            klientów, dlatego każdy piesek otrzymuje tyle czasu, ile potrzebuje
            aby pielęgnacja przebiegła jak najbardziej przyjemnie. Nie oferujemy
            jednak pielęgnacji bez kąpieli pieska. Właśnie kąpiel oraz suszenie
            jest kluczowe w czasie zabiegu, gdyż przygotowuje ona włos do
            strzyżenia, trymowania lub wyczesywania oraz zapewnia higienę pracy.
          </p>
          <p className="mt-5">
            <b>
              W przypadku pupila z sierścią skołtunioną dopłata jest uzależniona
              od stanu szaty oraz jego zachowania.{" "}
            </b>
          </p>
        </section>
      </div>
      <section
        aria-label="price lists"
        role="group"
        aria-labelledby="price-Lists-group"
      >
        <div
          className="mt-20 priceList-container p-6 sm:p-12 w-full flex flex-col items-center lg:flex-row lg:items-start"
          ref={priceListRef}
          id="price-Lists-group"
        >
          <animated.div
            className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12 flex justify-center flex-col items-center price-list-item-holder mb-8 lg:mb-0 rounded-3xl p-4"
            style={PriceListItemAnimate}
          >
            <header>
              <div
                className="text-xl font-semibold border-b-2 border-black color-pink text-center"
                role="group"
                aria-labelledby="Clipping-group"
              >
                <h2>Strzyżenie z kąpielą i pełną kosmetyką</h2>
              </div>
            </header>
            <>
              <ul
                className="list-disc mt-8 pl-2 no-select"
                id="Clipping-group"
                role="list"
              >
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
                <li className="mb-1 ">
                  Cockapoo:{" "}
                  <span className="color-pink font-semibold price">220zł</span>
                </li>
              </ul>
            </>
          </animated.div>
          <animated.div
            className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12 flex flex-col items-center price-list-item-holder sm:ml-5 mb-8 lg:mb-0 rounded-3xl p-4"
            style={PriceListItemAnimate}
            role="group"
            aria-labelledby="Trimming-group"
          >
            <header>
              <div
                className="text-xl font-semibold border-b-2 border-black color-pink text-center"
                id="Trimming-group"
              >
                <h2>Trymowanie z kąpielą i pełną kosmetyką</h2>
              </div>
            </header>
            <ul className="list-disc mt-8 pl-2 no-select" role="list">
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
            className="w-full sm:w-9/12 md:w-7/12 lg:w-4/12 flex flex-col items-center price-list-item-holder sm:ml-5 mb-8 lg:mb-0 p-4 rounded-3xl"
            style={PriceListItemAnimate}
            role="group"
            aria-labelledby="Cosmetology-group"
          >
            <header>
              <div
                className="text-xl font-semibold border-b-2 border-black color-pink text-center"
                id="Cosmetology-group"
              >
                <h2>Kosmetyka I kąpiel</h2>
              </div>
            </header>
            <ul className="list-disc mt-8 pl-2 no-select" role="list">
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
        <div
          className="pl-2 pr-2 sm:pl-0 sm:pr-0 sm:ml-10 mt-10 w-full sm:w-8/12 flex flex-col mb-20 text-base sm:text-base"
          role="group"
          aria-labelledby="extra-info"
        >
          <span>
            Prosimy o punktualne przybycie na umówioną wizytę. W przypadku nie
            przybycia na czas prosimy o kontakt telefoniczny.{" "}
            <p>
              W przypadku spóźnienia powyżej <b>15 minut</b> nie gwarantujemy
              pełnego wykonania usługi.
            </p>
          </span>
          <header>
            <h2>
              <b className="mt-5" role="heading" aria-level={2}>
                Ponad to:
              </b>
            </h2>
          </header>
          <ul
            className="mt-2 list-disc extra-info-holder pr-2"
            role="list"
            id="extra-info"
          >
            <animated.li
              aria-live="polite"
              className="mb-2"
              style={servicesInfoAnimate(
                elementInViewFirst,
                "translateX(-100%)",
                100,
              )}
            >
              Rozczesywanie sierści z kołtunów – dodatkowo płatne
              <b className="ml-1 color-pink">
                zależności od stanu sierści oraz wielkości psa
              </b>
            </animated.li>
            <animated.li
              aria-live="polite"
              className="mb-3 sm:mb-1"
              style={servicesInfoAnimate(
                elementInViewFirst,
                "translateX(-100%)",
                400,
              )}
            >
              Obcinanie pazurków – <b className="color-pink ">20 zł</b>
            </animated.li>
            <animated.li
              aria-live="polite"
              className="mb-3 sm:mb-1"
              style={servicesInfoAnimate(
                elementInViewFirst,
                "translateX(-100%)",
                500,
              )}
            >
              Czyszczenie uszu – <b className="color-pink ">10 zł</b>
            </animated.li>
            <animated.li
              aria-live="polite"
              className="mb-3 sm:mb-1"
              style={servicesInfoAnimate(
                elementInViewFirst,
                "translateX(-100%)",
                550,
              )}
            >
              Wizyta zapoznawcza -{" "}
              <span className="color-pink">
                {" "}
                <b>Darmowa usługa.</b>
              </span>{" "}
              <Link
                to="/Usługi#ServicesAnchor"
                className="text-sky-600 border-b-2 border-sky-600"
                role="link"
              >
                Więcej dowiesz się tutaj.
              </Link>{" "}
            </animated.li>
            <animated.li
              aria-live="polite"
              className="mb-3 sm:mb-1"
              style={servicesInfoAnimate(
                elementInViewFirst,
                "translateX(-100%)",
                570,
              )}
            >
              Wizyta adaptacyjna -{" "}
              <span className="color-pink">
                {" "}
                <b> Cena wizyty adaptacyjnej jest ustalana indywidualnie.</b>
              </span>{" "}
              <Link
                className="text-sky-600 border-b-2 border-sky-600"
                to="/Usługi#ServicesAnchor"
                role="link"
              >
                Więcej dowiesz się tutaj.
              </Link>
            </animated.li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PriceList;
