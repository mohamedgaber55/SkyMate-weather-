import { useState } from "react"
import { UnitContext } from "./UnitContext"

export default function UnitProvider({children}){
    const [unit, setUnit] = useState('c');
    return(
        <UnitContext.Provider value={{unit, setUnit}}>{children}</UnitContext.Provider>
    )
}