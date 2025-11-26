import { useState } from 'react';
import SelectList from '../../components/list/SelectList';
import { usePagination } from '../../hooks/usePaginationControls';
import { ArrowDropDownLine, ClockIcon, LocationIcon, Search, SmileIcon, UserAltLight } from '../../icons/icons';
import AboutHeader from '../about/AboutHeader'

const Tours3 = () => {
    const blogList: any[] = [
        {
          date: "29,Dec,2025",
          title: "Documents required for car rental",
          blogger: "Olivia D.",
          comments: 5,
          img: "/carRent%20images/blog/03.jpg"
    
        },
        {
          date: "29,Dec,2025",
          title: "Rental cost of sport and other cars",
          blogger: "Olivia D.",
          comments: 5,
          img: "/carRent%20images/blog/04.jpg"
    
        },
        {
          date: "29,Dec,2025",
          title: "Rental cars how to check driving fines?",
          blogger: "Olivia D.",
          comments: 5,
          img: "/carRent%20images/blog/05.jpg"
    
        },
        {
          date: "29,Dec,2025",
          title: "How to Rent a Car at the Airport Terminal?",
          blogger: "Olivia D.",
          comments: 5,
          img: "/carRent%20images/blog/06.jpg"
    
        },
        {
          date: "29,Dec,2025",
          title: "Penalties for violating the rules in rental cars",
          blogger: "Olivia D.",
          comments: 5,
          img: "/carRent%20images/blog/01.jpg"
    
        },
        {
          date: "29,Dec,2025",
          title: "How to check a car before renting?",
          blogger: "Olivia D.",
          comments: 5,
          img: "/carRent%20images/blog/02.jpg"
    
        },
      ]
    const {
        currentItems,
        PaginationControls,
      } = usePagination(blogList, 6);
return(
    <>
    <AboutHeader 
      background='url(/slider/2.jpg)'
      title={
        <div className="lg:w-1/2 uppercase mt-[90px]">
        <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > travel countries </h6>
                   <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                   <h5 className={``}>  Popular <span className="text-primary" >Destination </span>  </h5>
                   </div>
        </div>
      }
      
      />
     {/*  <PopularTours/> */}
      <div className='container mx-auto my-[90px] grid gap-y-3 grid-cols-1 md:grid-cols-3 '>
        <div className='w-full md:col-span-2 tours3  section-padding bg-lightnav mx-auto grid grid-cols-1 md:grid-cols-2 gap-4' >

                {
                currentItems.map((blog, i) => <div key={i} className="square-flip">
                        <div className="square bg-img" data-background="img/destination/canada1.jpg" style={{
                            backgroundImage: "url('/destinations/canada1.jpg')"
                        }}>
                            <div className="square-container flex  items-end justify-end ">
                                <div className="box-title">
                                    <h4 className='!tracking-[0px]'>Canada</h4>
                                    <h6>$1.500 / per person</h6>
                                </div>
                            </div>
                            <div className="flip-overlay"></div>
                        </div>
                        <div className="square2 bg-white">
                            <div className="square-container2">
                                <h4>Canada</h4>
                                <h6>$1.500 / per person</h6>
                                <p>Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum.</p>
                                <div className="grid grid-cols-2">
                                    <div className="col col-md-6">
                                        <ul>
                                            <li className="flex justify-censter items-center" ><ClockIcon className="text-primary" /> 5 Days</li>
                                            <li className="flex justify-censter items-center" ><UserAltLight className="text-primary" /> 9+</li>
                                        </ul>
                                    </div>
                                    <div className="col col-md-6">
                                        <ul>
                                            <li className="flex justify-censter items-center" ><LocationIcon className="text-primary" /> Canada</li>
                                            <li className="flex justify-censter items-center" ><SmileIcon className="text-primary" /> 9.3 Superb</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="btn-line"><a href="tour-details.html">Tour details</a></div>
                            </div>
                        </div>
                        </div>)
                }
        <div className=' md:col-span-2'>
            <PaginationControls />
        </div>
        </div>
        <div>
           <SearchForm/>
        </div>

        </div>
     
   </>
   
  )

}

export default Tours3



    export const destinations= [
        {
            id:1,
            name:"greece"
        },
        {
            id:2,
            name:"london"
        },
        {
            id:3,
            name:"maldives"
        },
        {
            id:4,
            name:"paris"
        },
        {
            id:5,
            name:"rome"
        }
    ]
    export const duration= [
        {
            id:1,
            name:"1 Day Tour"
        },
        {
            id:2,
            name:"2-4 Days Tour"
        },
        {
            id:3,
            name:"5-7 Days Tour"
        },
        {
            id:4,
            name:"7+ Days Tour"
        }
    ]
 const SearchForm = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    return (
        <div className="w-full z-3 relative msy-5 psx-5 bg-light_gray  ">
            <div className="container mx-auto ">
            <div className="tour-inner">
            <div className="bg-white grid grid-cols-1  lg:divide-x divide-gray-400 ">
            <form action="" className='contents'>
                <div className='h-[60px] font-poppins text-white font-semibold text-2xl flex justify-center items-center w-full bg-primary text-center'>
                    Plan your trip 

                </div>
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
                    bg-[var(--primary)] text-black text-[16px] 
                    font-light px-5 py-2 border 
                    border-[var(--primary)]`} >
                        <Search  className=' mr-2'/>
                    Find Now
                </button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}

