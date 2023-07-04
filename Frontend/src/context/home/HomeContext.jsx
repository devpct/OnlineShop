import { createContext , useState } from "react"

export const MenuBurgerContext = createContext()
export const ClosePageContext = createContext()
export const QtyMenuBurgerContext = createContext()
export const MenuIconChangeContext = createContext()
export const HomePageContext = createContext()
export const CartPageContext = createContext()
export const ProfilePageContext = createContext()
export const MessagesPageContext = createContext()
export const SettingsPageContext = createContext()
export const CustomerDataContext = createContext()
export const UsernameContext = createContext()
export const NumberGoodsContext = createContext()
export const CartProductsContext = createContext()
export const ProductsCartContext = createContext()



const HomeProvider = ({ children }) => {

    const [menuBurger, setMenuBurger] = useState()
    const [closePage, setClosePage] = useState()
    const [qtyMenuBurger, setQtyMenuBurger] = useState(0)
    const [menuIconChange, setMenuIconChange] = useState(false)
    const [homePage, setHomePage] = useState({display: 'block'})
    const [cartPage, setCartPage] = useState({display: 'none'})
    const [profilePage, setProfilePage] = useState({display: 'none'})
    const [messagesPage, setMessagesPage] = useState({display: 'none'})
    const [settingsPage, setSettingsPage] = useState({display: 'none'})
    const [customerData, setCustomerData] = useState({nameLastname : ''})
    const [numberGoods, setNumberGoods] = useState(0)
    const [cartProducts, setCartProducts] = useState('')
    const [productsCart , setProductsCart] = useState([])


    return(
        <MenuBurgerContext.Provider value={[menuBurger, setMenuBurger]}>
        <ClosePageContext.Provider value={[closePage, setClosePage]}>
        <QtyMenuBurgerContext.Provider value={[qtyMenuBurger, setQtyMenuBurger]}>
        <MenuIconChangeContext.Provider value={[menuIconChange, setMenuIconChange]}>
        <HomePageContext.Provider value={[homePage, setHomePage]}>
        <CartPageContext.Provider value={[cartPage, setCartPage]}>
        <ProfilePageContext.Provider value={[profilePage, setProfilePage]}>
        <MessagesPageContext.Provider value={[messagesPage, setMessagesPage]}>
        <SettingsPageContext.Provider value={[settingsPage, setSettingsPage]}>
        <CustomerDataContext.Provider value={[customerData, setCustomerData]}>
        <NumberGoodsContext.Provider value={[numberGoods, setNumberGoods]}>
        <CartProductsContext.Provider value={[cartProducts, setCartProducts]}>
        <ProductsCartContext.Provider value={[productsCart, setProductsCart]}>
            {children}
        </ProductsCartContext.Provider>
        </CartProductsContext.Provider>
        </NumberGoodsContext.Provider>
        </CustomerDataContext.Provider>
        </SettingsPageContext.Provider>
        </MessagesPageContext.Provider>
        </ProfilePageContext.Provider>
        </CartPageContext.Provider>
        </HomePageContext.Provider>
        </MenuIconChangeContext.Provider>
        </QtyMenuBurgerContext.Provider>
        </ClosePageContext.Provider>
        </MenuBurgerContext.Provider>
    )
}

export default HomeProvider

