import React from 'react'

const ImageGallery = () => {
  return (
    <section className='my-[90px] '>
    <div className='container mx-auto'>
    <div className='flex flex-col gap-4 mb-7'>
        <div>
             <h4> Images</h4>
             <h1 className="">Image <span>Gallery</span>  </h1>
        </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-6 gap-4' >
    <div className=' overflow-hidden md:col-span-2' >
         <img className='hover:scale-105 transition-all duration-500' src="./slider/2.jpg" alt="" />
         </div>
         <div className=' overflow-hidden md:col-span-2   ' >
         <img className='hover:scale-105 transition-all duration-500' src="./slider/11.jpg" alt="" />
         </div>
         <div className=' overflow-hidden md:col-span-2   ' >
         <img className='hover:scale-105 transition-all duration-500' src="./slider/16.jpg" alt="" />
         </div>
    
         
         <div className=' overflow-hidden md:col-span-3' >
         <img className='hover:scale-105 transition-all duration-500' src="./slider/15.jpg" alt="" />
         </div>
         <div className=' overflow-hidden md:col-span-3   ' >
         <img className='hover:scale-105 transition-all duration-500' src="./slider/17.jpg" alt="" />
         </div>
         
 
        
 
     
 
    </div>
    </div>
       
        </section>
  )
}

export default ImageGallery