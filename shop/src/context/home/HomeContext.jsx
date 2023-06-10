import { createContext , useState } from "react"

export const CustomerContext = createContext()

const HomeProvider = ({ children }) => {
    const [customer, setCustomer] = useState()

    return(
        <CustomerContext.Provider value={[customer, setCustomer]}>
            {children}
        </CustomerContext.Provider>
    )
}

export default HomeProvider

