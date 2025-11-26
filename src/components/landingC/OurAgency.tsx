import React from 'react'
import { PhoneCallSpeaker } from '../../icons/icons'

const OurAgency = () => {
  return (
    <section className=' '>
<div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
<div className='flex flex-col gap-4'>
    <div>
    <h4> The best travel agency </h4>
 <h1 className="">Discover the  <span>world</span> with our guide </h1>

    </div>
    <div className="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi deserunt earum consequuntur similique eligendi. Nesciunt fuga commodi ipsum quod recusandae deleniti labore reprehenderit, eveniet ex porro temporibus repellendus at.
        Explicabo vel, earum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempora animi cupiditate! Odio, , adipisci veniam dicta porro ullam nihil. Porro, unde?</p>
    </div>
    <ul>
        <li className='flex items-center gap-2 mb-4'>
            <div className='w-5 h-5 rounded-full bg-primary' ></div>
            <span>20 Years of Experience</span>
        </li>
        <li className='flex items-center gap-2 mb-4'>
            <div className='w-5 h-5 rounded-full bg-primary' ></div>
            <span>150+ Tour DEstinations</span>

        </li>
    </ul>
    <div className="flex w-fit ml-4 justify-center items-center text-[16px] gap-2 text">
      <div className=" flex justify-center items-center
        rounded-full w-12 h-12">
        <PhoneCallSpeaker className=" w-full h-full text-primary"/>
      </div>
      <div className="flex flex-col  ">
        <span className=" " >For information</span>
        <span className=" text-primary " >855 100 4444</span>

      </div>

    </div>
</div>
    <div className="ml-auto  w-full md:w-[80%]">
        <div>
        <div className='   relative'>
            <div className='p-[0_30px_30px_15px] relative img '>
                <img
                    className="w-full  z-0 transition-[scale] duration-500  hover:scale-95"
                    src="./about.jpeg"
                    alt=""
                />
            </div>
            {/* <span className='about absolute bg-rsed-500 animate-spin !duration-[5s] w-[200px] h-[200px]  '>
           
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                <defs>
                                    <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path>
                                </defs>
                                <circle cx="150" cy="100" r="75" fill="none"></circle>
                                <g>
                                    <use xlinkHref="#circlePath" fill="none"></use>
                                    <text fill="#0f2454">
                                        <textPath xlinkHref="#circlePath"> . travel agency . travel agency </textPath>
                                    </text>
                                </g>
                            </svg>
            </span> */}
        </div>
        </div>
    </div>
</div>
    </section>
  )
}

export default OurAgency