
import { data } from 'react-router'
import { ClockIcon, UserAltLight, LocationIcon } from '../../icons/icons'
import ImagecontainerTours from '../ImageContainer'

const PopularTours = () => {
  return (
    <section className='my-[90px] '>
   <div className='container mx-auto'>
   <div className='flex flex-col gap-4'>
       <div>
            <h4> Choose your place</h4>
            <h1 className="">Popular <span>Tours</span>  </h1>
       </div>
   </div>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-4' >
        <div className='md:col-span-2 ' >
            <ImagecontainerTours category="400$" title="Maldives" img="./tours/maldives1.jpg" footer={<div className='flex gap-4  flex-nowrap items-center text-white'>
                     <div className='flex items-center justify-center gap-1' ><ClockIcon/> 6 Days</div>
                     <div className='flex items-center justify-center gap-1' > <UserAltLight/> 10 +</div>
                     <div className='flex items-center justify-center gap-1' > <LocationIcon/> Maldives </div>
                </div>}  /></div>
        
        <ImagecontainerTours category="400$" title="Italy" img="./tours/italy1.jpg" footer={<div className='flex gap-4  flex-nowrap items-center text-white'>
                     <div className='flex items-center justify-center gap-1' ><ClockIcon/> 6 Days</div>
                     <div className='flex items-center justify-center gap-1' > <UserAltLight/> 6 +</div>
                     <div className='flex items-center justify-center gap-1' > <LocationIcon/> Italy </div>
                </div>} />
        <ImagecontainerTours category="400$" title="France" img="./tours/france1.jpg" footer={<div className='flex gap-4  flex-nowrap items-center text-white'>
                     <div className='flex items-center justify-center gap-1' ><ClockIcon/> 15 Days</div>
                     <div className='flex items-center justify-center gap-1' > <UserAltLight/> 12 +</div>
                     <div className='flex items-center justify-center gap-1' > <LocationIcon/> France </div>
                </div>} />
        <ImagecontainerTours category="400$" title="Greece" img="./tours/greece1.jpg" footer={<div className='flex gap-4  flex-nowrap items-center text-white'>
                     <div className='flex items-center justify-center gap-1' ><ClockIcon/> 6 Days</div>
                     <div className='flex items-center justify-center gap-1' > <UserAltLight/> 10 +</div>
                     <div className='flex items-center justify-center gap-1' > <LocationIcon/> Greece </div>
                </div>} />
        <ImagecontainerTours category="400$" title="Canada" img="./tours/canada1.jpg" footer={<div className='flex gap-4  flex-nowrap items-center text-white'>
                     <div className='flex items-center justify-center gap-1' ><ClockIcon/> 6 Days</div>
                     <div className='flex items-center justify-center gap-1' > <UserAltLight/> 10 +</div>
                     <div className='flex items-center justify-center gap-1' > <LocationIcon/> Canada </div>
                </div>} />

    

   </div>
   </div>
      
       </section>
  )
}

export default PopularTours

 