import React from 'react'

const Item = () => {
  return (
    <a class="grid grid-cols-[20px,68px,1fr] items-center gap-x-2" href="/marketplace/y00ts">
      <div class=" text-white-1 font-bold justify-self-end mr-1">2</div>
      <img draggable="false" loading="lazy" class="rounded-full w-16 h-16" src="https://img-cdn.magiceden.dev/rs:fill:64:64:0:0/plain/https://bafkreidc5co72clgqor54gpugde6tr4otrubjfqanj4vx4ivjwxnhqgaai.ipfs.dweb.link/" />
      <div class="flex flex-col gap-1 overflow-hidden">
         <div class="flex items-center gap-1">
            <h3 class="font-bold white-2 truncate">y00ts</h3>
            <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-12826" data-original-title="Reviewed by MagicEden" >
               <div class="fx-12px text-pink-700 flex gap-1">
                  &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                     <path fill="#E42575" fill-rule="evenodd" d="M5.655.33a.5.5 0 01.69 0l.492.469a.5.5 0 00.514.109l.64-.229a.5.5 0 01.63.28l.26.63a.5.5 0 00.424.308l.678.052a.5.5 0 01.462.513l-.02.68a.5.5 0 00.263.454l.599.323a.5.5 0 01.213.657l-.294.613a.5.5 0 00.054.522l.416.539a.5.5 0 01-.072.686l-.519.44a.5.5 0 00-.162.5l.16.66a.5.5 0 01-.345.598l-.652.192a.5.5 0 00-.351.39l-.123.669a.5.5 0 01-.558.406l-.674-.09a.5.5 0 00-.48.213l-.383.561a.5.5 0 01-.676.144l-.579-.357a.5.5 0 00-.524 0l-.58.357a.5.5 0 01-.675-.144l-.383-.561a.5.5 0 00-.48-.214l-.674.09a.5.5 0 01-.558-.405l-.123-.67a.5.5 0 00-.35-.39l-.653-.19a.5.5 0 01-.346-.598l.16-.662a.5.5 0 00-.161-.499l-.519-.44a.5.5 0 01-.072-.686l.416-.54a.5.5 0 00.055-.52L.5 4.575a.5.5 0 01.213-.657l.6-.323a.5.5 0 00.261-.454l-.02-.68a.5.5 0 01.463-.513l.678-.052a.5.5 0 00.424-.308l.26-.63a.5.5 0 01.63-.28l.64.229a.5.5 0 00.514-.11L5.655.33z"></path>
                     <g clip-path="url(#clip0_1538_39894)">
                        <path stroke="#120C18" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8.5 4.5L5.062 7.938 3.5 6.375"></path>
                     </g>
                     <defs></defs>
                  </svg>
               </div>
            </div>
            <div class="flex-grow"></div>
            <span class="pl-1"><span class="text-xs text-green-1">+23.49%</span></span>
         </div>
         <div class="flex flex-wrap gap-y-2 items-center justify-between text-light-gray-500 text-xs">
            <div class="flex items-center space-x-1">
               <span>Floor</span>
               <svg width="14" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use href="#solana-icon"></use>
               </svg>
               <div class="max-w-[60px] truncate" data-tooltipped="" aria-describedby="tippy-tooltip-12827" data-original-title="63.9" ><span class="truncate">63.9</span></div>
            </div>
            <div class="flex items-center justify-between space-x-1">
               <svg width="14" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use href="#solana-icon"></use>
               </svg>
               <div class="truncate" data-tooltipped="" aria-describedby="tippy-tooltip-12828" data-original-title="55,477.32014690102" ><span class="truncate">55.5K</span></div>
            </div>
         </div>
      </div>
   </a>
  )
}

export default Item