import React from "react";
import Slider from "react-slick";
import Opinion from "./Opinion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MainOptions {
  displayWidth: number;
}

const MainOpinions: React.FC<MainOptions> = ({ displayWidth }) => {
  const opinions = [
    {
      text: "Miejsce stworzone dla zwierząt oraz ich kochających właścicieli.Moja sunia jest z natury strachliwa i nieśmiała, każdy potencjalny  zabieg pielęgnacyjny był dla niej bardzo stresujący. Przy Pani  Elizie nie mamy tego problemu. Sunia jest zadowolona, zadbana.",
      data: "04.03.2024",
    },
    {
      text: "zzzzzzzzzzzzzzzzz zzzzz zzzzz z.",
      data: "04.03.2024",
    },
    {
      text: "Dla zwierząt oraz ich kochających właścicieli.Moja sunia jest z natury strachliwa i nieśmiała, każdy potencjalny  zabieg pielęgnacyjny był dla niej bardzo stresujący. Przy Pani  Elizie nie mamy tego problemu. Sunia jest zadowolona, zadbana.",
      data: "04.03.2124",
    },
    {
      text: "Dla zwierząt oraz ich kochających właścicieli.Moja sunia jest z natury strachliwa i nieśmiała, każdy potencjalny  zabieg pielęgnacyjny był dla niej bardzo stresujący. Przy Pani  Elizie nie mamy tego problemu. Sunia jest zadowolona, zadbana.",
      data: "04.03.2124",
    },
    {
      text: "Dla zwierząt oraz ich kochających właścicieli.Moja sunia jest z natury strachliwa i nieśmiała, każdy potencjalny  zabieg pielęgnacyjny był dla niej bardzo stresujący. Przy Pani  Elizie nie mamy tego problemu. Sunia jest zadowolona, zadbana.",
      data: "04.03.2124",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: displayWidth > 900 ? 2 : 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,

    nextArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="slider-arrow-right "
      >
        <path d="M494.667-480.667 301.334-674l73.999-74 267.334 267.333-267.334 267.334-73.999-74 193.333-193.334Z" />
      </svg>
    ),
    prevArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="slider-arrow-left "
      >
        <path d="M560.667-213.333 293.333-480.667 560.667-748l73.999 74-193.333 193.333 193.333 193.334-73.999 74Z" />
      </svg>
    ),
  };

  return (
    <section className="mb-20">
      <div className="flex flex-col items-center mt-30">
        <div className="opinion-header text-5xl mb-2">Opinie</div>
        <div className="font-bold xl:text-5xl tracking-wide text-2xl text-center pl-3 pr-3 xl:pl-0 xl:pr-0 ">
          JAK WIDZĄ NAS KLIENCI?
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 cursor-default">
        <div className="w-8/12 mx-auto text-center x ">
          <Slider {...settings}>
            {opinions.map((elm) => (
              <Opinion elm={elm} key={elm.data} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MainOpinions;
