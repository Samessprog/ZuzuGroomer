import React, { Suspense, lazy } from "react";
import Slider from "react-slick";
import ErrorBoundary from "../OttherComponents/ErrorBoundary";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Opinion = lazy(async () => await import("./Opinion"));
interface MainOptions {
  displayWidth: number;
}
interface SampleNextArrowProps {
  onClick?: () => void;
}

const MainOpinions: React.FC<MainOptions> = ({ displayWidth }) => {
  const opinions = [
    {
      text: "Jestem zachwycona opieką nad moim psem! Zawsze wraca do domu wypielęgnowany, zadowolony i co najważniejsze, bez żadnego stresu. To miejsce to prawdziwe spa dla naszych pupili!",
      data: "12.08.2024",
    },
    {
      text: "Moja kotka nigdy nie była tak spokojna po wizycie u groomera. Profesjonalizm i ciepłe podejście sprawiają, że możemy być spokojni o nasze futrzaki.",
      data: "07.08.2024",
    },
    {
      text: "Z całego serca polecam! Mój pies zawsze czuł stres przed wizytą u groomera, ale odkąd trafiliśmy tutaj, wszystko się zmieniło. Atmosfera pełna spokoju i zrozumienia!",
      data: "02.08.2024",
    },
    {
      text: "Wizyta tutaj to czysta przyjemność! Moja sunia czuje się tu jak w domu. Zawsze pięknie ostrzyżona i zadbana, a ja spokojny o jej komfort.",
      data: "15.07.2024",
    },
    {
      text: "Niesamowite podejście do zwierząt! Mój królik nigdy nie był w lepszych rękach. Profesjonalne usługi i ciepła atmosfera sprawiają, że wracamy tutaj regularnie.",
      data: "20.06.2024",
    },
    {
      text: "Najlepszy salon groomerski, jaki znam! Mój piesek zawsze wraca zadowolony i pięknie odświeżony. Polecam wszystkim właścicielom zwierzaków!",
      data: "05.08.2024",
    },
  ];

  function SampleNextArrow(props: SampleNextArrowProps): JSX.Element {
    const { onClick } = props;
    return (
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="slider-arrow-right rounded-full"
          width="300"
          height="190"
          onClick={onClick}
          tabIndex={0}
        >
          <path d="M494.667-480.667 301.334-674l73.999-74 267.334 267.333-267.334 267.334-73.999-74 193.333-193.334Z" />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props: SampleNextArrowProps): JSX.Element {
    const { onClick } = props;
    return (
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="slider-arrow-left rounded-full"
          onClick={onClick}
          tabIndex={0}
        >
          <path d="M560.667-213.333 293.333-480.667 560.667-748l73.999 74-193.333 193.333 193.333 193.334-73.999 74Z" />
        </svg>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: displayWidth > 900 ? 2 : 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="mb-20">
      <div className="flex flex-col items-center mt-30">
        <div className="color-pink special-font text-5xl mb-2">Opinie</div>
        <div className="font-bold xl:text-4xl tracking-wide text-2xl text-center pl-3 pr-3 xl:pl-0 xl:pr-0 ">
          JAK WIDZĄ NAS KLIENCI?
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 cursor-default">
        <div className="w-8/12 mx-auto text-center x ">
          <ErrorBoundary>
            <Slider {...settings}>
              {opinions.map((elm) => (
                <Suspense key={elm.data} fallback={<div>loading...</div>}>
                  <Opinion elm={elm} key={elm.data} />
                </Suspense>
              ))}
            </Slider>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default MainOpinions;
