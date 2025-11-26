import React from 'react'
import AboutHeader from '../about/AboutHeader'
import { Link } from 'react-router';
import ImagecontainerTours from '../../components/ImageContainer';
import { TourType } from '../../components/landingC/PopularDestination';
import { ArrowRight } from '../../icons/icons';

const DestinationPage = () => {
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
    return(
        <>
        <AboutHeader 
          background='url(/slider/15.jpg)'
          title={
            <div className="w-full lg:w-1/2 uppercase mt-[90px]">
            <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > Choose your destination </h6>
                       <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                       <h5 className={``}>  Popular <span className="text-primary" >DEstination </span>  </h5>
                       </div>
            </div>
          }
          
          />
          
<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
</div>
          
         
       </>
       
      )
    
    }

export default DestinationPage


