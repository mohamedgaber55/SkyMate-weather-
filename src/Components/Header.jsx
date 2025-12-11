import { useContext, useState } from "react"
import { DataContext } from "../Context/ApiContext";
import { UnitContext } from "../Context/UnitContext";

export default function Header(){

    const {setCity} = useContext(DataContext)
    const [searchValue, setSearchValue] = useState('');;

    // unit context
    const {unit, setUnit} = useContext(UnitContext);


    const handleUnit = (unit) => {
        setUnit(unit)
    } 

    return(
        <div className="
        text-center
        bg-[#ffffff5f] 
        backdrop-blur-2xl 
        rounded-xl border
        border-[#e1e1e18f] 
        p-4
        flex
        justify-between
        flex-nowrap">

            <div className="
            text-center 
            bg-[#ffffff58] 
            rounded border 
            border-[#e1e1e18f]
            flex
            px-2
            py-1
            mr-2">
                <input 
                    type="search" 
                    placeholder="Enter City.." 
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => (e.key === 'Enter' && searchValue.trim()) && (setCity(searchValue), setSearchValue(''))}
                    value={searchValue}
                    className=" 
                    caret-cyan-50
                    outline-0
                    border-0
                    w-[135px]
                    md:w-auto
                    lg:w-auto
                    "
                />
                <button 
                    style={{opacity: !searchValue ? '.5' : '1'}}
                    disabled={!searchValue || searchValue.trim() === ""}
                    onClick={() => {setCity(searchValue); setSearchValue('')}}
                    className="pl-4 py-1"
                >
                    <i className="bi bi-binoculars 
                        bg-[#252525] 
                        text-[#ffff]
                        rounded
                        border 
                        border-[#c1c1c1c0]
                        py-1
                        px-2
                        cursor-pointer"
                    ></i>
                </button>
            </div>

            <div className="
            bg-[#ffffff5f] 
            backdrop-blur-2xl 
            rounded border
            border-[#e1e1e18f] 
            p-1
            flex
            justify-between
            w-[95px]">
    
                <button 
                    onClick={() => handleUnit('c')}
                    className="
                    text-center 
                    bg-[#252525] 
                    text-[#ffff]
                    border-[#c1c1c1c0]
                    rounded border 
                    px-3
                    cursor-pointer"
                    style={{opacity: unit === 'c' ? '1' : '.5'}}>°C</button>
    
                <button 
                    onClick={() => handleUnit('f')}
                    style={{opacity: unit === 'f' ? '1' : '.5'}}
                    className="
                    text-center 
                    bg-[#252525] 
                    text-[#ffff]
                    border-[#c1c1c1c0]
                    rounded border 
                    px-3
                    cursor-pointer">°F</button>
            </div>
        </div>
    )
}