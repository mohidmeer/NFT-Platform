import React from "react";
import CreatorCommunities from "../Landing/CreatearCommunities/CreatorCommunities";
import SocialMediaApi from "../Landing/SocialMediaApi/SocialMediaApi";
import Youtube from "../Landing/Youtube/Youtube";
import Community from "./Community";
import Discord from "./Discord";


const Communities = () => {
  return (
    <div className="mt-7 p-4  ">
      
      
      <div className=''> <Community /> </div>
      {/* <div className='lg:px-24 px-0 rounded-xl         p-4  lg:pb-8  border-2 border-white  mt-12'> <SocialMediaApi /> </div>
      <div className='lg:px-24 px-0 rounded-xl bg-green-300        p-4  lg:pb-8  border-2 border-white  mt-12'> <Discord /> </div> */}
      <div className='mt-8 border-2 rounded-xl  p-4 lg:pb-8 border-white '> <Youtube /> </div>


    </div>
  );
};

export default Communities;
