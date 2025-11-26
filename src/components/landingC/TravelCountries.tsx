import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TourType } from './PopularDestination';
import { Link } from 'react-router';
import { ArrowRight, LocationIcon } from '../../icons/icons';
import ImagecontainerTours from '../ImageContainer';
export const tours:TourType[] = [
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
const TravelCountries = () => {
  return (
    <section className='my-[90px] '>
       <div className='container mx-auto'>
       <div className='flex flex-col gap-4 mb-5'>
           <div>
                <h4> Most Popular</h4>
                <h1 className="">Travel <span>Countries</span>  </h1>
           </div>
       </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className="country country1 mt-5   " style={{
        backgroundImage:'url("./map1.png")',
         backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
      }}    >
                        <div className="section-title2">Italy, Europe</div>
                        <p>We provide you with interesting and exciting tours to different parts of the world. Orci varius natoque penatibus et magnis disney turien nascete ridiculus duru in the mus nellen.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3  tour-list">
                            <div className="col-md-4">
                                <ul>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Roma</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Milan</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Verona</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Venice</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Florence</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Perugia</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">San Marino</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Parma</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Aosta</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="butn-dark mt-10  w-fit "> 
                            <a href="#"  className="block w-full">
                            <span className='relative z-2 flex justify-center items-center gap-2' >
                                All Tours <ArrowRight/> 
                            </span>
                            </a>
                             </div>
                    </div>
        <PopularDestinationCaroucel tours={tours}/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-4'>
      <div className="order-2 country country1 mt-5"
      style={{
        backgroundImage:'url("./map2.png")',
         backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
      }}
      >
                        <div className="section-title2">France, Europe</div>
                        <p>We provide you with interesting and exciting tours to different parts of the world. Orci varius natoque penatibus et magnis disney turien nascete ridiculus duru in the mus nellen.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3  tour-list">
                            <div className="col-md-4">
                                <ul>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Paris</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Orleans</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Nantes</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Lyon</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Bordeaux</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Toulouse</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Marseille</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Cannes</a></li>
                                    <li className=' flex justify-censter items-center gap-1' ><LocationIcon className='text-primary text-lg' /> <a href="#" className="link-btn">Nice</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="butn-dark mt-10  w-fit "> 
                            <a href="#"  className="block w-full">
                            <span className='relative z-2 flex justify-center items-center gap-2' >
                                All Tours <ArrowRight/> 
                            </span>
                            </a>
                             </div>
                    </div>
        <PopularDestinationCaroucel tours={tours}/>
      </div>
       </div>
          
           </section>
  )
}

export default TravelCountries


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
        slidesToShow: 2,
        slidesToScroll: 2,
        
        arrows: false,
         responsive: [
           
             {
              breakpoint: 506, // Tablets and below
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
      
              },
            },
         
          ],
      };
    return(
       <div className='padd'>
         <Slider {...settings}>
          {tours.map(({ category, title, img, footerText }, idx:number) => (
  <div key={idx}  >
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
       </div>
    )
}