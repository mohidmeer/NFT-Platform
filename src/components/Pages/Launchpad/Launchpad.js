import React, { useState } from "react";
import Claims from "./Claims/Claims";
import Ended from "./Ended/Ended";
import Hero from "./Hero/Hero";
import Live from "./Live/Live";
import Upcomming from "./Upcomming/Upcomming";

const Launchpad = () => {
  const [isLive, setIsLive] = useState(true);
  return (
    <div className=" mt-7 p-4 ">
    
      <Hero />

      <div className="mt-4">
        <button
          onClick={() => setIsLive(true)}
          className={`text-3xl decoration-pink-600 underline-offset-8  font-extrabold ${
            isLive ? "underline" : ""
          } `}
        >
          Live
        </button>
        <button
          onClick={() => setIsLive(false)}
          className={`text-3xl decoration-pink-600 underline-offset-8  ml-4 font-extrabold ${
            isLive ? "" : "underline"
          } `}
        >
          Claim
        </button>
        <div className="mt-8">{isLive ? <Live /> : <Claims />}</div>
        <div className="mt-8">
          <Upcomming />
        </div>
        <div className="mt-8">
          <Ended />
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
