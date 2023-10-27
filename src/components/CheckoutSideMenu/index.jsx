import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "./../../Contex"
import OrderCard from "../OrderCard"
import './styles.css'



function CheckoutSideMenu() {
  const contex = useContext(ShoppingCartContext)
  const cartProducts = contex.cartProducts

  return (
    <aside className={`${contex.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white `}>
      <div className='flex justify-between items-center  p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <div onClick={() => contex.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-auto ">
        {
          cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images}

            />
          )
          )
        }
      </div>


    </aside>
  );
}

export default CheckoutSideMenu;