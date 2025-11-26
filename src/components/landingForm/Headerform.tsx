import  { useState } from 'react'
import { ArrowDropDownLine, Search } from '../../icons/icons'
import SelectList from '../list/SelectList'
    export const destinations= [
        {
            id:1,
            name:"greece"
        },
        {
            id:2,
            name:"london"
        },
        {
            id:3,
            name:"maldives"
        },
        {
            id:4,
            name:"paris"
        },
        {
            id:5,
            name:"rome"
        }
    ]
    export const duration= [
        {
            id:1,
            name:"1 Day Tour"
        },
        {
            id:2,
            name:"2-4 Days Tour"
        },
        {
            id:3,
            name:"5-7 Days Tour"
        },
        {
            id:4,
            name:"7+ Days Tour"
        }
    ]
 const Headerform = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    return (
        <div className="w-full z-3 relative msy-5 psx-5 bg-light_gray lg:bg-transparent lg:absolute lg:bottom-[12%] ">
            <div className="container mx-auto ">
            <div className="tour-inner">
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-gray-400 ">
            <form action="" className='contents'>
                <div className='  h-[60px]  '>
                    <input type="text" className="!outline-none w-full h-full px-5 placeholder:text-text_color" placeholder="Where to ?" name="" id="" />
                </div>
                <SelectList
                data={destinations}
                openDropdownId={openDropdownId}
                setOpenDropdownId={setOpenDropdownId}
                id="dropdown1"
                text="Destinations"
                icon={<ArrowDropDownLine className='text-primary text-[12px]' />}
                selected={selectedDestination}
                onChange={(val) => setSelectedDestination(val)}
                />
                <SelectList
                data={duration}
                openDropdownId={openDropdownId}
                setOpenDropdownId={setOpenDropdownId}
                id="dropdown2"
                text="Duration"
                icon={<ArrowDropDownLine className='text-primary text-[12px]' />}
                selected={selectedDuration}
                onChange={(val) => setSelectedDuration(val)}
                />
                <button type='submit' className= {`flex shrink-0 w-full justify-center items-center h-full
                cursor-pointer transition-all  hover:border-darkBlue hover:text-white
                    hover:bg-darkBlue 
                    bg-[var(--primary)] text-black text-[16px] 
                    font-light px-5 py-2 border 
                    border-[var(--primary)]`} >
                        <Search  className=' mr-2'/>
                    Find Now
                </button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Headerform