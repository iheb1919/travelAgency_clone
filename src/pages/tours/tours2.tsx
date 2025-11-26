import TravelCountries from '../../components/landingC/TravelCountries'
import AboutHeader from '../about/AboutHeader'

const Tours2 = () => {
 
return(
    <>
    <AboutHeader 
      background='url(/slider/2.jpg)'
      title={
        <div className="md:w-1/2 uppercase mt-[90px]">
        <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} >Travel Countries </h6>
                   <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                   <h5 className={``}> Popular <span className="text-primary" > Destination </span>  </h5>
                   </div>
        </div>
      }
      
      />
     <TravelCountries/>
     
   </>
   
  )

}

export default Tours2