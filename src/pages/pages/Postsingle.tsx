import { BaselineCalendarMonth, ChevronRight, Reply, Search } from '../../icons/icons';
import AboutHeader from '../about/AboutHeader';

const Postsingle = () => {

  return (
   <>
   <AboutHeader 
          background='url(/slider/15.jpg)'
          title={
            <div className="w-full lg:w-1/2  mt-[90px]">
            <h6 className={`text-white text-[13px] font-[300] tracking-[6px] inline-block mb-[15px] uppercase `} > <span className='text-primary'>Blog</span> / Post Page            </h6>
                       <div className={`w-fit flex justify-center items-center text-[42px] leading-[1.25em] font-bold  mb-[15px]  `}>
                       <h5 className={`uppercase`}>  Most Popular Yacht Charter Routes </h5>
                       </div>
                       <div className='flex z-5  w-fit justify-center items-center gap-2 text-white text-[13px] font-[300]  '>
                        <img className='w-12 h-12' src="/team/06.png" alt="" />  Emma Emily
                        <BaselineCalendarMonth className='text-xl ml-3'/> 30 Dec 2025
                       </div>
            </div>
          }
          />
  <section>
  <div className='container mx-auto py-[90px] grid gap-y-7 grid-cols-1 lg:grid-cols-3' >
      <div className=' lg:col-span-2   flex flex-col gap-5 px-4'>
      
      <img src="/blog/22.jpg" alt="" />
      <h2 className='text-3xl font-semibold xl text-[#0f2454] border-b  border-[#e6eaf6] pb-4'> Most Popular Yacht Charter Route </h2>
      <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi risus conseua portito orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erate. Duis eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interan malesuada fames ac ante ipsum primis in faucibus. Integer tristique sem leo faucibus.</p>
      <p>Nulla vitae metus tincidunt, varius nunc quis, porta nulla. Pellentesque vel dui nec libero auctor pretium sed arcu. Nunc consequat diam id nisl blani dinisim. Etiam commodo diam dolor, at scelerisque sem finibus sit amet. Curabitur id lectus eget purus finibus laoreet.</p>
      <div className='bg-[#f4f5f8] p-8 mb-8'>
<p>Nulla facilisi. Sedeuter nunc vouta miss mollis sapien vel, conseyer tureution yer vintane in libero semper. Quisque ravida eros ut turpis interdum ornare. Inter miss they adama seder a imerdie fames ac ante ipsum primis in faucibus.</p>
<div className='text-primary flex gap-2 jus'>
  <div className=' self-center mt-2 w-10 h-[1px] bg-primary'></div>
<cite>Micheal Martin</cite>
</div>
      </div>
<p>Design pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      <h2 className='text-2xl font-semibold xl text-[#0f2454] border-b  border-[#e6eaf6] pb-4'> Comments </h2>

          {
            commentsData.map((comment,i)=>{
              return(
                <div className='' >
                  <Comment data={comment} />
                </div>
              )
            })
          }
          <LeaveComment/>
      </div>
      <div className=' flex flex-col gap-7 '>
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
      </div>
    </div>
  </section>
   </>
  )
}

export default Postsingle


export const Comment = ({ data, level = 0 }: { data: Comment; level?: number }) => {
  return (
    <div style={{ marginLeft: level * 50 }} className=' relative'>
      <div className='flex gap-9 mb-10'>
        <div className='absolute flex justify-center items-center right-4 top-4 cursor-pointer hover:text-primary'>
          <Reply /> Reply
        </div>
        <img className='rounded-full w-[90px] h-[90px]' src={data.img} alt='' />
        <div className='flex flex-col gap-1'>
          <span className='font-bold text-lg'>{data.name}</span>
          <span className='text-[#999] text-xs font-light'>{data.date}</span>
          <p className='mt-5 text-sm font-light text-[#555] leading-8'>{data.text}</p>
        </div>
      </div>
      {data.reply?.map((reply, i) => (
        <Comment key={i} data={reply} level={level + 1} />
      ))}
    </div>
  );
};


type Comment = {
  img: string;
  name: string;
  date: string;
  text: string;
  reply: Comment[]; // Recursive type
};

const commentsData: Comment[] = [
  {
    img: "/team/06.png",
    name: "Olivia Brown",
    date: "29 Dec 2025",
    text: "Lorem ultricies nibh non dolor maximus sceleue inte drana on molisen faubs neque nec tincidunte aliquam eraten volume id lectus fermen finibus in the miss rana duru fermen soreen.",
    reply: [
      {
        img: "/team/04.png",
        name: "Daniel Brown",
        date: "Dec 29, 2025",
        text: "Quisque volutpat non nisl id tincidunt. Praesent at eros vitae dune pulvinar ornare. Morbi mollis a enim nec ullamcorper. Proin cone dimentum ut mauris ut placera mollis nec.",
        reply: [
          {
            img: "/team/04.png",
            name: "Daniel Brown",
            date: "Dec 29, 2025",
            text: "Quisque volutpat non nisl id tincidunt. Praesent at eros vitae dune pulvinar ornare. Morbi mollis a enim nec ullamcorper. Proin cone dimentum ut mauris ut placera mollis nec.",
            reply: []
          },
        ]
      },
      {
        img: "/team/05.png",
        name: "Jesica Dann",
        date: "Dec 30, 2025",
        text: "Quisque volutpat non nisl id tincidunt. Praesent at eros vitae dui pulvinar ornare. Morbi mollis a enim nec ullamcorper. Proin condimentum ut mauris ut placerat. Donec commodo diam lorem, commodo viverra metus mollis nec.",
        reply: []
      }
    ]
  }
];


export const LeaveComment = ()=>{
  return(
    <form action="" className='bg-[#f4f5f8] p-8' >
<h2 className='text-2xl font-semibold xl text-[#0f2454] '> Comments </h2>
<p>Your email address will not be published. Required fields are marked *</p>
<div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
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
          <label htmlFor='searchcar' className='  w-full relative  md:col-span-2    overflow-hidden ' >
              <textarea  cols={30} rows={4} className='peer w-full outline-0  p-5  bg-white  text-black
               placeholder:text- ' placeholder='Comment*' name="" id=""></textarea>
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
  )
}