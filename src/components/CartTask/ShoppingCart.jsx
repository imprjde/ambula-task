/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import Header from "./cartUI/Header";
import Products from "./cartUI/Products";
import axios from "axios";

import Cart from "./cartUI/Cart";
import Loader from "./cartUI/Loader";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // This function is used to fetch the products from the Api
  const handleFetchProducts = async () => {
    try {
      setIsLoading(true);
      let resp = await axios.get("https://dummyjson.com/products?limit=24");
      {
        /*This API is used to fetch just 24 products as i have given limit as 24*/
      }
      setProducts(resp.data.products);
      setIsLoading(false);
      window.scrollTo(0, 0);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchProducts();
    {
      /*Useffect will run as soon as component is rendered or mounted*/
    }
  }, []);

  const handleAddToCart = (product) => {
    {
      /*This Logic is used to check if the product alreday exists in the cart or not. If YES then it will give you an Alert*/
    }
    const isProductExist = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (!isProductExist) {
      setCartItems([...cartItems, { product, qty: 1 }]);
      alert("Item added to Cart successfully");
    } else {
      alert("Item already in Cart");
    }
  };

  {
    /*This Fuction is mainly used to change the quantity of the products in the cartItem*/
  }
  const handleQuantity = (index, value) => {
    const copy = [...cartItems];
    copy[index].qty = parseInt(value);
    setCartItems(copy);
  };

  {
    /*This function is used to remove an item from the cart*/
  }
  const handleRemove = (id) => {
    const filteredCart = cartItems.filter((item) => item.product.id !== id);
    setCartItems(filteredCart);
  };
  return (
    <div className="w-full">
      {isModalOpen && (
        <Cart
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          cartItems={cartItems}
          handleQuantity={handleQuantity}
          handleRemove={handleRemove}
        />
      )}
      <Header cartItems={cartItems} setIsModalOpen={setIsModalOpen} />

      {/*If the Loading state is true then Loader component will be displayed*/}
      {isLoading && <Loader />}

      {/*If there is error in data fetching hten this error message will be shown*/}
      {error && !isLoading && (
        <div className="text-white m-auto flex justify-center mt-16 tracking-wider font-medium">
          <span>Unable to Fetch Products !!</span>
        </div>
      )}

      {/*If loading state is false and there is No error then Products component will be rendered*/}
      {/* Product Cards  */}
      <div>
        {products && !error && !isLoading && (
          <Products products={products} handleAddToCart={handleAddToCart} />
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
