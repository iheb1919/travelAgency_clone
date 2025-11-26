import PopularTours from '../../components/landingC/PopularTours'
import AboutHeader from '../about/AboutHeader'

const Tours1 = () => {
 
return(
    <>
    <AboutHeader 
      background='url(/slider/2.jpg)'
      title={
        <div className="lg:w-1/2 uppercase mt-[90px]">
        <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > Choose your tour </h6>
                   <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                   <h5 className={``}> Most Popular <span className="text-primary" >Tours </span>  </h5>
                   </div>
        </div>
      }
      
      />
      <PopularTours/>
     
   </>
   
  )

}

export default Tours1