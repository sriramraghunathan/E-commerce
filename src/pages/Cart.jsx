const Cart = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:underline"
              >
                x
              </button>
            </div>
          ))}
          <p className="mt-4 font-bold">Total: ${total}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
