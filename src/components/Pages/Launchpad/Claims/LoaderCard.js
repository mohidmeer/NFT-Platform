import React from 'react'

const LoaderCard = () => {
  return (
    <div class="border border-dark shadow rounded-md   w-full ">
   <div class="animate-pulse flex ">
    <div class="flex-1 ">
      <div class="h-64 bg-slate-400 rounded"></div>
      <div class="mt-3">
        <div class="grid grid-cols-1 gap-2 mt-">
          <div class="mx-6 h-4 bg-slate-400 rounded "></div>
          <div class="mx-28 h-4 bg-pink-400 rounded "></div>
        </div>
        <div class="flex justify-between px-3 gap-10 mt-4  ">
          <div className='h-6 bg-slate-400 w-full rounded ' >    </div>
          <div className='h-6 bg-slate-400 w-full rounded' >    </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default LoaderCard