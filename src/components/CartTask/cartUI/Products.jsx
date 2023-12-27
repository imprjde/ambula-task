import React from "react";
import Card from "./Card";

const Products = ({ products, handleAddToCart }) => {
  return (
    <div className="col-span-3">
      <div className=" ">
        <div className="mx-auto mt-20 max-w-2xl px-4 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <Card
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
