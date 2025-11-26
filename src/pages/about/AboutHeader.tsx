import { ReactElement } from "react"

type AboutHeaderProps = {
    position?:string, background?:string,title:ReactElement
  }
  const AboutHeader:React.FC<AboutHeaderProps> = ({background="url(/slider/15.jpg)",title,position}) => {
    return (
      <div style={
          {backgroundImage:background}
      }
      data-overlay-dark="5"
      className='py-[120px]    image-container bg-cover bg-center bg-img'
      >
          
      <div className="z-2 relative w-full">
      <div className={` mx-auto  container ${position === "center" && "items-center"}  px-7 flex text-white justify-center flex-col `}>
                   {title}
               </div>
      </div>
          
          </div>
    )
  }
  
  export default AboutHeader