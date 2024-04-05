import React from "react";
import p1 from "../../assets/grafika-ms1.png";
import p2 from "../../assets/grafika-ms2.png";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const SummaryMain: React.FC = () => {
  const [summaryRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const servicesInfoAnimate = (
    inView: boolean,
    duration: number,
    translate: string,
  ) => {
    return useSpring({
      opacity: inView ? 1 : 0,
      duration,
      transform: inView ? `translateX(0%)` : `${translate}`,
      config: { tension: 200, friction: 50 },
    });
  };

  return (
    <section ref={summaryRefElement} className="overflow-hidden mt-20">
      <div className="flex items-center summary-holder flex-col lg:flex-row bg-cover bg-fixed">
        <animated.div
          style={servicesInfoAnimate(elementInView, 600, "translateX(-100%)")}
          className="summary-img-holder w-full lg:w-4/12 flex justify-center mb-10 lg:mb-0"
        >
          <img src={p1} alt="loading Err" title="Grooming" />
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, 600, "translateY(100%)")}
          className=" w-full lg:w-4/12 flex justify-center flex-col items-center"
        >
          <div className="color-pink special-font text-5xl lg:text-6xl mb-3 text-center">
            {" "}
            U mnie każdy pupil{" "}
          </div>
          <div className="text-2xl lg:text-4xl font-bold text-center">
            CZUJE SIĘ JAK W NIEBIE
          </div>
          <p className="text-base text-center w-full pl-3 sm:pl-2 pr-3 sm:pr-2 mt-16 mb-5 sm:mb-0">
            Profesjonalną i kompleksową obsługę zapewnia{" "}
            <b>certyfikowany groomer (psi fryzjer) i behawiorysta</b>. Jestem do
            dyspozycji moich klientów w mieście Mysłowice, w szczególności w
            dzielnicy <b>Bończyk, Wielka Skotnica, Rymera, Wesoła, Janów</b>.{" "}
          </p>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, 600, "translateX(100%)")}
          className="summary-img-holder hidden lg:flex w-4/12"
        >
          <img src={p2} alt="loading Err" title="Grooming" />
        </animated.div>
      </div>
      <div className="flex des-holder  w-full pl-3 pr-4 sm:pl-10 sm:pr-10 lg:flex-row flex-col mt-10 sm:mt-16 ">
        <div className="flex flex-col w-full lg:w-4/12  des-holder-elm ml-4  pl-8 pr-8 text-base text-[15px]">
          <p className="mb-4 ">
            {" "}
            <b className="text-black ">Psi fryzjer</b> – groomer – Warszawa
          </p>
          <p className="mb-4 text-wrap">
            Moja specjalność to grooming, czyli usługa polegająca na pielęgnacji
            psów. W ramach usługi wykonuję kosmetykę uszu i obcinanie pazurków,
            wyczesywanie, kąpiel, trymowanie, strzyżenie oraz usuwanie insektów.
            Twój pupil będzie wyglądał wyjątkowo po wizycie u psiego fryzjera!
          </p>
          <p className="mb-4 text-wrap">
            Jestem certyfikowanym psim groomerem, a przy tym stale się
            doszkalam, aby oferować moim klientom obsługę wyłącznie na
            najwyższym poziomie. Pomagam nawet w skomplikowanych przypadkach,
            gdy zwierzę wymaga wytężonej pracy. Dla mnie najważniejsza jest
            najwyższa jakość obsługi i satysfakcja moich klientów.
          </p>
          <p className="mb-4 text-wrap">
            Zachęcam do bliższego zapoznania się z galerią fotografii przed i po
            strzyżeniu i kompleksowej pielęgnacji w moim salonie psiej urody!
          </p>
        </div>
        <div className="flex flex-col des-holder-elm w-full lg:w-4/12 pl-8 pr-8 text-[15px]">
          <p className="mb-4">
            {" "}
            <b className="text-black">Behawiorystar</b> – Warszawa
          </p>
          <p className="mb-4 text-wrap">
            Twój pies często się stresuje? Nie przepada za innymi psami i
            wykazuje agresywne zachowania? A może nie możesz nawiązać z nim
            odpowiednich relacji? W takim przypadku warto pomyśleć o konsultacji
            u psiego behawiorysty.
          </p>
          <p className="mb-4 text-wrap">
            <b className="text-black">Psi behawiorysta </b> to specjalista w
            zakresie zachowania psów. Można nazwać go także psim psychologiem
            oraz psychoterapeutą zachowania. Behawiorysta posiada wiedzę, która
            pozwala mu na zrozumienie psiego języka oraz zrozumienie potrzeb
            zwierząt, a tym samym potrafi wpłynąć na ich zachowania.
          </p>
          <p className="mb-4 text-wrap">
            Podczas wizyty obserwuję zachowania zwierzęcia, a także
            przeprowadzam dokładny wywiad z klientem. Następnie przygotowuję
            plan działania, dzięki któremu można „wyleczyć” nieprawidłowe
            zachowanie psa.
          </p>
        </div>
        <div className="flex flex-col des-holder-elm mr-3 w-full lg:w-4/12 pl-8 pr-8  text-[15px]">
          <p className="mb-4">
            {" "}
            <b className="text-black">Hotelik dla psów</b> – Warszawa
          </p>
          <p className="mb-4 text-wrap">
            Wybierasz się na wakacje lub w podróż służbową? Zachęcam także do
            skorzystania z moich usług!
          </p>
          <p className="mb-4 text-wrap">
            Prowadzę przytulny<b className="text-black"> hotelik dla psów</b> .
            To kameralne, rodzinne miejsce, gdzie psiaki zawsze znajdują się pod
            dobrą opieką. Dzięki mojemu doświadczeniu i odpowiedniemu podejściu
            do zwierząt każdy pobyt u mnie jest udany!
          </p>
          <p className="mb-4 text-wrap">
            W ramach oferty zapewniam opiekę nad psiakami – zawsze z
            indywidualnym podejściem i zrozumieniem potrzeb pupili, posiłki,
            spacery oraz wyśmienitą zabawę. W hoteliku można korzystać także z
            opieki w świetlicy w ciągu dnia. Oferuję też dodatkowe usługi –
            zabiegi pielęgnacyjne, trening oraz transport zwierzaków.
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center mb-20 text-lag font-bold">
        <p className="mb-10 c-black-600 text-center">
          Zuzu Groomer w mediach społecznościowych
        </p>
        <div className="flex  w-12/12 justify-between">
          <div className="icon-holder rounded-full bg-sky-700 mr-5 p-3.5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="45px"
              height="45px"
              className="fill-white "
            >
              {" "}
              <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 15.934398 17.156174 19.198143 13.414062 19.867188 L 13.414062 15.035156 L 15.779297 15.035156 L 16.130859 12.310547 L 13.429688 12.310547 L 13.429688 10.574219 C 13.429687 9.7862188 13.649297 9.2539062 14.779297 9.2539062 L 16.207031 9.2539062 L 16.207031 6.8222656 C 15.512031 6.7512656 14.814234 6.71675 14.115234 6.71875 C 12.041234 6.71875 10.621094 7.9845938 10.621094 10.308594 L 10.621094 12.314453 L 8.2773438 12.314453 L 8.2773438 15.039062 L 10.621094 15.039062 L 10.621094 19.873047 C 6.861695 19.218214 4 15.946666 4 12 C 4 7.582 7.582 4 12 4 z" />
            </svg>
          </div>
          <div className="icon-holder rounded-full bg-black mr-5 p-3.5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="45px"
              height="45px"
              className="fill-white "
            >
              {" "}
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
            </svg>
          </div>
          <div className="icon-holder rounded-full bg-orange-600 p-3.5 cursor-pointer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="45px"
              height="45px"
              className="fill-white"
            >
              <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryMain;
