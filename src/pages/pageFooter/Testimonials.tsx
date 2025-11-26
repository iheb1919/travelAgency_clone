import { BaselineStar, PhoneCallSpeaker } from '../../icons/icons'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
     const testimonialsAvis = [
        {
            stars:3,
            footer:{
                position:"customer",
                name:"Dan Martin",
                img:'/team/1.png',
                text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
            }
        },
        {
            stars:5,
            footer:{
                position:"customer",
                name:"Olivia Brown",
                img:'/team/4.png',
                text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
            }
        },
        {
            stars:4,
            footer:{
                position:"customer",
                name:"Emily Martin",
                img:'/team/6.png',
                text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
            }
        },
        {
          stars:3,
          footer:{
              position:"customer",
              name:"Robert Frank",
              img:'/team/3.png',
              text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
          }
      },
      {
          stars:5,
          footer:{
              position:"customer",
              name:"Jesica Mccury",
              img:'/carRent%20images/team/2.png',
              text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
          }
      },
      {
          stars:4,
          footer:{
              position:"customer",
              name:"Evelyn Elena",
              img:'/carRent%20images/team/5.png',
              text:"Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta urnase mauris in the interdum."
          }
      },
    ]
    const settings = {
        customPaging: function() {
            return (
                <div   className={`caroucelDot `} ></div>
            );
          },
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
  return (
   <section data-overlay-dark="5" style={{backgroundImage:"url('/slider/15.jpg')"}}
   className='py-[120px] md:pb-[0px] !m-0 bg-white bg-fixed bg-cover bg-no-repeat'>
        <div className='container mx-auto grid grid-cols-1 gap-y-15 md:grid-cols-2 z-2 relative'>
            <div className="flex flex-col text-white">
                <h3 className='text-white font-semibold text-2xl !mb-8 '>We Provide Top Destinations Expecially For You Book Now and Enjoy!</h3>
                <div className="flex w-fit ml-4 justify-center items-center text-[16px] gap-2 text">
                      <div className=" flex justify-center items-center
                        rounded-full w-12 h-12">
                        <PhoneCallSpeaker className=" w-full h-full text-white"/>
                      </div>
                      <div className="flex flex-col  ">
                        <span className="text-white " >For information</span>
                        <span className=" text-white " >855 100 4444</span>
                
                      </div>
                
                    </div>
                    <span>Call us, it's toll-free</span>
            </div>


<div className='ml-auto w-full md:w-[80%]'>

<div className='bg-white flex flex-col gap-5  p-[60px_45px_45px_45px] md:-mb-10'>
            <div className='flex flex-col gap-4 mb-5'>
           <div>
                <h4>Testimonials</h4>
                <h1 className="!text-[#0f2454] !text-3xl ">Travelers Reviews </h1>
           </div>
       </div>
       <Slider {...settings}>
         {
            testimonialsAvis.map((testimonial,i)=>
            <div key={i} className='flex flex-col gap-2 p-5'>
       <p>
        {testimonial.footer.text}
       </p>

            <div className="flex gap-2">
            <div className='w-[65px] h-[65px] overflow-hidden rounded-full'>
                <img src="./team/06.png" alt="" />
            </div>
            <div className='flex flex-col '>
                <div className='flex gap-0'> {Array(5).fill(null).map((_,i)=><BaselineStar key={i} className={`${testimonial.stars >= i ? "text-orange-400":"text-gray-500"}`}/>)} </div>
                <p className='!m-0 !p-0 text-black'> {testimonial.footer.name} </p>
                <span className='!m-0 !p-0 text-gray-400'> {testimonial.footer.position} </span>
            </div>
            </div>
        </div>
        )
         }
        </Slider>
            </div>
</div>
        </div>

   </section>
  )
}

export default Testimonials