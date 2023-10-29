import { useContext } from 'react'
import Layoud from './../../components/Layout'
import Card from './../../components/Card'
import ProductDetail from './../../components/ProductDetail'
import { ShoppingCartContext } from "./../../Contex"

function Home() {

  const contex = useContext(ShoppingCartContext)
  const items = contex.items

  const rederView = () => {
    if (contex.searchByTitle?.length > 0) {
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