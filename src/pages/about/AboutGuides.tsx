import React from 'react'
import { Facebook, Whatsapp, Youtube } from '../../icons/icons'

const AboutGuides = () => {
  return (
   <section className='!mb-0 bg-[#0f2454] py-10'>
          <div className='container mx-auto !py-[120px] '>
            <div className='flex flex-col gap-4 mb-5'>
                <div>
                    <h4>Travel Experts</h4>
                    <h1 className="!text-white"> Meet Our<span> Guides</span></h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5" >
                    <GuideCard/>
                    <GuideCard/>
                    <GuideCard/>
            </div>
          </div>
          </section>
  )
}

export default AboutGuides


export const GuideCard = ()=>{
    return(
            <div className='relative group'>
                    <img src="/team/01.jpg" alt="" />
                    <div className="font-bold w-[80%] duration-500 transition-[opacity,translate] group-hover:opacity-0 group-hover:-translate-y-10 absolute left-1/2 -bottom-7 -translate-x-1/2 bg-primary text-white flex items-center flex-col p-5  ">
                        <span className=''>Angelina White</span>
                        <span className=''>Greece Guide</span>
                    </div>
                    <div className='z-2 text-white flex flex-col justify-center items-center  absolute duration-500 transition-[height] bottom-0 left-0 w-full h-0 group-hover:h-full overflow-hidden bg-primary/70'>
                    <h5 className='font-bold !text-white' >Angelina White</h5>
                    <h5 className=' !text-white' >Greece Guide</h5>
                    <p className='!text-white text-center mx-auto w-[90%]' >Nulla quis efficitur lacus sulvinar suere ausue in eduis euro vesatien arcuman ontese auctor ac aleuam aretra.</p>
                            <div className='!text-white  flex gap-2 justify-center items-center'>
                            <Whatsapp  />
                                    <Youtube  /> 
                                    <Facebook  />
                            </div>
                    </div>

            </div>
    )
}