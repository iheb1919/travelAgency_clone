import NumbersSection from "../../components/landingC/NumbersSection"
import OurAgency from "../../components/landingC/OurAgency"
import PopularDestination from "../../components/landingC/PopularDestination"
import PopularTours from "../../components/landingC/PopularTours"
import TravelCountries from "../../components/landingC/TravelCountries"
import TravelExperience from "../../components/landingC/TravelExperience"
import VideoPromo from "../../components/landingC/VideoPromo"
import Headerform from "../../components/landingForm/Headerform"


const Landing = () => {
  return (
    <>
    <header data-overlay-dark="4" className='h-screen  relative  bg-fixed bg-cover bg-center'
    style={{
        backgroundImage:"url('./slider/1.jpg')"
    }}
    >
         
          <div className="container z-2  absolute  top-1/2 left-1/2 mx-auto  translate-[-50%]">
          <div className="flex flex-col justify-center items-center px-4">
              <h4 className="!text-white"> Let's travel the world with us</h4>
              <h1 className="text-center md:ml-15">Explore The World With <span>Travol</span>  </h1>
          </div>
          </div> 
        
        
    </header>
    <Headerform/>
    <OurAgency/>
    <PopularTours/>
    <NumbersSection/>
    <PopularDestination/>
    <VideoPromo/>
    <TravelCountries/>
    <TravelExperience/>
    
 
    </>
  )
}

export default Landing