import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Cart({
  cartItems,
  setIsModalOpen,
  isModalOpen,
  handleQuantity,
  handleRemove,
}) {
  const cancelButtonRef = useRef(null);

  // Logic to display subtotal of all the cart items
  const subtotal = cartItems?.reduce((total, item) => {
    return (
      total +
      (item.product.price -
        item.product.price / item.product.discountPercentage) *
        item.qty
    );
  }, 0);
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsModalOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative px-5 my-5 transform overflow-hidden z-50 rounded-lg bg-white text-left shadow-xl transition-all w-[90%] h-content">
                {cartItems?.length === 0 && (
                  <div className="m-auto my-5  flex justify-center items-center">
                    <span className="font-semibold  md:mt-5 text-2xl text-gray-800">
                      Sorry!! Your Cart is Empty :)
                    </span>
                  </div>
                )}

                {cartItems?.length > 0 && (
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems?.map((product, index) => (
                          <li key={product.product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product?.product?.thumbnail}
                                alt={product?.product?.title}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product?.href}>
                                      {product?.product?.title}
                                    </a>
                                  </h3>
                                  <p className="ml-4">
                                    ${" "}
                                    {Math.ceil(
                                      product?.product?.price -
                                        product?.product?.price /
                                          product?.product?.discountPercentage
                                    ) * product?.qty}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product?.product?.brand} |{" "}
                                  {product?.product?.category}
                                </p>
                              </div>
                              <div className="flex flex-1   mt-2 justify-between text-sm">
                                <select
                                  className="border rounded w-[35px] h-[30px] text-center cursor-pointer appearance-none"
                                  value={product?.qty}
                                  onChange={(e) =>
                                    handleQuantity(index, e.target.value)
                                  }
                                >
                                  v<option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>

                                <div className="flex">
                                  <button
                                    onClick={() =>
                                      handleRemove(product?.product?.id)
                                    }
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {cartItems.length > 0 && (
                  <div className="bg-sky-500 my-2 rounded-md px-4 py-3 sm:flex sm:flex-row sm:px-6 justify-between">
                    <div className="text-center flex items-center font-semibold text-lg">
                      Total Items: {cartItems.length}
                    </div>

                    <div>
                      <div
                        type="button"
                        className="mt-3 inline-flex font-bold w-full justify-center rounded-md  text-center items-center px-3 py-2 text-lg  text-gray-900 shadow-sm  ring-gray-300  sm:mt-0 sm:w-auto"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Sub Total:
                      </div>
                      <div
                        type="button"
                        className="inline-flex w-full justify-center rounded-md text-lg  py-2  font-semibold text-white shadow-sm   sm:w-auto"
                        onClick={() => setIsModalOpen(false)}
                      >
                        $ {subtotal.toFixed(0)}
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
