import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

import { ShoppingCartContext } from "./../../Contex"


function ProductDetail() {
  const contex = useContext(ShoppingCartContext)
  const productToShow = contex.productToShow

  return (
    <aside className={`${contex.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center  p-6'>
        <h2 className='font-medium text-xl'>{productToShow.title}</h2>
        <div onClick={() => contex.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg ' src={productToShow.images} alt={productToShow.description} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-2md'>{productToShow.title}</span>
        <span className='font-medium text-2sm'>{productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;