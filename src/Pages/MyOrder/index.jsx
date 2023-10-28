import Layoud from './../../components/Layout'

import { useContext } from "react"
import OrderCard from "./../../components/OrderCard"

import { ShoppingCartContext } from "./../../Contex"
import { totalPrice } from '../../utils'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


function MyOrder() {
  const contex = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf(`/`) + 1)

  console.log("🚀 ~ file: index.jsx:17 ~ MyOrder ~ index:", index)
  if (index == `last` || index == `my-order`) index = contex.order?.length - 1

  return (
    <>
      <Layoud>
        <div className="flex w-80 items-center justify-center relative mb-6">
          <Link to={`/my-orders`} className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h1>My Order</h1>

        </div>
        <div className="flex flex-col w-80">
          {
            contex.order?.[index].products.map(product => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.images}
              />
            ))
          }
        </div>
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">{totalPrice(contex.order?.slice(-1)[0].products)}</span>
        </p>
      </Layoud>
    </>
  )
}

export default MyOrder

