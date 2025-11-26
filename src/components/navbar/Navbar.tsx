import { useEffect, useState } from "react";
import NavLinkItem from "./navLink";

export type NavigationItem = {
  label: string;
  url: string;
  children: NavigationItem[];
};

const navidation: NavigationItem[] = [
  { label: "Home", url: "", children: [
    { label: "Home Layout 1", url: "/home", children: [] },
    { label: "Home Layout 2", url: "/home2", children: [] },
    { label: "Home Layout 3", url: "/home3", children: [] },
    { label: "Home Layout 4", url: "/home4", children: [] },
  ] },
  { label: "About", url: "/about", children: [] },
  { label: "Tours", url: "", children: [
    { label: "Tours 1", url: "/tours1", children: [] },
    { label: "Tours 2", url: "/tours2", children: [] },
    { label: "Tours 3", url: "/tours3", children: [] },
  ] },
  { label: "Destinations", url: "/destinations", children: [] },
  { label: "Gallery", url: "/gallery", children: [] },
  { label: "Pages", url: "", children: [
    { label: "Tour Details", url: "/pages/details", children: [] },
    { label: "Tour Search", url: "/pages/search", children: [] },
    { label: "Post Single", url: "/pages/postsingle", children: [] },
    { label: "Other Pages", url: "/pages/other", children: [
      { label: "Coming Soon", url: "/pages/others/comming_soon", children: [] },
    { label: "404 Page", url: "/pages/others/notFound", children: [] },
    ] },
  ] },
  { label: "Blog", url: "", children: [
    { label: "Blog 01", url: "/blog/blog1", children: [] },
    { label: "Blog 02", url: "/blog/blog2", children: [] },
   
  ] },
  { label: "Contact", url: "/contact", children: [] },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  //const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayNav, setDisplayNav] = useState(false);
  const [scrolling, setScrolling] = useState(false); // Track scrolling

 useEffect(() => {
  const setDeviceClass = () => {
    document.documentElement.classList.remove("desktopView", "mobileView", "tabletView");

    if (window.matchMedia("(max-width: 768px)").matches) {
      document.documentElement.classList.add("mobileView");
    } else if (window.matchMedia("(max-width: 1000px)").matches) {
      document.documentElement.classList.add("tabletView");
    } else {
      document.documentElement.classList.add("desktopView");
    }
  };

  const handleResize = () => {
    setDisplayNav(window.innerWidth > 1000);
    setOpen(false);
    setDeviceClass();
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 100);
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);

  // 🔧 Delay initial execution slightly to allow layout to settle
  requestAnimationFrame(() => {
    setTimeout(() => {
      handleResize();  // includes setDeviceClass
      handleScroll();
    }, 50); // 50ms is usually enough
  });

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const closeResponsiveNav=()=>{
  if(document.documentElement.classList.contains("desktopView")) {return}
  
  setOpen(false);
  setDisplayNav(!displayNav);
}

  return (
    <nav
      className={`  absolute top-0   z-[100]  w-full 
      h-[90px] 
      px-[100px] max-lg:px-[50px] max-sm:px-[10px]
      ${scrolling ? " lg:fixed nav-scroll" : "bg-transparent lg:absolute "}
      `}
    >
    <div className="container mx-auto flex justify-between items-center border-b border-white/10  h-full">
  {scrolling ?  <img src="/logo-dark.png" alt="logoDark" width={140}  height={40}/>
   : <img src="/logo-light.png" alt="logoLight" width={140} height={40} />}


<div className="flex-1 float-end">
  <div
    onClick={() => {
      setOpen(!open);
      setDisplayNav(!displayNav);
    }}
    className={`ml-auto w-fit flex-col gap-1 burgerMenu hidden max-lg:flex 
    ${open && "open"}`}
  >
    <div className="w-7 h-1 bg-white  rounded-lg"></div>
    <div className="w-7 h-1 bg-white  rounded-lg"></div>
    <div className="w-7 h-1 bg-white  rounded-lg"></div>
  </div>

  <ul
    className={`ml-auto lg:w-fit flex gap-0 firstNav responsiveNav mainNav
    transition-all duration-300 ${!displayNav ? "h-0 overflow-hidden" : ""}
    ${open && "h-[90vh]"}`}
  >
    {navidation.map((nav, i) => (
      <NavLinkItem key={i} data={nav} setOpen={closeResponsiveNav}/>
    ))}
    
  </ul>

</div>
    </div>
    </nav>
  );
}

export default Navbar;
