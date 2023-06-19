import { createContext , useState , useRef } from "react"

export const MenuBurgerContext = createContext()
export const ClosePageContext = createContext()
export const QtyMenuBurgerContext = createContext()
export const MenuIconChangeContext = createContext()


const HomeProvider = ({ children }) => {

    const [menuBurger, setMenuBurger] = useState()
    const [closePage, setClosePage] = useState()
    const [qtyMenuBurger, setQtyMenuBurger] = useState(0)
    const [menuIconChange, setMenuIconChange] = useState(false)

    return(
        <MenuBurgerContext.Provider value={[menuBurger, setMenuBurger]}>
        <ClosePageContext.Provider value={[closePage, setClosePage]}>
        <QtyMenuBurgerContext.Provider value={[qtyMenuBurger, setQtyMenuBurger]}>
        <MenuIconChangeContext.Provider value={[menuIconChange, setMenuIconChange]}>
            {children}
        </MenuIconChangeContext.Provider>
        </QtyMenuBurgerContext.Provider>
        </ClosePageContext.Provider>
        </MenuBurgerContext.Provider>
    )
}

export default HomeProvider

