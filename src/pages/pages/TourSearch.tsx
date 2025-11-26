import React, { useState } from 'react'
import AboutHeader from '../about/AboutHeader'
import Headerform, { destinations, duration } from '../../components/landingForm/Headerform'
import SelectList from '../../components/list/SelectList'
import { ArrowDropDownLine, Search } from '../../icons/icons'

const TourSearch = () => {
  const data: string | any[]=[]
  return (
    <>
        <AboutHeader 
          background='url(/slider/15.jpg)'
          title={
            <div className="w-full lg:w-1/2 uppercase mt-[90px]">
            <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > Choose your destination </h6>
                       <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                       <h5 className={``}>  Popular <span className="text-primary" >DEstination </span>  </h5>
                       </div>
            </div>
          }
          />
          <section className='py-[90px] !m-0 bg-[#f4f5f8] '>
            <div className='container mx-auto'>
              {
                (data.length===0 || !data) && <div className='text-center'> 
                  <h1 className='!mb-5'>No results found!</h1>
                 <h6>Please search for another tour. </h6>
                 </div> 
              }
              <TourSearchForm/>
             { (data.length >0  && data) && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

              </div>}
            </div>
          </section>
    </>
  )
}

export default TourSearch

const TourSearchForm = ()=>{
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  return (
      <div className="w-full z-3 relative msy-5 psx-5  ">
          <div className="tour-inner">
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-gray-400 ">
          <form action="" className='contents'>
              <div className='  h-[60px]  '>
                  <input type="text" className="!outline-none w-full h-full px-5 placeholder:text-text_color" placeholder="Where to ?" name="" id="" />
              </div>
              <SelectList
              data={destinations}
              openDropdownId={openDropdownId}
              setOpenDropdownId={setOpenDropdownId}
              id="dropdown1"
              text="Destinations"
              icon={<ArrowDropDownLine className='text-primary text-[12px]' />}
              selected={selectedDestination}
              onChange={(val) => setSelectedDestination(val)}
              />
              <SelectList
              data={duration}
              openDropdownId={openDropdownId}
              setOpenDropdownId={setOpenDropdownId}
              id="dropdown2"
              text="Duration"
              icon={<ArrowDropDownLine className='text-primary text-[12px]' />}
              selected={selectedDuration}
              onChange={(val) => setSelectedDuration(val)}
              />
              <button type='submit' className= {`flex shrink-0 w-full justify-center items-center h-full
              cursor-pointer transition-all  hover:border-darkBlue hover:text-white
                  hover:bg-darkBlue 
                  bg-[var(--primary)] text-white text-[16px] 
                  font-light px-5 py-2 border 
                  border-[var(--primary)]`} >
                      <Search  className=' mr-2'/>
                  Find Now
              </button>
          </form>
          </div>
          </div>
      </div>
  )
}