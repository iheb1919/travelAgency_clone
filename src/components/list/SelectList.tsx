import { useState, useRef, useLayoutEffect, useCallback, useEffect } from "react";

function useOutsideClick(
  refs: React.RefObject<HTMLDivElement | null>[],
  onOutsideClick: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      );
      if (isOutside) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, onOutsideClick]);
}


type SelectListProps = {
  data:any[];
  text: any;
  icon: any;
  styles?: any;
  classs?: string;
  id: string; 
  openDropdownId: string | null;
  setOpenDropdownId: (id: string | null) => void; 
  selected?: any; // <- selected item
  onChange?: (value: any) => void; // <- callback
};

const SelectList: React.FC<SelectListProps> = ({
  data,
  text,
  icon,
  styles,
  classs,
  id,
  openDropdownId,
  setOpenDropdownId,
  selected,
  onChange,
}) => {
  const [dropdownStyle, setDropdownStyle] = useState<any>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const updateDropdownPosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const shouldOpenDown = spaceBelow >= 350;
    setDropdownStyle({
      position: "absolute",
      top: shouldOpenDown ? rect.height + 0 : undefined,
      bottom: shouldOpenDown ? undefined : rect.height + 0,
      left: 0,
      width: rect.width,
      zIndex: 21,
    });
  }, []);
  useLayoutEffect(() => {
    if (openDropdownId === id) {
      updateDropdownPosition();
    }

    window.addEventListener("scroll", updateDropdownPosition);
    window.addEventListener("resize", updateDropdownPosition);

    return () => {
      window.removeEventListener("scroll", updateDropdownPosition);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [openDropdownId, id, updateDropdownPosition]);


  useOutsideClick([buttonRef, dropdownRef], () => {

    if (openDropdownId === id) {
      setOpenDropdownId(null); 
    }
  }); 

  const handleClick = () => {
    if (openDropdownId === id) {
      setOpenDropdownId(null); 
    } else {
      setOpenDropdownId(id);
    }
  };
  const handleItemClick = (item: any) => {
    onChange?.(item); // call onChange with selected item
    setOpenDropdownId(null); // close dropdown
  };
  return (
    <div className="relative" ref={buttonRef} style={styles}>
      <div onClick={()=>{  handleClick()}} className={`h-[60px] relative ${classs}`}>
        <div className="flex text-[16px] font-light justify-between items-center h-full w-full px-5">
          <span>{selected?.name || text}</span> {icon}
        </div>
      </div>

      {openDropdownId === id && (
       
    
          <div
            ref={dropdownRef}
            style={dropdownStyle}
            className={`cursor-pointer absolute z-[22] bg-white no-transition  divide-y divide-[#f4f5f8] max-h-[350px] overflow-y-auto`}
          >
            {data.map((list, i) => (
              <div
              key={list.id}
              onClick={() => handleItemClick(list)}
              className={`py-3 px-5 text-center hover:bg-primary hover:text-white ${
                selected?.id === list.id ? "bg-primary text-white" : ""
              }`}
            >
              {list.name}
            </div>
            ))}
          </div>
        
      )}
    </div>
  );
};

export default SelectList;
