import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { NavigationItem } from "./Navbar";
import { NavLink, useLocation } from "react-router";
import { ChevronDown } from "../../assets/svgAssets/SvgAssets";

type NavigationItemProps = {
  data: NavigationItem;
  setOpen:()=>void;
  level?:number
};

const NavLinkItem: React.FC<NavigationItemProps> = ({ data,setOpen,level=0 }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
const parentNav=useRef <HTMLLIElement> (null) 
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isActive = (item: NavigationItem): boolean => {
    if (item.url && location.pathname === item.url) {
      return true;
    }
    return item.children.some(isActive);
  };
  const activeClass = isActive(data) ? "text-primary " : "";
  const closeNav=()=>{
    setIsOpen(false)
    }
    /* 
  const sideresize = ()=>{
   
      document.documentElement.classList.remove("desktopView", "mobileView", "tabletView");
      if (window.innerWidth <= 768) {
        document.documentElement.classList.add("mobileView");
        

        closeNav()
      } else if (window.innerWidth <= 1000) {
        document.documentElement.classList.add("tabletView");
        closeNav()
       

      } else {
         document.documentElement.classList.add("desktopView");
        closeNav() 
       

       
      }
      setWindowWidth(window.innerWidth);
    }
/* useEffect(() => {
  const handleResize = () => {

   setWindowWidth(window.innerWidth);
    //sideresize()
  };
  window.addEventListener("resize", handleResize);
  
}, []);   */
useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



const closeAllNav = ()=>{
  setOpen()
  setIsOpen(!isOpen)
}
  return (
   <>
    <li
      ref={parentNav}
      className={` navTitle  relative font-normal  text-[16px] text-white cursor-pointer max-lg:flex-col flex lg:items-center  hover:!text-primary `}
      onMouseEnter={() => window.innerWidth > 1000 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth > 1000 && setIsOpen(false)}
    >
    
      {data.children.length === 0 ? (
        <NavLink onClick={() => {setIsOpen(!isOpen);setOpen()}} className={`flex  p-[12px_9px] items-center w-full h-full ${activeClass}`} to={data.url}>
          {data.label}
          {data.children.length > 0 && <ChevronDown className="h-3 w-3" />}
        </NavLink>
      ) : (
        <p onClick={(e) => {
          e.stopPropagation();
          window.innerWidth < 1000 && setIsOpen(!isOpen);
        }} className={`flex  p-[12px_9px] items-center w-full h-full ${activeClass}`}>
          {data.label}
          {data.children.length > 0 && <ChevronDown className="h-3 w-3" />}
        </p>
      )}

    
      {(data.children.length > 0  )&& (
           <SubList isOpen={isOpen} data={data} 
           setOpen={closeAllNav} windowWidth={windowWidth} 
           parentNav={parentNav} level={level}/>
      )}
    </li>
   </>
  );
};

export default NavLinkItem;

type SubListProps = {
  data: NavigationItem;
  isOpen:boolean;
  windowWidth: number;
  parentNav: React.RefObject<HTMLLIElement | null>;
  setOpen:(isOpen:boolean)=>void;
  level:number
};
export const SubList: React.FC<SubListProps> = ({isOpen,data,setOpen,windowWidth,parentNav,level}:any)=>{
  const [dropdownStyle, setDropdownStyle] = useState<any>({});
  const submenuRef = useRef<HTMLUListElement>(null);
const open = isOpen
  const updateDropdownPosition = useCallback(() => {
      if (!submenuRef.current) return;
      //if(!isOpen) return
      if (windowWidth < 1000){
        setDropdownStyle({marginLeft:"10px"})
        return
      }
      const rect = submenuRef.current.getBoundingClientRect();
      const parentRect=parentNav?.current?.getBoundingClientRect()
      const spaceLeft = window.innerWidth - (200+parentRect?.right);  
      const shouldOpenLeft = spaceLeft > 0;
      const newStyle: React.CSSProperties = {
        position: "absolute",
      };
   
  
      if (level === 0) {
        // First-level submenu
        newStyle.left = shouldOpenLeft ? "20%" : undefined;
        newStyle.right = shouldOpenLeft ? undefined : "100%";
      } else {
        // Deeper submenus
        newStyle.left = shouldOpenLeft ? "100%" : undefined;
        newStyle.right = shouldOpenLeft ? undefined : "100%";
        newStyle.top = "0";
      }
  
      setDropdownStyle(newStyle);
    }, []);
     useLayoutEffect(() => {
          updateDropdownPosition();
        window.addEventListener("scroll", updateDropdownPosition);
        window.addEventListener("resize", updateDropdownPosition);
        return () => {
          window.removeEventListener("scroll", updateDropdownPosition);
          window.removeEventListener("resize", updateDropdownPosition);
        };
      }, [ updateDropdownPosition,windowWidth]);
      useEffect(()=>{
        updateDropdownPosition()
      },[isOpen])
  return(
    <ul style={dropdownStyle}
          ref={submenuRef}
          className={` ${isOpen ? " show ":" noshow"} 
            submenu  duration-[3000] top-0 ${dropdownStyle} p-0 lg:py-3
            translationtest  max-sm:ml-4 max-md:!bg-transparent max-md:!text-black  
            lg:absolute bg-white lg:shadow-lg  w-[200px] text-gray-700`}
          >
          
          {data.children.map((child:NavigationItem, index:number) => (
            <NavLinkItem key={index} data={child}  setOpen={setOpen} level={level + 1} />
          ))}
        </ul>
  )
}