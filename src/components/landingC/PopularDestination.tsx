import { Link } from 'react-router'
import ImagecontainerTours from '../ImageContainer'
import {  ArrowRight } from '../../icons/icons'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export type TourType = {
  category: string;
  title: string;
  img: string;
  footerText: string;
};
const PopularDestination = () => {
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
  
  return (
    <section className='my-[90px] '>
    <div className='container mx-auto'>
    <div className='flex flex-col gap-4 mb-5'>
        <div>
             <h4> Top Destination</h4>
             <h1 className="">Popular <span>Destination</span>  </h1>
        </div>
    </div>
   <PopularDestinationCaroucel tours={tours}/>
    </div>
       
        </section>
  )
}

export default PopularDestination

export const PopularDestinationCaroucel = ({tours}:{tours:TourType[]})=>{
    const settings = {
        customPaging: function() {
            return (
                <div   className={`caroucelDot `} ></div>
            );
          },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024, // Tablets and below
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
    
            },
          },
          {
            breakpoint: 768, // Mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        arrows: false,
      };
    return(
        <Slider {...settings}>
          {tours.map(({ category, title, img, footerText }, idx:number) => (
  <div key={idx} className='p-5'>
    <ImagecontainerTours
      category={category}
      title={title}
      img={img}
      footer={
        <div className="text-white flex items-center justify-between">
          <span>{footerText}</span>
          <Link
            to="#"
            className="flex justify-center items-center gap-2 hover:text-primary"
          >
            Explore <ArrowRight className="mt-1" />
          </Link>
        </div>
      }
    />
  </div>
))}
       </Slider>
    )
}