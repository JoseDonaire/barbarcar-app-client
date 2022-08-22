import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";


const AuthContext = createContext()

function AuthWrapper (props){
    const [isUserActive,setIsUserActive]=useState(false)
    const [user,setUser]=useState(null)
    
    useEffect(()=>{
        authenticateUser()
    },[])

    const authenticateUser = async ()=>{
        try {
            const response = await verifyService()
            console.log(response.data)
            setIsUserActive(true)
            setUser(response.data)

        } catch (error) {
            setIsUserActive(false)
            setUser(null)
        }
        
    }
    const passedContext = {
        isUserActive,
        user,
        authenticateUser
    }
    return(
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>

    )

}

export{
    AuthContext,
    AuthWrapper
}