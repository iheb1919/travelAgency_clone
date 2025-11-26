import { useEffect, useState } from "react"
import { PlayLineDuotone } from "../../icons/icons"

const VideoGallery = () => {
  return (
    <section className='my-[90px] '>
    <div className='container mx-auto'>
    <div className='flex flex-col gap-4 mb-7'>
        <div>
             <h4> Videos</h4>
             <h1 className="">Video <span>Gallery</span>  </h1>
        </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-6 gap-4' >
    <div className=' overflow-hidden relative md:col-span-3' >
    <VideoProject  image="./slider/15.jpg" url="https://www.youtube.com/embed/ODJgp1ITowg?autoplay=1" />
         </div>

         <div className=' overflow-hidden relative md:col-span-3   ' >
         <VideoProject  image="./slider/17.jpg" url="https://www.youtube.com/embed/ODJgp1ITowg?autoplay=1" />
         </div>

    <div className=' overflow-hidden relative md:col-span-2' >
    <VideoProject  image="./slider/2.jpg" url="https://www.youtube.com/embed/ODJgp1ITowg?autoplay=1" />
         </div>

         <div className=' overflow-hidden relative md:col-span-2   ' >
         <VideoProject  image="./slider/11.jpg" url="https://www.youtube.com/embed/ODJgp1ITowg?autoplay=1" />
         </div>

         <div className=' overflow-hidden relative md:col-span-2   ' >
         <VideoProject  image="./slider/1.jpg" url="https://www.youtube.com/embed/ODJgp1ITowg?autoplay=1" />
         </div>

        
    
         
      
      
      
     
      
         
        
        
 
     
 
    </div>
    </div>
       
        </section>
  )
}

export default VideoGallery

interface videoProjectPropsTypes{
    image:string,
    url:string
}

export const VideoProject:React.FC<videoProjectPropsTypes>=({image,url})=>{
    const [open,setOpen]=useState(false)
    return(
        <>
        <div className=' overflow-hidden relative md:col-span-2   ' >
        <img className='hover:scale-105 transition-all duration-500' src={image} alt="" />
        <button onClick={()=>setOpen(true)} className="absolute cursor-pointer flex justify-center items-center text-white hover:bg-white hover:text-primary  w-[60px] h-[60px]  rounded-full border border-white bottom-5 right-10 ">
               <PlayLineDuotone/>
        </button>
        </div>
        {
        open && 
        <YoutubePromo setOpen={setOpen}  url={url} />
    }
        </>
    )
}
type youtubePromoProps= {
    setOpen:any,
    url:string
}
const YoutubePromo:React.FC<youtubePromoProps> = ({ setOpen,url }) => {
    useEffect(() => {
      const youtubePromo = document.getElementById("modal-open");
      
      if (youtubePromo) {
        setTimeout(() => {
          youtubePromo.classList.add("modal-open");
        }, 100);
      }
  
      
    }, []);
    const leaveCarPromo = ()=>{
        const youtubePromo = document.getElementById("modal-open");
        if (youtubePromo) {
          youtubePromo.classList.remove("modal-open");
        }
       setTimeout(() => {
          setOpen(false)
        }, 500);  
    }
    return (
      <div
       
        id="modal-open"
        className="flex justify-center items-center transition-opacity duration-[.5s] opacity-0 fixed w-screen h-screen bg-black/80 z-[101] top-0 left-0">
          <div className="max-w-[750px] max-md:px-7 h-full w-full  flex justify-center flex-col">
              <span  onClick={() => leaveCarPromo()} 
              className=" cursor-pointer ml-auto w-fit mb-2">X</span>
              <iframe className='h-full w-full max-h-[480px] max-md:max-h-[220px]' src={url} allowFullScreen={true}></iframe>
              </div>
          </div>
    );
  };
  