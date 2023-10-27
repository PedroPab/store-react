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

  // prodcut detaild 
  const [productToShow, setProductToShow] = useState({})

  // shoping cart add product to cart
  const [cartProducts, setCartProducts] = useState([])


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}