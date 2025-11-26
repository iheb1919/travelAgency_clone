import OurAgency from "../../components/landingC/OurAgency"
import AboutGuides from "./AboutGuides"
import AboutHeader from "./AboutHeader"

const About = () => {
  return (
   <>

<AboutHeader 
      
      title={
        <div className="md:w-1/2 uppercase mt-[90px]">
        <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > The best travel agency </h6>
                   <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                   <h5 className={``}> We helping you find <span className="text-primary" > your dream </span> vacation </h5>
                   </div>
        </div>
      }
      
      />
      <OurAgency/>
      <AboutGuides/>
   </>
   
  )
}

export default About



