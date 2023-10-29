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

  // get products  bt category
  const [searchCategory, setSearchCategory] = useState(null)

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
  const filteredItemsByCategory = (items, category) => {
    return items?.filter(item => {

      const categoryItem = item.category.name.toLowerCase()
      const searchCategory = category.toLowerCase()
      return categoryItem.includes(searchCategory)
    })
  }

  const filterItems = (use, { items, searchByTitle, searchCategory }) => {
    if (use == `TITLE`) {
      const filter = filteredItemsByTitle(items, searchByTitle)
      setFilteredItems(filter)
    }
    if (use === `CATEGORY`) {
      const filter = filteredItemsByCategory(items, searchCategory)
      setFilteredItems(filter)
    }
    if (use === `FULL`) {
      let filter = filteredItemsByTitle(items, searchByTitle)
      filter = filteredItemsByCategory(filter, searchCategory)
      setFilteredItems(filter)
    }

  }
  useEffect(() => {
    if (!searchByTitle && !searchCategory) return

    if (searchByTitle && !searchCategory) {
      filterItems(`TITLE`, { items, searchByTitle })
    }

    if (searchCategory && !searchByTitle) {
      filterItems(`CATEGORY`, { items, searchCategory })
    }

    if (searchCategory && searchByTitle) {
      filterItems(`FULL`, { items, searchByTitle, searchCategory })
    }

  }, [searchByTitle, searchCategory, items])

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
        searchCategory,
        setSearchCategory,
        filteredItems,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}