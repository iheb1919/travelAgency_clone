
import { ClockIcon, UserAltLight, LocationIcon, SmileIcon } from '../../icons/icons'

const PopularTours2 = () => {
  return (
    <section className='my-[90px] '>
   <div className='container mx-auto'>
   <div className='flex flex-col gap-4'>
       <div>
            <h4> Choose your place</h4>
            <h1 className="">Popular <span>Tours</span>  </h1>
       </div>
   </div>
   <div className='container tours3  section-padding bg-lightnav mx-auto grid grid-cols-1 md:grid-cols-3 gap-4' >
       
   {
        Array(9).fill(null).map((_,i)=>{
          return(

        <div key={i} className="square-flip">
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
      </div>
          )
        })
      }

   </div>
   </div>
      
       </section>
  )
}

export default PopularTours2

 