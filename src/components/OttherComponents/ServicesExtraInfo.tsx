import React from "react";
import { useSpring, animated, type SpringValues } from "react-spring";
import { useInView } from "react-intersection-observer";
interface ServicesExtra {
  servicesExtraInfoView: boolean;
}

const ServicesExtraInfo: React.FC<ServicesExtra> = ({}) => {
  const [ServicesExtraInfoRef, servicesExtraInfoView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const servicesExtraInf = (
    servicesExtraInfoView: boolean,
    translate: string,
  ): SpringValues<React.CSSProperties> => {
    return useSpring({
      opacity: servicesExtraInfoView ? 1 : 0,
      transform: servicesExtraInfoView ? `translateX(0%)` : `${translate}`,
      config: { tension: 170, friction: 70 },
    });
  };

  return (
    <section className="pl-10 pr-10 overflow-hidden">
      <div
        className="font-semibold text-2xl color-pink flex justify-center mb-5 mt-5"
        role="heading"
        aria-level={4}
        id="ServicesAnchor"
      >
        Dowiedz się więcej o:
      </div>
      <div className="flex justify-center" ref={ServicesExtraInfoRef}>
        <animated.div
          className="mt-5 text-justify text-md w-6/12 mr-8 flex flex-col services-frame p-5 img-bg"
          style={servicesExtraInf(servicesExtraInfoView, "translateX(-100%)")}
        >
          <span
            className="font-semibold text-xl color-pink flex justify-center mb-2"
            role="heading"
            aria-level={5}
            aria-label="Wizyta Zapoznawcza dla Psów"
          >
            Wizyta Zapoznawcza dla Psów
          </span>
          Wizyta zapoznawcza jest idealnym rozwiązaniem dla szczeniąt oraz psów
          dorosłych które nigdy dotąd niekorzystających z usług groomerskich lub
          które miały trudne doświadczenia w przeszłości. Polega ona na 30
          minutowym zapoznaniu się psa z groomerem oraz salonem. Na tej wizycie
          nie są przeprowadzane żadne zabiegi groomerskie.{" "}
          <p
            className="mt-2 font-semibold color-pink text-lg"
            role="heading"
            aria-level={6}
            aria-label="Wizyta zapoznawcza obejmuje:"
          >
            Wizyta zapoznawcza obejmuje:
          </p>
          <ul className=" mt-2 ml-4 mb-2" id="adaptationServices">
            <li>Komfortowe wprowadzenie psa do salonu</li>
            <li>Zapoznanie groomera z psem</li>
            <li>
              Sprawdzanie odruchów psa na różnego rodzaje dźwięki oraz szumy
            </li>
            <li>
              Edukacja klienta jak powinna wyglądać prawidłowa pielęgnacja w
              domu tak aby pies komfortowo odbywał wszelkie zabiegi kosmetyczne.
            </li>
          </ul>
          <strong>
            {" "}
            Wizyta zapoznawcza jest całkowicie darmowo ponieważ ma ona polegać
            na poinstruowaniu właściciela jak prawidłowo pracować z własnym
            pupilem dla ich wspólnego komfortu.
          </strong>
        </animated.div>
        <animated.div
          className="mt-5 text-justify text-md w-6/12 ml-8 flex flex-col services-frame p-5 img-bg"
          style={servicesExtraInf(servicesExtraInfoView, "translateX(100%)")}
        >
          <span
            className="font-semibold text-xl color-pink flex justify-center mb-2 "
            role="heading"
            aria-level={5}
            aria-label="Wizyta Adaptacyjna dla Psów"
            id=""
          >
            Wizyta Adaptacyjna dla Psów
          </span>{" "}
          Wizyta adaptacyjna jest idealnym rozwiązaniem dla psów, które nigdy
          wcześniej nie korzystały z usług groomera lub miały trudne
          doświadczenia w przeszłości. Ta usługa jest także odpowiednia dla psów
          lękliwych, nielubiących pielęgnacji oraz tych, które przeżyły traumę.
          Ważne jest, aby właściciel poinformował nas o wszelkich problemach
          behawioralnych przed umówieniem wizyty.{" "}
          <p
            className="mt-2 font-semibold color-pink text-lg"
            id="introductoryVisit"
          >
            Wizyta adaptacyjna obejmuje:
          </p>
          <ul className="list-disc mt-2 ml-4 mb-2">
            <li>
              Stopniowe wprowadzenie psa do zabiegów pielęgnacyjnych w
              bezstresowej atmosferze.
            </li>
            <li>
              {" "}
              Indywidualne podejście i dostosowanie zabiegów do potrzeb oraz
              zachowania psa.
            </li>
            <li>
              Delikatne zabiegi pielęgnacyjne, które mają na celu zbudowanie
              zaufania i komfortu psa.
            </li>
            <li>
              Wsparcie i wskazówki dla właściciela, jak przygotować psa do
              regularnych wizyt u groomera.
            </li>
          </ul>
          Cena wizyty adaptacyjnej jest ustalana indywidualnie na podstawie
          wielkości psa oraz jego potrzeb. W celu uzyskania szczegółowych
          informacji oraz umówienia wizyty prosimy o kontakt telefoniczny lub
          osobistą wizytę w salonie. Wierzymy, że dzięki naszej wizytom
          adaptacyjnym, każdy pies może czuć się bezpiecznie i komfortowo
          podczas pielęgnacji.
        </animated.div>
      </div>
    </section>
  );
};

export default ServicesExtraInfo;
