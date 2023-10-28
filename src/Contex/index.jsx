import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  //contador del carrito 
  const [count, setCount] = useState(0)

  // product detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // product checkout open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


  // prodcut detaild 
  const [productToShow, setProductToShow] = useState({})

  // shoping cart add product to cart
  const [cartProducts, setCartProducts] = useState([])

  // shoping cart products
  const [order, setOrder] = useState([])



  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        order,
        setOrder,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}