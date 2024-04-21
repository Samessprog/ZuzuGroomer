import React from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={p1}
          alt="loading err"
          className="contact-img w-full object-cover"
        />
        <span className="absolute text-6xl fancy-text tracking-wide contact-info-text z-1 left-1/2 top-1/2">
          <i>Kontakt</i>
        </span>
      </div>
      <main>
        <section className="flex justify-center mt-20">
          <div className="w-9/12 flex text-lg md:text-xl">
            <div className="flex flex-col w-full xl:w-7/12 items-center xl:items-start">
              <span className="text-3xl sm:text-5xl font-semibold">
                Dane kontaktowe
              </span>
              <div className="mt-4 flex flex-col text-slate-600 items-center xl:items-start">
                <div className="flex items-center mb-2 mt-3 info-data-container-elm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="0 -960 960 960"
                    width="25"
                    className="mr-3 ml-1 contact-icon transition-all ease-in-out delay-200 fill-[#4e4e4e]"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <span>213214212</span>
                </div>
                <div className="flex items-center mb-2 mt-2 info-data-container-elm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25"
                    viewBox="0 -960 960 960"
                    width="25"
                    className="mr-3 ml-1 contact-icon"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                  <span className="cursor-pointer">
                    Zuzannu hasannu@.iso.pl
                  </span>
                </div>
                <div className="flex items-center mb-2 mt-2 info-data-container-elm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="27"
                    viewBox="0 -960 960 960"
                    width="27"
                    className="mr-3 contact-icon"
                  >
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                  <span>
                    <a href="#">ul. Wieśnia 16/2a</a>
                  </span>
                </div>
              </div>
              <div className="mt-5 w-full">
                <span className="text-2xl  xl:text-2xl font-semibold flex xl:justify-start justify-center w-full xl:w-5/12">
                  Sprawdź również
                </span>
                <div className="flex justify-center xl:justify-between  xl:w-4/12 mt-7">
                  <div className="contact-social rounded-full cursor-pointer p-2">
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
                  <div className="contact-social rounded-full ml-5 cursor-pointer p-2">
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
                  <div className="contact-social rounded-full ml-5 cursor-pointer p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="45px"
                      height="45px"
                      className="fill-white"
                    >
                      {" "}
                      <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 15.934398 17.156174 19.198143 13.414062 19.867188 L 13.414062 15.035156 L 15.779297 15.035156 L 16.130859 12.310547 L 13.429688 12.310547 L 13.429688 10.574219 C 13.429687 9.7862188 13.649297 9.2539062 14.779297 9.2539062 L 16.207031 9.2539062 L 16.207031 6.8222656 C 15.512031 6.7512656 14.814234 6.71675 14.115234 6.71875 C 12.041234 6.71875 10.621094 7.9845938 10.621094 10.308594 L 10.621094 12.314453 L 8.2773438 12.314453 L 8.2773438 15.039062 L 10.621094 15.039062 L 10.621094 19.873047 C 6.861695 19.218214 4 15.946666 4 12 C 4 7.582 7.582 4 12 4 z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5/12  justify-center hidden xl:flex">
              <img src={p1} alt="loading err" className="w-full h-full" />
            </div>
          </div>
        </section>
        <section>
          <iframe
            title="google-map"
            className="w-full mt-20 map-container mb-5 pl-5 pr-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12138.98564959422!2d19.118283106725848!3d50.23763521599856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c528fdfa72db%3A0x4b638e90ac47fd42!2sKebab%20u%20Alika%202!5e0!3m2!1spl!2spl!4v1710866304136!5m2!1spl!2spl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default ContactInfo;
