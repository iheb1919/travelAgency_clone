import React from 'react'
import AboutHeader from '../about/AboutHeader'
import { usePagination } from '../../hooks/usePaginationControls';

const Blog1 = () => {
   const {
          currentItems,
          PaginationControls,
        } = usePagination([0,0,0,0,0,0], 6);
  return (
    <>
     <AboutHeader 
          background='url(/slider/15.jpg)'
          title={
            <div className="w-full lg:w-1/2 uppercase mt-[90px]">
            <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > Read travel blog </h6>
                       <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                       <h5 className={``}>  Travel  <span className="text-primary" >Experience </span>  </h5>
                       </div>
            </div>
          }
          
          />

          <div className='container mx-auto gap-5 my-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' > 
            {Array(5).fill(null).map((_,i)=>(
                 <div key={i} className=' travelExp  relative group overflsow-hidden z-2' >
                 <span className="category flex flex-col justify-center items-center ![writing-mode:unset] left-5 !right-[unset]" 
                 style={{transform:'rotate(0)'}}
                 > 
                 DEC
                 <span className='font-bold text-lg px-2 ' >15</span>
                {/*  {category}  */}
                 
                 </span>
                  <img className='group-hover:brightness-70 transition-all duration-500 z-1' src="/destinations/france1.jpg" alt="" />
                  <div style={{
                        margin: "-160px 20px 90px",
                        bottom: "-90px"
                  }} className='transition-all p-5 bg-white 
                 body
                  flex flex-col gap-3 z-2
                  duration-500 relative bottom-20
                  group-hovesr:bottom-50
                  msx-auto  px-6 w-[80%] '>
                     <h5 className='text-primary text-2xl   font-[600]'>Tours</h5>
                    <p style={{
                     color: "#0f2454",
                     fontSize: "20px",
                     marginBottom: "0px",
                     fontWeight: "600",
                     lineHeight: "1.5em",
                    }} >Family Adventure Tours for Teens & Kids</p>
                  </div>
                  </div>
            ))} 
            <div className='md:col-span-2 lg:col-span-3 ' >
            <PaginationControls /></div> 
          </div>
          
    </>
  )
}

export default Blog1


