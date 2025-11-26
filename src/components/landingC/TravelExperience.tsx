import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TourType } from './PopularDestination';
import { ChevronRight } from '../../icons/icons';
const tours:TourType[] = [
    {
      category: 'New',
      title: 'Maldives',
      img: './destinations/maldives1.jpg',
      footerText: '4 Tour Packages',
    },
    {
      category: '25% OFF',
      title: 'Italy',
      img: './destinations/italy1.jpg',
      footerText: '4 Tour Packages',
    },
     {
      category: '7 TOURS',
      title: 'Canada',
      img: './destinations/canada1.jpg',
      footerText: '4 Tour Packages',
    },
    {
      category: 'New',
      title: 'Greece',
      img: './destinations/greece1.jpg',
      footerText: '4 Tour Packages',
    },
    {
      category: '25% OFF',
      title: 'France',
      img: './destinations/france1.jpg',
      footerText: '4 Tour Packages',
    },
    {
      category: '7 TOURS',
      title: 'Dubai',
      img: './destinations/dubai1.jpg',
      footerText: '4 Tour Packages',
    },
  ];
const TravelExperience = () => {
  return (
    <section className='!mb-[0px] bg-[#0f2454] py-10'>
       <div className='container mx-auto'>
       <div className='flex flex-col gap-4 mb-5'>
           <div>
                <h4>Travel Blog</h4>
                <h1 className="!text-white"><span> Travel</span>   Experience  </h1>
           </div>
       </div>
       <TravelExperienceCaroucel tours={tours}/>
       </div>
       </section>
  )
}

export default TravelExperience

export const TravelExperienceCaroucel = ({tours}:{tours:TourType[]})=>{
  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`before:!hidden z-2 !top-[40%] hover:!border-primary hover:!text-primary !right-6 !border-2 rounded-full border-white  !text-white !h-[40px] !w-[40px] ${className} `} style={{ ...style, display: "block"}}>

      <ChevronRight className='w-full h-full' />
    </div>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`before:!hidden z-2 !top-[40%] hover:!border-primary hover:!text-primary !left-6 !border-2 rounded-full border-white  !text-white !h-[40px] !w-[40px] ${className} `} style={{ ...style, display: "block"}}>

        <ChevronRight className='w-full h-full rotate-180' />
      </div>
    );
  }
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 768, // Tablets and below
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
      
              },
            },
             {
              breakpoint: 506, // Tablets and below
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
      
              },
            },
         
          ],
         /*  arrows:false */
      };
    return(
       <div>
         <Slider {...settings}>
          {tours.map(({ category, title, img, footerText }:any, idx:number) => (
  <div key={idx}>
    
    <div className=' travelExp  relative group overflsow-hidden z-2' >
            <span className="category flex flex-col justify-center items-center ![writing-mode:unset] left-5 !right-[unset]" 
            style={{transform:'rotate(0)'}}
            > 
            DEC
            <span className='font-bold text-lg px-2 ' >15</span>
           {/*  {category}  */}
            
            </span>
             <img className='group-hover:brightness-70 transition-all duration-500 z-1' src={img} alt="" />
             <div className='transition-all p-5 bg-white 
            body
             flex flex-col gap-3 z-2
             duration-500 relative bottom-20
             group-hover:bottom-50
             mx-auto  px-6 w-[80%] '>
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
  </div>
))}
       </Slider>
       </div>
    )
}