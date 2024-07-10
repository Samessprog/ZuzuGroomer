import React from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";

const Regulations: React.FC = () => {
  return (
    <div>
      <div className="relative regulamin-img">
        <img
          src={p1}
          className="w-full h-1/12 regulamin-img relative object-cover"
          alt="loading err"
        />
        <div className="absolute regulation-text">
          <span className=" object-cover text-6xl fancy-text tracking-wide">
            Regulamin
          </span>
        </div>
      </div>
      <section className="pb-20">
        <div className="flex justify-center mb-10 mt-10 text-2xl font-semibold color-pink">
          REGULAMIN SALONU SHAGGY GROOMING ATELIER:
        </div>
        <div className=" w-full pr-10 pl-10 flex justify-center regulations-holder bg-cover bg-fixed ">
          <ol className="list-decimal flex flex-col items-start text-justify w-10/12">
            <li className="">
              W celu umówienia wizyty należy zarezerwować termin telefonicznie
              pod nr. <b>512 785 857</b> lub osobiście, informując groomera o
              stanie szaty i zdrowiu psa. Jeśli to pierwsza wizyta pieska w
              salonie prosimy o poinformowanie o tym fakcie w celu
              zarezerwowania dla pupila większej ilości czasu, żeby przyzwyczaić
              go do zabiegów pielęgnacyjnych.
            </li>
            <li className="mt-4">
              W przypadku nieodwołania wizyty w określonym terminie i chęci
              ponownego umówienia się
              <b> klient musi zapłacić 50% kosztów wizyty</b>, na której się nie
              pojawił
            </li>
            <li className="mt-4 font-semibold">
              Klienci, którzy wizyty nie odwołują i nie pojawiają się na niej
              nie będą już mieli możliwości korzystania z usług salonu.
            </li>
            <li className="mt-4">
              Prosimy o punktualne przyprowadzanie i odbieranie swoich pupili.
              Każde spóźnienie o którym salon nie został poinformowany powyżej
              15 min., wiąże się z niewykonaniem pełnej usługi
            </li>
            <li className="mt-4">
              Bezpośrednio przed wizytą w salonie prosimy nie karmić psa oraz
              zapewnić mu dłuższy spacer w calu załatwienia wszystkich potrzeb
              fizjologicznych.
            </li>
            <li className="mt-4">
              Pies przyprowadzony do salonu musi{" "}
              <b>
                bezwzględnie posiadać aktualne szczepienie przeciwko
                wściekliźnie.
              </b>{" "}
              W przypadku pogryzienia właściciel zobowiązany jest do okazania
              zaświadczenia o szczepieniu psa. Brak aktualnego szczepienia
              skutkuje zgłoszeniem właściciela psa do odpowiednich służb. W
              Polsce istnieje obowiązek szczepienia psów przeciwko wściekliźnie
              co roku.
            </li>
            <li className="mt-4">
              Zwierzęta stare, chore, bojaźliwe, niezrównoważone i agresywne są
              przyjmowane na życzenie i wyłączną odpowiedzialność właściciela.
              Właściciel jest zobowiązany poinformować salon o wszelkich
              problemach zdrowotnych i behawioralnych zwierzęcia. Zatajanie
              takich informacji może skutkować narażeniem stanu zdrowia i życia
              zarówno psa jak i groomera. W przypadku takich psów klientowi nie
              przysługuje prawo do składania reklamacji dotyczącej staranności
              wykonanej fryzury.
            </li>
            <li className="mt-4">
              Cena za usługę ustalana jest indywidualnie w zależności od stopnia
              trudności i rodzaju problemu.{" "}
              <b>
                W skrajnych przypadkach salon ma prawo odmówienia usługi bądź
                odstąpienia od niej.
              </b>
            </li>
            <li className="mt-4">
              Usługi wykonywane są bez podania jakichkolwiek środków
              farmakologicznych przez salon i przemocy wobec zwierząt. Jeżeli
              pies wymaga podania środków uspokajających robi to właściciel po
              konsultacji z lekarzem weterynarii bądź lekarz weterynarii
              bezpośrednio. Salon powinien zostać każdorazowo poinformowany, że
              pies jest pod wpływem środków uspokajających.
            </li>
            <li className="mt-4">
              Rozczesywanie mocno skołtunionej okrywy, stwierdzonych pasożytów,
              wielkości odbiegającej od wzorca danej rasy, konieczności
              asystowania drugiej osoby oraz w przypadku wydłużającego się czasu
              usługi ze względu na problemy zdrowotne lub behawioralne, jest
              usługą dodatkowo płatną, cena ustalana jest indywidualnie na
              miejscu po obejrzeniu pieska.
            </li>
            <li className="mt-4">
              W salonie używane są <b>tylko profesjonalne kosmetyki</b> dla psów
              posiadające atest.
            </li>
            <li className="mt-4">
              Po każdym kliencie stanowisko pracy oraz narzędzia są poddane
              dezynfekcji i sterylizacji.
            </li>
            <li className="mt-4">
              W salonie nie ma możliwości przebywania w trakcie wykonywania
              zabiegów z psem. Dla ułatwienia pracy groomera i skrócenia czasu
              wykonywanej usługi pod nieobecność właściciela pies jest
              spokojniejszy i chętniej współpracuje z groomerem.
            </li>
            <li className="mt-4">
              Pieska przywozimy punktualnie na umówioną wizytę i odbieramy po
              informacji telefonicznej, że jest gotowy.
            </li>
            <li className="mt-4">
              W przypadku wystąpienia jakichkolwiek podrażnień, problemów ze
              skórą lub alergii klient jest zobowiązany natychmiast poinformować
              salon o zaistniałej sytuacji aby przy następnej wizycie móc
              wyeliminować lub ograniczyć czynniki wpływające na stan skóry.
            </li>
            <li className="mt-4">
              Każdorazowo informujemy klienta o uszkodzeniach skóry powstałych w
              wyniku strzyżenia (nie dotyczy zaciętych pazurków). Ranki są
              dezynfekowane i zabezpieczane.
            </li>
            <li className="mt-4 font-semibold">
              Pies w naszym salonie zostaje wydany wyłącznie osobie, która go
              przyprowadziła lub przez nią wskazanej.
            </li>
            <li className="mt-4">
              Wszelkie wątpliwości i zastrzeżenia co do jakości bądź sposobu
              wykonania fryzury należy zgłaszać do <b>24h</b> od wykonanej
              usługi . Jeżeli reklamacja zostanie zgłoszona w nieprzekraczalnym
              terminie i uznana za zasadną salon zobowiązany jest do poprawienia
              niedociągnięć
            </li>
            <li className="mt-4">
              Salon ma prawo do wykorzystania wizerunku psa w celach
              promocyjnych i reklamowych.
            </li>
            <li className="mt-4">
              Wszelkie promocje, które organizowane są dla Klientów SHAGGY
              GROOMING ATELIER (np. zbieranie pieczątek z każdej wizyty) dotyczą
              wyłącznie jednego psa i wykluczone jest łączenie z wizyt różnych
              Klientów.
            </li>
          </ol>
        </div>
        <div className="ml-10 mt-16 font-bold">
          <span className=" border-b-2 border-black pb-0.5">
            Pozostawiając zwierzaka pod opieką salonu SHAGGY GROOMING ATELIER,
            klient akceptuje wszystkie warunki regulaminu.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Regulations;
