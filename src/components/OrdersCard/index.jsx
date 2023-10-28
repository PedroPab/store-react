

// eslint-disable-next-line react/prop-types
function OrdersCard({ totalPrice, totalProducts }) {

  return (
    <div className='flex justify-between items-center mb-3 border-black'>
      <p>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

export default OrdersCard;