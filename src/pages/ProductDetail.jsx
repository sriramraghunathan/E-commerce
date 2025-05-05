import { useParams } from "react-router-dom";

const productDetails = {
  1: { name: "T-Shirt", description: "Comfortable cotton shirt", price: 20 },
  2: { name: "Sneakers", description: "Stylish running shoes", price: 50 },
  3: { name: "Backpack", description: "Spacious backpack", price: 30 },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
