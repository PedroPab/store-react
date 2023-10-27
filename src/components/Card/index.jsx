/* eslint-disable react/prop-types */
import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "./../../Contex"

// eslint-disable-next-line react/prop-types
export default function Card({ data }) {
  const contex = useContext(ShoppingCartContext)
  const agragaAlCarrito = () => {
    contex.setCount(contex.count + 1)
  }

  return (
    <div className="bg-white cursor-pointer w-56 h-60"
      onClick={() => contex.openProductDetail()} >
      <figure className="relative mb-2  w-full h-4/5">
        <samp className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs  m-2 px-3 py-0.5">{data.category.name}</samp>
        <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.description} />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 rounded-full m-2 px-1"
          onClick={() => (agragaAlCarrito())}
        >
          <PlusIcon className="h-6 w-6 text-black-500" />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>

    </div>)
}
