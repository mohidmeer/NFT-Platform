import React from "react";

const items = () => {
  return (
    <a >
      <div class="relative rounded-xl border border-dark-2 overflow-hidden">
      <img
          draggable="false"
          loading="lazy"
          class="  rounded-xl"
          src="https://img-cdn.magiceden.dev/rs:fill:252:189:0:0/plain/https://bafybeicgmccd4nno5zoc2lm6ypvzntzj7dcekfstjfbnp7oanhtfb4eirq.ipfs.dweb.link/"
        />
        
        <div class="w-full text-sm  flex flex-col items-center rounded-b-xl ">
          <span class="text-white-1">Star Atlas: CORE Epi...</span>
          <span class="text-pink-primary flex items-center space-x-2 text-xs">
            <span>Star Atlas: CORE Epi...</span>
          </span>
          <div class="bg-dark-2 text-xs py-1 px-2 mt-3 text-white space-x-2">
            <span class="text-green-500">LIVE</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default items;
