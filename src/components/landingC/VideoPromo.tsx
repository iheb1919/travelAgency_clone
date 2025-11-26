import { ClockIcon, LocationIcon } from '../../icons/icons'

const VideoPromo = () => {
  return (
     <section
          data-overlay-dark="3"
          className=" relative w-full overflow-hidden mb-[150px] max-h-[500px]"
        >
         <video width="100%" height="100%" autoPlay={true} muted={true} preload="auto" loop={true}>
            <source src="https://duruthemes.com/demo/html/travol/travel-video.mp4" type="video/mp4"/>
        </video>
        <div className=" videoPromoTitle absolute top-1/2 left-1/2 translate-[-50%] !text-white z-2">
                        <h1 className='!text-white text-center ' >Costa Victoria Cochin</h1>
                        <h4 className='!text-white flex justify-center gap-1 items-center text-lg font-bold ' > <LocationIcon className='text-xl' /> Maldives &nbsp;&nbsp; <ClockIcon className='text-xl' /> 4 Days + 3 Nights</h4>
                    </div>
        </section>
  )
}

export default VideoPromo