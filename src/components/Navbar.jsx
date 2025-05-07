import { Link } from "react-router-dom";



const Navbar = ({ cartCount }) => (
  <>
    <nav className="bg-gray-400 text-white p-6  flex justify-between items-center text-2xl ">
      <div className="w-16">
        <img
          src="https://png.pngtree.com/template/20200623/ourmid/pngtree-f-logo-vector-geometric-stylish-simple-designs-black-color-white-background-image_385210.jpg"
          alt=""
          className="border-white rounded-full"
        />
      </div>
      <div className="flex-1 mx-48">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-10 ">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart({cartCount})
        </Link>
        <Link
          to="/login"
          className="hover:underline border-white text-black bg-white p-1 w-8 rounded-full"
        >
          <span className="material-icons">person</span>
        </Link>
      </div>
    </nav>

    <nav className="bg-gray-200 text-gray-800 p-4 flex justify-around  space-x-6 text-lg font-medium">
      <Link
        to="/men"
        className="text-black p-2   hover:bg-black hover:text-white hover:border-black hover:rounded-full hover:underline"
      >
        Men
      </Link>
      <Link
        to="/women"
        className="text-black p-2   hover:bg-black hover:text-white hover:border-black hover:rounded-full hover:underline"
      >
        Women
      </Link>
      <Link
        to="/kids"
        className="text-black p-2   hover:bg-black hover:text-white hover:border-black hover:rounded-full hover:underline"
      >
        Kids
      </Link>
      <Link
        to="/accessories"
        className="text-black p-2   hover:bg-black hover:text-white hover:border-black hover:rounded-full hover:underline"
      >
        Accessories
      </Link>
      <Link
        to="/shoes"
        className="text-black p-2   hover:bg-black hover:text-white hover:border-black hover:rounded-full hover:underline"
      >
        Shoes
      </Link>
    </nav>
  </>
);

export default Navbar;
