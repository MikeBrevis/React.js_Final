import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { useState } from "react";
import "./Products.css";

const Products = () => {
  const { data, cart, setters } = useContext(dataContext);
  const [clickedButtons, setClickedButtons] = useState({});

  const handleClick = (productId) => {
    setClickedButtons((prevClickedButtons) => ({
      ...prevClickedButtons,
      [productId]: true,
    }));
    setTimeout(() => {
      setClickedButtons((prevClickedButtons) => ({
        ...prevClickedButtons,
        [productId]: false,
      }));
    }, 250);
  };

  const buyProducts = (product) => {
    handleClick(product.id);
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === existingProduct.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            total: item.total + product.price,
          };
        }
        return item;
      });
      setters.setCart(updatedCart);
    } else {
      setters.setCart([
        ...cart,
        { ...product, quantity: 1, total: product.price },
      ]);
    }
    setters.setBreath(true);
  };

  return (
    <div className="product-grid">
      {data.map((product) => {
        const isClicked = clickedButtons[product.id] || false;
        return (
          <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card" />
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button
              className={
                isClicked ? "add-to-cart-btn clicked" : "add-to-cart-btn"
              }
              onClick={() => buyProducts(product)}
            >
              Agregar al carro
            </button>
          </div>
        );
      })}
    </div>
  );
};

Products.displayName = "Products";

export default Products;
