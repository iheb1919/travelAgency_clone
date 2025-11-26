import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Search, ArrowLeft } from '../../icons/icons'

const CommingSoon = () => {
  return (
    <div data-ovesrlay-dark="3" 
    className='w- flex justify-center items-center   h-screen bg-cover bg-no-repeat' 
    style={{
      background:"rgba(15, 36, 84,.4)",
      backgroundBlendMode:"overlay",
      backgroundImage:"url('/slider/8.jpg')",
      backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
  }}>
  <div className='container mx-auto  z-2 relative'>
  <div className=' px-5 !my-aut w-full   ' >
  
<h2  className='w-full text-center !font-semibold !text-[3rem] text-white uppercase'>Coming Soon!</h2>  
<CountDown/>
<div className='w-full md:w-1/2 md:ml-[25%]'>
<p className='text-white text-center w-full mb-5' >
Sign up for our latest blog & articles.
</p> 
<form action="" className='relative '>
<input type="text" placeholder='Email Adress' name="" id="" className='outline-0 placeholder:text-xl text-xl pl-5 placeholder:text-white text-white border border-primary h-12 w-full ' />
<button type='submit' className='cursor-pointer bg-primary hover:bg-darkBlue px-5 text-white absolute right-1 top-1 bottom-1 flex justify-center items-center gap-2 '  >   Subscribe</button>
</form>
<Link to='/home' 
className='hover:text-primary hover:gap-7 transition-[gap] text-white mt-5 flex justify-center items-center gap-2'> 
<ArrowLeft className='text-white'/> Back To Home </Link>
</div>
  </div>
  </div>
  </div>
  )
}

export default CommingSoon


const getTimeLeft = (targetDate: Date) => {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  

  return {  total, days, hours, minutes,  seconds };
};

export const CountDown = () => {
  const oneYearFromNow = new Date('2026-01-31T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(oneYearFromNow));

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeLeft(oneYearFromNow);
      setTimeLeft(updated);
      if (updated.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 font-poppins'>
      <TimeBox label='days' value={timeLeft.days} />
      <TimeBox label='hours' value={timeLeft.hours} />
      <TimeBox label='minutes' value={timeLeft.minutes} />
      <TimeBox label='seconds' value={timeLeft.seconds} />
    </div>
  );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <div className='p-[30px_15px] text-white border border-white/20 w-full md:w-[80%] mx-auto flex flex-col gap-4 justify-between items-center'>
    <span className='font-bold text-5xl'>{String(value).padStart(2, '0')}</span>
    <span className='uppercase'>{label}</span>
  </div>
);