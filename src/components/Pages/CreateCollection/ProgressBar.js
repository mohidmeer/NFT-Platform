import React from 'react'

const ProgressBar = ({page ,stateChanger}) => {
  return (
<div class=" mx-auto my-4 border-b-2 pb-4">	
	<div class="flex pb-3">
		

		<div  class="flex-1">
			<div onClick={() => stateChanger(1)}  class="w-10 h-10 bg-pink-600 mx-auto rounded-full text-lg text-white flex items-center">
				<span  class="text-white font-bold text-center w-full">1</span>
			</div>
		</div>


		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==2 || page>2   ? 'bg-pink-600 ' :' bg-gray-300'}   w-full text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>
		<div  class="flex-1">
			<div onClick={() => stateChanger(2)}  className={` ${page==2 || page>2   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`}>
				<span  class=" font-bold text-center w-full">2</span>
			</div>
		</div>


		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==3 || page>3 ? 'bg-pink-600' :'bg-gray-300'}  w-full text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>
	
		
		<div class="flex-1">
			<div onClick={() => stateChanger(3)}  className={` ${page==3 || page>3   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`} >
				<span class=" text-center font-bold w-full">3</span>
			</div>
		</div>
	
		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div  class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==4 || page>4  ? 'bg-pink-600' :'bg-gray-300'}  w-full text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>
	
		<div class="flex-1">
			<div onClick={() => stateChanger(4)} className={` ${page==4 || page>4   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`}>
				<span class="  font-bold text-center w-full">4</span>
			</div>
		</div>
	
	
		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==5 || page>5  ? 'bg-pink-600' :'bg-gray-300'}  w-full text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>


		<div class="flex-1">
			<div onClick={() => stateChanger(5)} className={` ${ page==5 ||page>5   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`}>
				<span class="font-bold text-center w-full">5</span>
			</div>
		</div>

		<div class="w-1/6 align-center items-center align-middle content-center flex">
			<div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className={` ${page==6  ? 'bg-pink-600' :'bg-gray-300'}  w-full text-xs leading-none py-1 text-center text-grey-darkest rounded `} ></div>
			</div>
		</div>


		<div class="flex-1">
			<div onClick={() => stateChanger(6)} className={` ${ page==6   ? 'bg-pink-600 text-white' :'bg-white text-black'}  w-10 h-10  border mx-auto rounded-full text-lg text-white flex items-center`}>
				<span class="font-bold text-center w-full">6</span>
			</div>
		</div>
		
	
	
				
	</div>
	
	<div class="grid gap-x-4	grid-cols-6 ">
		<div class="font-bold">
			Introduction
		</div>
		<div class=" ml-6  ">
			<span class="font-bold ">Collection</span>
		</div>
		
		<div class="   text-center">
			<span class="mr-10 font-bold">Details</span>
		</div>
		
		<div class="font-bold  text-center ml-8 ">
			 Hashlist
		</div>
		
		<div class="font-bold  text-right mr-8">
			Socials
		</div>			
		<div class="font-bold  text-right">
			KYC
		</div>			
	</div>

	
</div>
  )
}

export default ProgressBar