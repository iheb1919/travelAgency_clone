import AboutHeader from '../about/AboutHeader'
import { Search, ChevronRight } from '../../icons/icons'
import { Link } from 'react-router'

const Blog2 = () => {
  return (
    <>
     <AboutHeader 
          background='url(/slider/15.jpg)'
          title={
            <div className="w-full lg:w-1/2 uppercase mt-[90px]">
            <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > Read travel blog </h6>
                       <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                       <h5 className={``}>  Travel 
                       <span className="text-primary" >Experience </span>  </h5>
                       </div>
            </div>
          }
          
          />
            <section>
            <div className='container mx-auto py-[90px] grid gap-y-7 grid-cols-1 lg:grid-cols-3' >
                <div className=' lg:col-span-2   flex flex-col gap-5 px-4'>
                
                <img src="/blog/22.jpg" alt="" />
                <h6 className={`text-primary text-[13px] font-[300] tracking-[6px] inline-block !mb-[0px] uppercase `} >Tour </h6>

                <h2 className='text-3xl font-semibold xl text-[#0f2454] border-b  border-[#e6eaf6] pb-4'> Most Popular Yacht Charter Route </h2>
                <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi risus conseua portito orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erate. Duis eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interan malesuada fames ac ante ipsum primis in faucibus. Integer tristique sem leo faucibus.</p>
                <div className="butn-dark  self-start  w-fit "> 
                                <Link to="/pages/postsingle"  className="block w-full cursor-pointer">
                                <span className='relative z-2 flex justify-center items-center gap-2' >
                               Read More 
                                </span>
                                </Link>
                            </div>
          
                    
                </div>
                <aside className=' flex flex-col gap-7 '>
                  <div className=' w-full p-6 text-sm font-poppins  flex justify-center items-center  bg-[#f4f5f8]
                                    ' >
                    <label htmlFor='searchcar' className='group w-full relative    h-[70px]  overflow-hidden ' >
                      <input type="text" id="searchcar" name="" placeholder='type Here...'
                        className='peer  outline-0 h-full w-full pl-5 pr-16  bg-white  text-black
                         placeholder:text- ' />
                     
                     
                      <Search className='  text-black  rounded-full absolute h-11 w-11 p-3 right-1.5 top-1/2 bottom-1/2 -translate-y-1/2
                                                       group-hover:rotate-90 transition-all duration-1000
                                                        group-hover:bg-primary peer-focus:bg-primary
                                                        peer-focus:rotate-90
                                                      ' />
                    </label>
                    
          
                  </div>
                 
                  {/* Recent Posts */}
                  <div className='bg-[#f4f5f8] w-full p-6 font-bold  flex flex-col gap-5'>
                      <h2 className='text-xl border-b  border-[#e6eaf6] pb-4'> Recent Posts </h2>
                      <div className='flex flex-col gap-2 max-h-[300px] overflow-auto'>
                          <div className='flex gap-4 font-light text-sm  text-black ' >
                            <div className='w-[90px] shrink-0  overflow-hidden'>
          
                            <img src="/blog/22.jpg" alt="" />
                            </div>
                            <p className='hover:text-primary cursor-pointer' >Most Popular Yacht Charter Routes</p>
                          </div>
                          <div className='flex gap-4 font-light text-sm  text-black ' >
                            <div className='w-[90px] shrink-0  overflow-hidden'>
          
                            <img src="/blog/33.jpg" alt="" />
                            </div>
                            <p className='hover:text-primary cursor-pointer' >Tips Towards a Flawless Honeymoon</p>
                          </div>
                          <div className='flex gap-4 font-light text-sm  text-black ' >
                            <div className='w-[90px] shrink-0  overflow-hidden'>
          
                            <img src="/blog/44.jpg" alt="" />
                            </div>
                            <p className='hover:text-primary cursor-pointer' >Family Adventure Tours for Teens & Kids</p>
                          </div>
                      </div>
                  </div>
                  {/* Archives */}
                  <div className='bg-[#f4f5f8] w-full p-6 font-bold  flex flex-col gap-5'>
                      <h2 className='text-xl text-[#0f2454] border-b  border-[#e6eaf6] pb-4'> Archives </h2>
                          
                          <div className='flex flex-col gap-4 font-light text-sm  text-[#676977] max-h-[200px] overflow-auto' >
                          <span className='hover:text-primary cursor-pointer py-1 text-[16px]' >Decembre 2025</span>
                          <span className='hover:text-primary cursor-pointer py-1 text-[16px]' >Novembre 2025</span>
                          <span className='hover:text-primary cursor-pointer py-1 text-[16px]' >October 2025</span>
                           
                          </div>
                          
                  </div>
                  {/* Categories */}
                  <div className='bg-[#f4f5f8] w-full p-6 font-bold  flex flex-col gap-5'>
                      <h2 className='text-xl border-b text-[#0f2454]   border-[#e6eaf6] pb-4'> Categories </h2>
                          
                          <div className='flex flex-col gap-4 font-light text-sm  text-[#676977] max-h-[200px] overflow-auto' >
                          <span className='hover:text-primary cursor-pointer flex py-1 text-[16px] items-center gap-2' ><ChevronRight/>  Travel</span>
                          <span className='hover:text-primary cursor-pointer flex py-1 text-[16px] items-center gap-2' ><ChevronRight/>Tours</span>
                          <span className='hover:text-primary cursor-pointer flex py-1 text-[16px] items-center gap-2' ><ChevronRight/>Destinations</span>
                           
                          </div>
                          
                  </div>
                  {/* Tags */}
                  <div className='bg-[#f4f5f8] w-full p-6 font-bold  flex flex-col gap-5'>
                      <h2 className='text-xl text-[#0f2454]  border-b  border-[#e6eaf6] pb-4'> Tags </h2>
                          
                          <div className='flex flex-wrap gap-4 font-light text-sm   max-h-[200px] overflow-auto' >
                          <span className='hover:bg-primary  hover:text-white bg-white   py-2  px-4  cursor-pointer' >Travel</span>
                          <span className='hover:bg-primary  hover:text-white bg-white   py-2  px-4  cursor-pointer' >Hotel</span>
                          <span className='hover:bg-primary  hover:text-white bg-white   py-2  px-4  cursor-pointer' >Tours</span>
                          <span className='hover:bg-primary  hover:text-white bg-white   py-2  px-4  cursor-pointer' >Destinations</span>
                          <span className='hover:bg-primary  hover:text-white bg-white   py-2  px-4  cursor-pointer' >Agency</span>
                          
                          </div>
                          
                  </div>

                </aside>
              </div>
            </section>
          
    </>
  )
}

export default Blog2