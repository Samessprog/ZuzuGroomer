import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div
      className="flex justify-center mt-5 flex-col md:flex-row items-center md:items-start"
      aria-label="Social icons"
      role="group"
    >
      <div className="flex social-holder">
        <a
          href="https://www.youtube.com/watch?v=0hqhAIjE_8I"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          aria-label="TikTok"
          className=" rounded-full cursor-pointer p-[10px] bg-Tick"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="45px"
            height="45px"
            className="fill-white ml-0.5 mt-0.5"
            aria-hidden="true"
          >
            <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z" />
          </svg>
        </a>
        <a
          className=" rounded-full ml-5 cursor-pointer p-[10px] bg-insta"
          role="link"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="45px"
            height="45px"
            className="fill-white  mt-0.5 ml-0.5"
            aria-hidden="true"
          >
            {" "}
            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
          </svg>
        </a>
      </div>
      <div className="flex social-holder mt-4 md:mt-0">
        <a
          className=" rounded-full ml-0 md:ml-5 cursor-pointer p-[11px] bg-facebook "
          role="link"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="45px"
            height="45px"
            className="fill-white ml-0.5 mt-0.5 mr-0.5"
            aria-hidden="true"
          >
            {" "}
            <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 15.934398 17.156174 19.198143 13.414062 19.867188 L 13.414062 15.035156 L 15.779297 15.035156 L 16.130859 12.310547 L 13.429688 12.310547 L 13.429688 10.574219 C 13.429687 9.7862188 13.649297 9.2539062 14.779297 9.2539062 L 16.207031 9.2539062 L 16.207031 6.8222656 C 15.512031 6.7512656 14.814234 6.71675 14.115234 6.71875 C 12.041234 6.71875 10.621094 7.9845938 10.621094 10.308594 L 10.621094 12.314453 L 8.2773438 12.314453 L 8.2773438 15.039062 L 10.621094 15.039062 L 10.621094 19.873047 C 6.861695 19.218214 4 15.946666 4 12 C 4 7.582 7.582 4 12 4 z" />
          </svg>
        </a>
        <a
          className="rounded-full ml-5 cursor-pointer p-[10px] bg-maps"
          role="link"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            className="fill-white mt-0.5 ml-0.5"
            aria-hidden="true"
          >
            <path d="M480.18-486.04q31.08 0 52.71-21.53 21.63-21.54 21.63-52.61 0-31.08-21.65-52.71-21.65-21.63-52.89-21.63-31.24 0-52.59 21.65-21.35 21.65-21.35 52.89 0 31.24 21.53 52.59 21.54 21.35 52.61 21.35ZM480-170.3q130.17-117.61 192.54-210.74 62.37-93.13 62.37-172.66 0-114.8-73.79-188.01-73.8-73.2-181.04-73.2t-181.11 73.2q-73.88 73.21-73.88 188.01 0 79.53 63.87 172.37Q352.83-288.48 480-170.3Zm0 104.43Q312.22-206.83 229.04-325.46q-83.17-118.63-83.17-228.24 0-155.49 100.76-248.24Q347.39-894.7 480-894.7q132.37 0 233.53 92.76Q814.7-709.19 814.7-553.7q0 109.61-83.46 228.24Q647.78-206.83 480-65.87ZM480-560Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
