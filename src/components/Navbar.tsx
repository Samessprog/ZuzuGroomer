import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar flex justify-center">
      <div className="flex navbar-holder w-full items-center ">
        {/*Hamburger*/}
        <div className="hamburger w-1/12 ">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="xl:w-2/12 logo-holder flex justify-start sm:justify-center">
          <img
            src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_414,h_80/http://www.mojasfora.pl/wp-content/uploads/2018/11/moja-sfora.png"
            alt="loading logo err"
            className="navbar-logo"
          />
        </div>
        <div className=" w-8/12 flex justify-end pr-5 navbar-menu-holder">
          <ul className="flex justify-around font-medium">
            <li className="menu-navbar-item">O nas</li>
            <li className="menu-navbar-item">Usługi</li>
            <li className="menu-navbar-item">Psi Behawiorysta</li>
            <li className="menu-navbar-item">Program lojalnościowy</li>
            <li className="menu-navbar-item">Galeria</li>
            <li className="menu-navbar-item">Cennik</li>
            <li className="menu-navbar-item">Kontakt</li>
            <li className="menu-navbar-item">Regulamin</li>
          </ul>
        </div>
        <div className="w-2/12 flex navbar-icons-holder ">
          <div className="flex flex-col md:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26px"
              height="26px"
              id="facebook-icon"
              className="mb-3 md:mb-0"
            >
              {" "}
              <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26px"
              height="26px"
              id="instagram-icon"
            >
              {" "}
              <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="26px"
              height="26px"
              id="maps-icon"
              className="mb-3 md:mb-0"
            >
              <path d="M 36 2 C 32.460938 2 29.292969 3.554688 27.09375 6 L 6.34375 6 C 3.960938 6 2 7.960938 2 10.34375 L 2 43.21875 C 1.984375 43.324219 1.984375 43.425781 2 43.53125 L 2 43.65625 C 2 46.039063 3.960938 48 6.34375 48 L 39.65625 48 C 42.039063 48 44 46.039063 44 43.65625 L 44 43.5625 C 44.015625 43.457031 44.015625 43.355469 44 43.25 L 44 23.4375 C 46.105469 20.632813 48 17.894531 48 14 C 48 7.382813 42.617188 2 36 2 Z M 36 4 C 41.535156 4 46 8.464844 46 14 C 46 17.414063 44.308594 19.691406 42.09375 22.625 C 39.972656 25.433594 37.476563 28.824219 36 33.9375 C 34.523438 28.824219 32.027344 25.433594 29.90625 22.625 C 29.082031 21.53125 28.308594 20.535156 27.6875 19.53125 C 27.6875 19.519531 27.6875 19.511719 27.6875 19.5 C 27.675781 19.480469 27.667969 19.457031 27.65625 19.4375 C 27.613281 19.273438 27.527344 19.121094 27.40625 19 C 26.542969 17.480469 26 15.921875 26 14 C 26 8.464844 30.464844 4 36 4 Z M 6.34375 8 L 25.625 8 C 24.597656 9.765625 24 11.8125 24 14 C 24 16.136719 24.578125 17.917969 25.4375 19.5625 L 4 40.96875 L 4 10.34375 C 4 9.042969 5.042969 8 6.34375 8 Z M 12.125 10 C 8.75 10 6 12.75 6 16.125 C 6 19.5 8.75 22.21875 12.125 22.21875 C 17.46875 22.21875 18.378906 17.414063 17.875 15.03125 L 12.125 15.03125 L 12.125 17.375 L 15.4375 17.375 C 15.003906 18.789063 13.835938 19.8125 12.125 19.8125 C 10.089844 19.8125 8.4375 18.160156 8.4375 16.125 C 8.4375 14.089844 10.089844 12.4375 12.125 12.4375 C 13.039063 12.4375 13.855469 12.761719 14.5 13.3125 L 16.21875 11.59375 C 15.132813 10.605469 13.710938 10 12.125 10 Z M 36 10 C 33.800781 10 32 11.800781 32 14 C 32 16.199219 33.800781 18 36 18 C 38.199219 18 40 16.199219 40 14 C 40 11.800781 38.199219 10 36 10 Z M 36 12 C 37.117188 12 38 12.882813 38 14 C 38 15.117188 37.117188 16 36 16 C 34.882813 16 34 15.117188 34 14 C 34 12.882813 34.882813 12 36 12 Z M 26.5 21.3125 C 27.0625 22.160156 27.648438 23.007813 28.28125 23.84375 C 28.289063 23.855469 28.304688 23.863281 28.3125 23.875 L 6.21875 45.96875 C 5.023438 45.902344 4.097656 44.976563 4.03125 43.78125 Z M 29.5 25.5 C 30.929688 27.453125 32.355469 29.621094 33.4375 32.4375 L 28 27 Z M 42 26.15625 L 42 40.96875 L 37.34375 36.34375 C 37.390625 36.261719 37.441406 36.167969 37.46875 36.09375 C 37.632813 35.660156 37.613281 35.375 37.6875 35.09375 C 38.683594 31.265625 40.3125 28.523438 42 26.15625 Z M 26.59375 28.40625 L 41.96875 43.78125 C 41.902344 44.976563 40.976563 45.902344 39.78125 45.96875 L 24.40625 30.59375 Z M 23 32 L 36.96875 46 L 9.03125 46 Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="26px"
              height="26px"
              id="tikTok-icon"
            >
              <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
