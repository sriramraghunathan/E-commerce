const Cart = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-3 p-4 gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <span>
                    {item.name} - ₹{item.price}
                  </span>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-white bg-red-400 p-2  rounded-full"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <p className="mt-4 p-5 text-4xl font-bold">Total: ₹{total}</p>
      </div>
    </>
  );
};

export default Cart;
