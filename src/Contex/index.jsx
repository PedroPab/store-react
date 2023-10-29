import { createContext, useEffect, useState } from "react";

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

  // get products api
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // get products  bt title
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://api.escuelajs.co/api/v1'
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setItems(data)
      })

  }, [])

  const filteredItemsByTitle = (items, search) => {
    return items?.filter(item => {
      const titleItem = item.title.toLowerCase()
      const searchTitle = search.toLowerCase()
      return titleItem.includes(searchTitle)
    })
  }
  useEffect(() => {
    if (!searchByTitle) return
    const filter = filteredItemsByTitle(items, searchByTitle)
    setFilteredItems(filter)
  }, [searchByTitle, items])
  console.log(`filter:`, filteredItems);
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
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}