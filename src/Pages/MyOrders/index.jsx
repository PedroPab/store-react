import { useContext } from "react"
import { Link } from 'react-router-dom'
import Layoud from './../../components/Layout'
import OrdersCard from './../../components/OrdersCard'
import { ShoppingCartContext } from "./../../Contex"

function MyOrders() {
  const contex = useContext(ShoppingCartContext)

  return (
    <>
      <Layoud>
        <div className="flex w-80 items-center justify-center relative">
          <h1>My Orders</h1>
        </div>
        {
          contex.order.map((order, index) => (
            <Link
              key={index}
              to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
      </Layoud >
    </>
  )
}

export default MyOrders

