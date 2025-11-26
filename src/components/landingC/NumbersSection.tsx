import {
  AirplaneIcon,
  FerryBoatIcon,
  HouseIcon,
  TicketIcon,
} from "../../icons/icons";

const NumbersSection = () => {
  return (
    <section
      data-overlay-dark="7"
      className="fixedImg fixedCarPromo relative flex items-center mb-[150px] "
    >
      <div className="relative text-white px-5 container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 z-2">
        <div className=" text-center group  cursor-pointer">
          <div className="icon  group-hover:!border-white">
           <div className="w-full h-full relative overflow-hidden ">
             <AirplaneIcon className="text-white/80 transition duration-[.5s] group-hover:translate-x-[120%] group-hover:text-white"/> 
            <AirplaneIcon className="text-primary !bg-white translate-x-[-120%] transition duration-[.5s]  group-hover:block group-hover:translate-x-[0%] "/>
           </div>
          </div>
          <h3 className="count font-semibold mb-2.5 text-4xl  ">600</h3>
          <h6 className="text-lg font-semibold">Flight Booking</h6>
        </div>
       <div className=" text-center group cursor-pointer">
  <div className="icon group-hover:!border-white">
    <div className="w-full h-full relative overflow-hidden">
      <HouseIcon className="text-white/80 transition duration-[.5s] group-hover:translate-y-[-120%] group-hover:text-white"/>
      <HouseIcon className="text-primary !bg-white translate-y-[120%] transition duration-[.5s] group-hover:translate-y-[0%]"/>
    </div>
  </div>
  <h3 className="count font-semibold mb-2.5 text-4xl">600</h3>
  <h6 className="text-lg font-semibold">Amazing Tour</h6>
</div>

<div className=" text-center group cursor-pointer">
  <div className="icon group-hover:!border-white">
    <div className="w-full h-full relative overflow-hidden">
      <FerryBoatIcon className="text-white/80 transition duration-[.5s] group-hover:translate-x-[120%] group-hover:text-white"/>
      <FerryBoatIcon className="text-primary !bg-white translate-x-[-120%] transition duration-[.5s] group-hover:translate-x-[0%]"/>
    </div>
  </div>
  <h3 className="count font-semibold mb-2.5 text-4xl">600</h3>
  <h6 className="text-lg font-semibold">Cruises Booking</h6>
</div>

<div className=" text-center group cursor-pointer">
  <div className="icon group-hover:!border-white">
    <div className="w-full h-full relative overflow-hidden">
      <TicketIcon className="text-white/80 transition duration-[.5s] group-hover:scale-125 group-hover:opacity-0"/>
      <TicketIcon className="text-primary !bg-white scale-10 opacity-0 transition duration-[.5s] group-hover:scale-100 group-hover:opacity-100"/>
    </div>
  </div>
  <h3 className="count font-semibold mb-2.5 text-4xl">600</h3>
  <h6 className="text-lg font-semibold">Ticket Booking</h6>
</div>

      </div>
    </section>
  );
};

export default NumbersSection;
