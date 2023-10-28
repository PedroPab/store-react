import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "./../../Contex"
import OrderCard from "../OrderCard"
import { Link } from "react-router-dom"
import { totalPrice } from "../../utils"
import './styles.css'



function CheckoutSideMenu() {
  const contex = useContext(ShoppingCartContext)
  const cartProducts = contex.cartProducts

  const handleDelete = (idProductCart) => {
    const filteredProducts = contex.cartProducts.filter(product => product.id !== idProductCart)
    contex.setCartProducts(filteredProducts)

  }
  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }

    contex.setOrder([...contex.order, orderToAdd])
    contex.setCartProducts([])
  }
  return (
    <aside className={`${contex.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white `}>
      <div className='flex justify-between items-center  p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <div onClick={() => contex.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-auto flex-1">
        {
          cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images}
              deleteProductCart={handleDelete}
            />
          )
          )
        }
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">{totalPrice(cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button className="w-full bg-black py-3 text-white rounded-sm" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;