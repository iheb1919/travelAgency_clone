import React from 'react'

import { PhoneCallSpeaker, MailCloseFill, LocationEmpty, Clock28Regular, BaselineCalendarMonth } from '../../icons/icons'
import AboutHeader from '../about/AboutHeader'
import PageFooter from '../pageFooter/PageFooter'

const ContactPage = () => {
  return (
    <div className='z-50' >

<AboutHeader 
          background='url(/slider/15.jpg)'
          title={
            <div className="w-full lg:w-1/2  mt-[90px]">
            <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > Get in touch
            </h6>
                       <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                       <h5 className={`uppercase`}>  Contact <span className='text-primary'>US</span>  </h5>
                       </div>
                    
            </div>
          }
          />
              <div className='!py-[90px] container mx-auto max-sm:px-5 gap-4 grid grid-cols-1 lg:grid-cols-2'>
              <ContactMethods/>
              <ContactPageForm/>
              <div className=' col-span-2   flex flex-col justify-center items-center'>
            <h1 className={` text-center text-[25px] leading-[1.25em] font-bold  mb-[15px]`}>Location</h1>
           
            <div className='w-full  rounded-xl overflow-hidden mx-auto' >
                <iframe width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tunis%20+(Car%20Rental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">drones ireland</a></iframe>
                </div>
          

        </div>
              </div>

           </div>
  )
}

export default ContactPage

export const ContactMethods = ()=>{
    const contacts :ContactCardProps[]= [
        {
            icon: MailCloseFill,
            title:"Email us",
            text:"info@info.com"
        },
        {
            icon: LocationEmpty,
            title:"Our adress",
            text:"Tunis,2020"
        },
        {
            icon: Clock28Regular,
            title:"Opening Hours",
            text:"Mon-Sun: 8 AM - 7 PM"
        },
        {
            icon: PhoneCallSpeaker,
            title:"Call us",
            text:"+21622222222"
        },

        
    ]
   
    return(
        <div className='  flex flex-col gap-5' >
            <h2 className='text-2xl   font-semibold xl text-[#0f2454] '> Get in Touch </h2>
<p>Travel duru nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
            {
                contacts.map((contact,i)=>(
                    <ContactCard key={i}
                    icon={contact.icon} 
                    title={contact.title} 
                    text={contact.text}                   />
                ))
            }
            
        </div>
    )
}

interface ContactCardProps {
    icon: any; // Expecting a React icon component
    title: string;
    text: string;
  }
export const ContactCard:React.FC<ContactCardProps> = ({icon : Icon,title,text})=>{
    return(
        <div className="flex w-fit  justify-center items-center text-[16px] gap-2 text">
             <div className=" flex justify-center items-center
               rounded-full w-12 h-12">
               <Icon className=" w-full h-full text-primary"/>
             </div>
             <div className="flex flex-col  ">
               <span className=" " > {title} </span>
               <span className=" text-primary " > {text} </span>
       
             </div>
       
           </div>
    )
}

export const ContactPageForm = ()=>{
    return(
        <div className=' '>
           

            <form action="" className='bg-[#f4f5f8] ' >
<h2 className='text-2xl text-center p-5 bg-primary font-semibold xl text-[#0f2454] '> Get in Touch </h2>
<div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-8'>
<label htmlFor='searchcar' className='group w-full relative    h-[70px]  overflow-hidden ' >
            <input type="text" id="searchcar" name="" placeholder='Name*'
              className='peer  outline-0 h-full w-full pl-5 pr-16  bg-white  text-black
               placeholder:text- ' />
          </label>
          <label htmlFor='searchcar' className='group w-full relative    h-[70px]  overflow-hidden ' >
            <input type="text" id="searchcar" name="" placeholder='Email*'
              className='peer  outline-0 h-full w-full pl-5 pr-16  bg-white  text-black
               placeholder:text- ' />
  
          </label>
          <label htmlFor='number' className='group w-full relative    h-[70px]  overflow-hidden ' >
            <input type="number" id="number" name="" placeholder='Number*'
              className='peer  outline-0 h-full w-full pl-5 pr-16  bg-white  text-black
               placeholder:text- ' />
  
          </label>


          <label htmlFor='subject' className='group w-full relative    h-[70px]  overflow-hidden ' >
            <input type="text" id="subject" name="" placeholder='Subject*'
              className='peer  outline-0 h-full w-full pl-5 pr-16  bg-white  text-black
               placeholder:text- ' />
  
          </label>


          <label htmlFor='searchcar' className='  w-full relative  md:col-span-2    overflow-hidden ' >
              <textarea  cols={30} rows={4} className='peer w-full outline-0  p-5  bg-white  text-black
               placeholder:text- ' placeholder='Message*' name="" id=""></textarea>
          </label>
          <div className="butn-dark  self-start  w-fit "> 
                                <button  className="block w-full cursor-pointer">
                                <span className='relative z-2 flex justify-center items-center gap-2' >
                                Send Message 
                                </span>
                                </button>
                            </div>

</div>
    </form>

        </div>
    )
}