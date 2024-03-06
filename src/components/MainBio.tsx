import React from "react";

const MainBio: React.FC = () => {
  return (
    <section className="w-full flex bio-info-holder ">
      <div className="bio-img-holder w-4/12 overflow-hidden flex  object-cover">
        <figure className="w-12/12 img-holder">
          <img
            src="https://www.gry-online.pl/i/h/22/431209879.jpg"
            alt="loading err w-12/12"
            className="bio-img"
          />
        </figure>
      </div>
      <article className="bio w-7/12">
        <h1 className=" bio-header font-bold mb-7">
          <i>Priviet</i>
        </h1>
        <div className="fs-3 text-lg bio-main w-10/12 ">
          <p className="mb-5">
            Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          </p>
          <p className="mb-4">
            Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <p className="mb-4">
            Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <p className="mb-4">
            Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <p className="mb-4">
            Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <p>
            Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
        </div>
        <h2 className="text-xl bio-footer font-bold mt-7">
          <i>Zuzanna Hassa</i>
        </h2>
      </article>
    </section>
  );
};

export default MainBio;
