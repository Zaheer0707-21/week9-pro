import { createContext, useState } from "react"

const Arrcontext=createContext()

    const Context=(data)=>{
        const [favourite,setfavourite]=useState([])
      
        const [ArrActivity,setArrActivity]=useState(["Ansar","Mahin","Sadaf","Rayee","Saifu"])
        return(<>
        <Arrcontext.Provider value={{ArrActivity,favourite,setfavourite}}>
            {data.children}
        </Arrcontext.Provider>
        </>)
    }

    export default Context
    export {Arrcontext}