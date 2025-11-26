import { data } from 'react-router'
import DetailsAnimated from '../../components/DetailsAnimated'
import { HeavyCheckMark, CarDoor, SeatbeltFill, GearboxSquare, TravelLuggageAndBagsRounded, ThermometerHotLight, User20Solid, Whatsapp, ArrowDropDownLine, ArrowLeft, ArrowBottom, BaselineStar, ClockIcon, LocationIcon, SmileIcon, UserAltLight, ArrowRight } from '../../icons/icons'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TourDetails = () => {
  return (
    <div className='z-50' >
        <TourDetailsHeader/>
        <CarInformation data={data}  />
    </div>
  )
}

export default TourDetails


export const CarInformation = ({data}:{data:any})=>{
    const  whoAreWeText:any = {
        title:"General Information",
        text:["Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi consesua the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion consesua the risus consequation the porttiton."],
        list:["24/7 Roadside Assistance","Free Cancellation & Return","Rent Now Pay When You Arrive"],
        
      }
    return(
        <div className="py-[120px] w-full">
     <div className="container  mx-auto ">
        <div className=" w-full mx-auto max-lg:px-[12px] max-w-[1200px] grid grid-cols-3 max-md:grid-cols-1 gap-y-5 ">
          <div className="shrink-0 col-span-2">
            <div className="col-span-4 col-start-2  px-1.5rem">
            <p className="text-primary text-[10px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase" > Travel Agency</p>
            <div style={{fontWeight:700}} className="text-[45px] uppercase leading-[1.2em] font-poppins font-bold  text-[#0f2454]  " >Soneva Jani  <span className="text-primary ">Maldives</span> </div>
            <div className='flex w-fit justify-center items-center my-4 gap-2'>
                <div className='flex w-fit justify-center items-center'>
                    {Array(5).fill(null).map((_,i)=><BaselineStar className={`${i < 4 && "text-[#e4a853]"  } text-[12px] `} />)}
                </div>
                <span className=' text-gray-400 text-sm'>(2Review)</span>
            </div>
             <div className="grid grid-cols-2 text-lg ">
             <div className="flex justify-censter items-center gap-2 py-3" ><ClockIcon className="text-primary" /> 5 Days</div>
             <div className="flex justify-censter items-center gap-2 py-3" ><UserAltLight className="text-primary" /> Group: 5 - 10 People</div>
             <div className="flex justify-censter items-center gap-2 py-3" ><LocationIcon className="text-primary" /> Canada</div>
             <div className="flex justify-censter items-center gap-2 py-3" ><SmileIcon className="text-primary" /> 9.3 Superb</div>
          
            </div>

            <h6 className='text-[27px] my-5 font-semibold leading-[1.2em] font-poppins  text-[#0f2454] '>Information</h6>
                                                
                {
                    whoAreWeText?.text?.map((text:string,i:number)=><p key={i} className="text-[#676977] text-[14px] font-[300] leading-[1.95rem] mb-[15px]  last-of-type:mb-[30px] break-words " > {text} </p>)
                }
            <div className=" flex flex-col gap-4 mb-[30px]">
                {
                  whoAreWeText?.list?.map((List:string,i:number)=> <div className="flex gap-3">
                  <div key={i} className="bg-[var(--bgBox)] flex justify-center items-center dark:text-primary text-gray-600 h-9 w-9 rounded-full">
                    <HeavyCheckMark/>
                  </div>
                  <span className="text-[#676977] text-[14px] font-[300] leading-[1.95rem]">{List}</span>
              </div>)
                }
            
            </div>
                {/* Image Gallery */}
                <div className='flex flex-col gap-5' >
                    <h5 className='font-semibold leading-6 text-2xl  text-[#0f2454]'>Tour Gallery</h5>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2'>
                      <div className='overflow-hidden rounded-lg'>
                      <img className='rounded-lg hover:scale-110  transition-all duration-500' src="/tours/maldives2.jpg" alt="" />
                      </div>
                      <div className='overflow-hidden rounded-lg'>
                            <img className='rounded-lg hover:scale-110  transition-all duration-500' src="/tours/maldives3.jpg" alt="" />
                      </div> 
                      <div className='overflow-hidden rounded-lg'>
                            <img className='rounded-lg hover:scale-110  transition-all duration-500' src="/tours/maldives4.jpg" alt="" />
                      </div>

                    </div>
                    {/* Rental condition */}
                    <div className='grid grid-cols-1 gap-4'>
                    <h5 className='font-semibold leading-6 text-2xl  text-[#0f2454]'>Tour Plan
                    </h5>
                    <DetailsAnimated/>
                    <DetailsAnimated/>
                    <DetailsAnimated/>
                    <DetailsAnimated/>
                    </div>
                </div> 
            </div>
          </div>
          {/* Second Part */}
          <div className="ml-auto w-full  z-2 ">
        
                <div className='w-full flex flex-col overflow-hidden bg-[#f4f5f8] '>
                    <div className='bg-primary w-full h-[80px] font-poppins font-semibold text-xl flex justify-center items-center text-white   gap-2' >
                    From <span className='line-through ml-5'>   $1.250</span>  
                         <span className='text-[27px]'>$900</span> 
                    </div>
                         <form className='flex px-5 py-10 flex-col w-full bg-[var(--bgBox)] justify-center items-center gap-2 text-[#676977] text-sm '>
                          <div className='  h-[60px] w-full  '>
                              <input type="text" className=" bg-white !outline-none w-full h-full px-5 placeholder:text-text_color" placeholder="Full Name" name="" id="" />
                          </div>
                          <div className='  h-[60px] w-full  '>
                              <input type="text" className="bg-white !outline-none w-full h-full px-5 placeholder:text-text_color" placeholder="Email Adress" name="" id="" />
                          </div>
                          <div className='  h-[60px] w-full  '>
                              <input type="text" className="bg-white !outline-none w-full h-full px-5 placeholder:text-text_color" placeholder="Travel Date" name="" id="" />
                          </div>
                          <div className='  h-[60px] w-full  '>
                              <input type="text" className="bg-white !outline-none w-full h-full px-5 placeholder:text-text_color" placeholder="People" name="" id="" />
                          </div>
                          <div className='  w-full  '>
                              <textarea  className="bg-white !outline-none w-full h-full p-5 placeholder:text-text_color" placeholder="Your Enquiry" name="" id="" />
                          </div>
                            <div className="butn-dark  self-start  w-fit "> 
                                <button  className="block w-full">
                                <span className='relative z-2 flex justify-center items-center gap-2' >
                                Book Now 
                                </span>
                                </button>
                            </div>
                    </form>
                </div>
          </div>
        </div>
    </div>
   </div>
    )
}
export const TourDetailsHeader = ()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
      const sliderImages=[
        "/slider/15.jpg",
        "/slider/16.jpg",
        "/slider/17.jpg",
      ]
    return(
       <div className='h-screen header w-full relative '>
        <Slider {...settings}>
         {
            sliderImages.map((img,i)=><div key={i}
            data-overlay-dark="2"
            className={`h-screen w-full !mx-[-5px] bg-cover bg-[url("${img}")] bg-center`}></div>)
        } 
       
        </Slider>
        <button
         onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        className='w-[60px] cursor-pointer animate-bounce h-[60px] flex justify-center items-center text-white rounded-full border border-white absolute  bottom-5 left-1/2 -translate-x-1/2' >
            <ArrowBottom className='text-2xl    '  />
        </button>
       </div>
    )
}