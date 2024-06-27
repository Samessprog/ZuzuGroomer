import React from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const DogBehaviorist: React.FC = () => {
  const [BehawioElementRef, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const BehawioAnimate = useSpring({
    opacity: elementInView ? 1 : 0,
    transform: elementInView ? `scale(1)` : `scale(0.01)`,
    config: { tension: 250, friction: 70 },
  });

  return (
    <div>
      <div className="relative  ">
        <img
          src={p1}
          alt="loading err"
          className="w-full object-cover dog-behaviorist-img "
        />
        <span className="absolute dog-behaviorist-text fancy-text text-5xl top-1/2 left-1/2">
          Psi Behawiorysta
        </span>
      </div>
      <main className="lg:pl-20 lg:pr-20 pl-5 pr-5">
        <section className="flex mt-20 justify-center flex-col xl:flex-row">
          <div className="w-full xl:w-8/12 pr-5 xl:pr-20 text-lg text-wrap ">
            <p className="">
              Współczesne psy stają się nieodłącznymi członkami naszych rodzin.
              Podobnie jak my, mogą mieć trudności, z którymi samodzielnie sobie
              nie radzą. Niektóre ich zachowania nie są wynikiem złośliwości,
              ale wynikają z nieumiejętności lub dużego stresu. Konsultacja
              behawioralna ma na celu zrozumienie przyczyn tych zachowań i
              stworzenie planu pracy w celu ich zmiany. Wyróżniamy cztery główne
              kategorie przyczyn zachowań niepożądanych:{" "}
            </p>
            <p className="flex flex-col mt-5">
              <ul className="list-disc ml-4 ">
                <li>
                  {" "}
                  <b>Czynniki wrodzone</b>, takie jak uwarunkowania genetyczne,
                  temperament czy pobudliwość.{" "}
                </li>
                <li>
                  <b>Czynniki medyczne</b> , np. ból, alergie, choroby tarczycy.
                </li>
                <li>
                  {" "}
                  <b> Czynniki wyuczone</b>, jak brak socjalizacji czy negatywne
                  doświadczenia.
                </li>
                <li>
                  {" "}
                  <b>Czynniki środowiskowe</b>, takie jak brak możliwości
                  zaspokojenia podstawowych potrzeb czy duża ilość stresujących
                  czynników.
                </li>
              </ul>
            </p>
            <p className="mt-5">
              Potrzebujesz pomocy w zrozumieniu zachowań swojego psa? Chcesz,
              aby był łagodniejszy i bardziej przyjazny? Może interesuje Cię,
              jak bawić się z nim i jakie zabawki wybrać? Zapraszam do
              skorzystania z moich usług behawiorystycznych dla psów!
            </p>
            <p className="mt-5 text-center lg:text-start">
              {" "}
              <b>
                Dysponuję doświadczeniem oraz odpowiednim wykształceniem,
                potwierdzonymi certyfikatami, które gwarantują moją wiedzę i
                umiejętności w dziedzinie behawiorystyki zwierząt.
              </b>
            </p>
          </div>
          <div className="w-full xl:w-4/12  2xl:flex mt-10 xl:mt-0">
            <img src={p1} alt="loading err" className="w-full h-full" />
          </div>
        </section>
        <section className="mt-28 flex justify-center ">
          <div className="w-4/12 hidden 2xl:flex">
            <img src={p1} alt="loading err" className="w-full h-full" />
          </div>
          <div
            className="w-full xl:w-8/12 text-lg lg:pl-10"
            ref={BehawioElementRef}
          >
            <span className="mb-20 text-2xl font-bold">
              Kim jest behawiorysta psów?
            </span>
            <animated.div
              className="pl-5 lg:pl-20 mt-5 text-wrap"
              style={BehawioAnimate}
            >
              <p>
                Behawiorysta psów, zwany także psi psychologiem, jest
                specjalistą zajmującym się analizą zachowania tych zwierząt oraz
                udzielaniem wsparcia właścicielom w odpowiednim postępowaniu
                wobec swoich pupili. W swojej pracy behawiorysta łączy wiedzę z
                różnych dziedzin, takich jak psychologia zwierząt,
                neurofizjologia, biologia czy etologia, co umożliwia mu dogłębne
                zrozumienie nie tylko samego zachowania psa, ale także jego
                emocji, potrzeb i problemów adaptacyjnych.
              </p>
              <p className="mt-5">
                Często mylnie sądzono, że behawiorysta jest potrzebny głównie
                dla psów po trudnych przejściach, np. z schroniska. Jednakże,
                problemy behawioralne mogą dotyczyć również psów rasowych z
                rejestracji hodowlanej.{" "}
                <b>
                  Konsultacje behawiorystyczne są pomocne dla każdego
                  właściciela
                </b>
                , nawet tych, którzy nigdy wcześniej nie mieli psa. Behawiorysta
                jest otwarty na pracę z każdym psem, niezależnie od jego rasy,
                wieku czy przeszłych doświadczeń.
              </p>
              <p className="mt-5">
                Psy mogą wykazywać różnorodne problemy zachowania, które
                wpływają zarówno na nie same, jak i na ich otoczenie.
                <b>
                  {" "}
                  Behawiorysta psów posiada odpowiednie przygotowanie, aby pomóc
                  w rozwiązaniu tych problemów, poprawiając komfort życia
                  zwierzęcia i jego właścicieli.
                </b>
              </p>
              <p className="mt-5">
                Współpraca z behawiorystą może być pomocna w przypadku takich
                problemów jak:
                <ul className="mt-5 list-disc ml-4 mb-5">
                  <li>separacyjna niepewność</li>
                  <li> zaburzenia lękowe</li>
                  <li>nieodpowiednie zachowanie w domu</li>
                  <li>agresja wobec ludzi lub innych zwierząt</li>
                  <li> nadpobudliwość</li>
                  <li>iszczenie przedmiotów czy nadmierne szczekanie.</li>
                </ul>
                <b>
                  Behawiorysta nie służy jednak do oceniania, lecz do udzielania
                  wsparcia i pomocy, aby poprawić jakość życia psa i jego
                  właścicieli.
                </b>
              </p>
            </animated.div>
          </div>
        </section>
        <section className="mt-28 flex justify-center mb-10 ">
          <div className="flex-col ">
            <span className="text-2xl font-semibold">
              Cennik konsultacji behawioralnej
            </span>
            <ul className="list-disc ml-4 mt-4">
              <li>Pierwsza konsultacja 250 zł</li>
              <li>Kolejna konsultacja 150 zł</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DogBehaviorist;
