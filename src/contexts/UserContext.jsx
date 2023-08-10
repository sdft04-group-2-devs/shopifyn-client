import { createContext, useEffect, useState } from "react";




export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState([])
    // fetch user
    useEffect(() => {
        const fetchProducts = async () =>{
            const response = await fetch('http://localhost:3000/users')
            const data = await response.json()
            if (data) {
                setUser(data)
            } else {
                console.log('An error occured');
            }
            
        }
        fetchProducts()
    }, [])

    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider