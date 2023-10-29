import { useContext } from 'react'
import Layoud from './../../components/Layout'
import Card from './../../components/Card'
import ProductDetail from './../../components/ProductDetail'
import { ShoppingCartContext } from "./../../Contex"

function Home() {
  const contex = useContext(ShoppingCartContext)
  const items = contex.items

  const currentPath = window.location.pathname
  const categoryActive = currentPath.split('/')[currentPath.split('/').length - 2]
  let index = currentPath.substring(currentPath.lastIndexOf(`/`) + 1)
  if (categoryActive == 'category') {
    if (index) {
      //filtramos los productos por al categoria
      contex.setSearchCategory(index)
    } else {
      contex.setSearchCategory(null)
    }
  } else {
    contex.setSearchCategory(null)
  }


  const rederView = () => {
    if (contex.searchByTitle?.length > 0 || contex.searchCategory) {
      if (contex.filteredItems?.length > 0) {
        return (
          <>
            {contex.filteredItems?.map(product => {
              return (
                <Card key={product.id} data={product} />
              )
            })}
          </>
        )
      } else {
        return (
          <>
            <p>no hay coincidencias </p>
          </>
        )
      }
    } else {
      return (
        <>
          {items?.map(product => {
            return (
              <Card key={product.id} data={product} />
            )
          })}
        </>
      )
    }
  }

  return (
    <>
      <Layoud >
        <div className="flex w-80 items-center justify-center relative mb-3">
          <h1 className="font-medium text-xl">Home</h1>
        </div>
        <input type="text" name="" id="" placeholder='search a product'
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => contex.setSearchByTitle(event.target.value)}
        />
        <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
          {rederView()}
        </div>

        <ProductDetail />
      </Layoud>
    </>
  )
}

export default Home