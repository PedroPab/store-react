import Layoud from './../../components/Layout'

import { useContext } from "react"
import OrderCard from "./../../components/OrderCard"

import { ShoppingCartContext } from "./../../Contex"
import { totalPrice } from '../../utils'


function MyOrder() {

  const contex = useContext(ShoppingCartContext)
  console.log(`hoal`);
  console.log(contex.order);
  console.log(contex.order?.slice(-1)[0].products);

  return (
    <>
      <Layoud>
        <h2>MyOrder</h2>
        <div className="flex flex-col w-80">
          {
            contex.order?.slice(-1)[0].products.map(product => (
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

