import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => (
  <>
  <nav className="bg-gray-500 text-white p-2  flex justify-between items-center ">
    <div className="w-10">
      <img
        src="https://png.pngtree.com/template/20200623/ourmid/pngtree-f-logo-vector-geometric-stylish-simple-designs-black-color-white-background-image_385210.jpg"
        alt=""
        className="border-white rounded-full"
      />
    </div>
    <div className="flex gap-10 ">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/products" className="hover:underline">
        Products
      </Link>
      <Link to="/cart" className="hover:underline" >Cart ({cartCount})</Link>
    </div>
  </nav>

  <nav className="bg-gray-300 text-gray-800 p-2 flex justify-center space-x-6 text-sm font-medium">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/shoes">Shoes</Link>
      </nav>
</>
);

export default Navbar;
