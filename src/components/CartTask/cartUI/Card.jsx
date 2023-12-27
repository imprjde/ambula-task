import React from "react";

const Card = ({ product, handleAddToCart, key }) => {
  return (
    <div
      to={`/product/${product.id}`}
      key={key}
      className="relative m-auto md:m-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <span
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="void0"
      >
        <img className="object-cover" src={product.thumbnail} alt="product " />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {Math.ceil(product.discountPercentage)}% OFF
        </span>
      </span>
      <div className="mt-4 px-5 pb-5">
        <span>
          <h5 className="text-lg font-semibold  tracking-tight text-slate-900">
            {product.title.length > 20
              ? `${product.title.slice(0, 20)}...`
              : product.title}{" "}
          </h5>
        </span>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <div className="flex m-auto  items-center justify-between  ml-2 mdml-0">
            <span className="text-xl font-bold text-slate-900 ">
              ${" "}
              {Math.ceil(
                product.price - product.price / product.discountPercentage
              )}
            </span>
            <span className="text-sm font-semibold ml-2 mt-0.5 text-slate-900 line-through ">
              ${product.price}
            </span>
          </div>
          <div className="flex  items-center">
            <span className="mr-2 ml-3 mt-2 rounded bg-yellow-400 px-2.5 py-0.5 text-xs font-semibold">
              {product?.rating?.toFixed(1)}
            </span>
          </div>
        </div>
        <span
          onClick={() => {
            handleAddToCart(product);
          }}
          className="flex items-center cursor-pointer justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </span>
      </div>
    </div>
  );
};

export default Card;
