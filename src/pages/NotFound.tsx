import { ArrowLeft, Search } from '../icons/icons'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div data-overlay-dark="3" className='w- flex justify-center items-center   h-screen bg-cover bg-no-repeat' style={{
        backgroundImage:"url('/slider/8.jpg')",
        backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
    }}>
    <div className='container mx-auto  z-2 relative'>
    <div className=' px-5 !my-aut w-full   ' >
    <h1 className='w-full text-center !text-[10rem]
    
     !font-semibold
    '>404</h1>  
<h2  className='w-full text-center !font-semibold !text-[3rem] text-white '>Not Found 404</h2>  
<div className='w-full md:w-1/2 md:ml-[25%]'>
<p className='text-white text-center w-full mb-5' >
The page you are looking for was moved, removed, renamed or never existed.
</p> 
<form action="" className='relative '>
<input type="text" placeholder='Search' name="" id="" className='outline-0 placeholder:text-xl text-xl pl-5 placeholder:text-white text-white border border-primary h-12 w-full ' />
<button type='submit' className='cursor-pointer bg-primary hover:bg-darkBlue px-5 text-white absolute right-1 top-1 bottom-1 flex justify-center items-center gap-2 '  > <Search/>  Search</button>
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

export default NotFound