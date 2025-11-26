import { ReactElement } from "react"
type ImagecontainerToursProps= {
    title:string ,
    footer:ReactElement ,
    img:string ,
    category:string }
const ImagecontainerTours:React.FC<ImagecontainerToursProps> = ({title,footer,img,category})=>{
    return(
        <div className='relative imageContainerTours group overflow-hidden' >
            <span className="category "> {category} </span>
             <img className='group-hover:brightness-70 transition-all duration-500' src={img} alt="" />
             <div className='transition-all p-5 body
             group-hover:bg-[linear-gradient(to_bottom,transparent_0,rgba(15,36,84,0.01)_2%,rgba(15,36,84,0.75)_90%)]
             flex flex-col gap-3 duration-500 absolute 
             -bottom-11 group-hover:bottom-0 
             left-0 px-6 w-full  '>
                <h5 className='text-white text-2xl   font-[600]'> {title} Tour</h5>
                <div className='h-[1px]  transition-w duration-500  w-[15%] bg-white group-hover:w-full '></div>
                {footer}
             </div>
             </div>
    )
}
 export default ImagecontainerTours