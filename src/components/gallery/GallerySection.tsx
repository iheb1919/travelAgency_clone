import React from 'react'
import LazyImage from '../LazyImage'

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
                        <LazyImage className='hover:scale-105 transition-all duration-500' src="./slider/2.jpg" alt="Gallery Image 1" />
                    </div>
                    <div className=' overflow-hidden md:col-span-2   ' >
                        <LazyImage className='hover:scale-105 transition-all duration-500' src="./slider/11.jpg" alt="Gallery Image 2" />
                    </div>
                    <div className=' overflow-hidden md:col-span-2   ' >
                        <LazyImage className='hover:scale-105 transition-all duration-500' src="./slider/16.jpg" alt="Gallery Image 3" />
                    </div>


                    <div className=' overflow-hidden md:col-span-3' >
                        <LazyImage className='hover:scale-105 transition-all duration-500' src="./slider/15.jpg" alt="Gallery Image 4" />
                    </div>
                    <div className=' overflow-hidden md:col-span-3   ' >
                        <LazyImage className='hover:scale-105 transition-all duration-500' src="./slider/17.jpg" alt="Gallery Image 5" />
                    </div>






                </div>
            </div>

        </section>
    )
}

export default ImageGallery