import { XMarkIcon } from '@heroicons/react/24/solid'


// eslint-disable-next-line react/prop-types
function OrderCard({ title, imageUrl, price, deleteProductCart, id }) {
  let rederXMarkIcon
  if (deleteProductCart) {
    rederXMarkIcon = <XMarkIcon onClick={() => { deleteProductCart(id) }} className="h-6 w-6 text-black-500 cursor-pointer" />
  }

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure >
        <p className='text-sm font-light'>{title}</p>

      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        {rederXMarkIcon}
      </div>

    </div>
  );
}

export default OrderCard;