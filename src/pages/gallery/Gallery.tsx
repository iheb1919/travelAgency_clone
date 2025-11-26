import AboutHeader from '../about/AboutHeader'

import ImageGallery from '../../components/gallery/GallerySection'
import VideoGallery from '../../components/gallery/VideoGallery'

const Gallery = () => {
  return (
    <>
    <AboutHeader 
      background='url(/slider/2.jpg)'
      title={
        <div className="w-full lg:w-1/2 uppercase mt-[90px]">
            <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > Images and Videos </h6>
            <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                <h5 className={``}>  Image <span className="text-primary" >& </span>  Video  <span className="text-primary" >Gallery </span>  </h5>
            </div>
        </div>}
      
      />
        <div className="container  my-[90px]  mx-auto ">
            <ImageGallery/>
            <VideoGallery/>
        </div>
      
     
   </>
  )
}

export default Gallery

