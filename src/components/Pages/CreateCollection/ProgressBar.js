import React from 'react'

const ProgressBar = ({page ,stateChanger}) => {
  return (
<div class=" mx-auto my-4 border-b-2 pb-4">	
	<div class="flex pb-3">
		<div class="flex-1">
		</div>

		<div  class="flex-1">
			<div onClick={() => stateChanger(1)}  class="w-10 h-10 bg-pink-600 mx-auto rounded-full text-lg text-white flex items-center">
				<span  class="text-white font-bold text-center w-full">1</span>
			</div>
		</div>


		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==2 || page==3  || page==4 ? 'w-100' :'w-0'}  bg-pink-600 text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>
	
		
		<div class="flex-1">
			<div onClick={() => stateChanger(2)}  className={` ${page==2 || page==3 || page==4   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`} >
				<span class=" text-center font-bold w-full">2</span>
			</div>
		</div>
	
		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div  class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==3 || page==4  ? 'w-100' :'w-0'}  bg-pink-600 text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>
	
		<div class="flex-1">
			<div onClick={() => stateChanger(3)} className={` ${page==3 || page==4   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`}>
				<span class="  font-bold text-center w-full">3</span>
			</div>
		</div>
	
	
		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==4  ? 'w-100' :'w-0'}  bg-pink-600 text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>


		<div class="flex-1">
			<div onClick={() => stateChanger(4)} className={` ${ page==4   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`}>
				<span class="font-bold text-center w-full">4</span>
			</div>
		</div>
		
	
	
		<div class="flex-1">
		</div>		
	</div>
	
	<div class="flex text-xs content-center text-center">
		<div class="w-1/4 text-lg font-bold ">
			Introduction
		</div>
		
		<div class="w-1/4 text-lg font-bold">
			Collection
		</div>
		
		<div class="w-1/4 text-lg font-bold">
			 Details
		</div>
		
		<div class="w-1/4 text-lg font-bold">
			Hashlist
		</div>			
	</div>
</div>
  )
}

export default ProgressBar