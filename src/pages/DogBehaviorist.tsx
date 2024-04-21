import React from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";

const DogBehaviorist: React.FC = () => {
  return (
    <div>
      <div className="relative  ">
        <img
          src={p1}
          alt="loading err"
          className="w-full object-cover dog-behaviorist-img"
        />
        <span className="absolute dog-behaviorist-text fancy-text text-5xl top-1/2 left-1/2">
          Psi Behawiorysta
        </span>
      </div>
      <main>
        <section>
            hola
        </section>
      </main>
    </div>
  );
};

export default DogBehaviorist;
