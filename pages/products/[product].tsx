import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  getAllProducts,
  getProductById,
  getProductByType,
} from "../api/products/products.api";
import { BsTruck } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { ImStarEmpty } from "react-icons/im";
import { MdClose } from "react-icons/md";

const Product = ({ productById, similarProducts }: any) => {
  const [pin, setPin] = useState<any>();
  const [service, setService] = useState<any>();
  const [showCustomerPhotosModal, setShowCustomerPhotosModal] = useState(false);
  const checkServiceAbility = async (e: any) => {
    e.preventDefault();
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  const onChangePin = (e: any) => {
    setPin(e.target.value);
  };
  return (
    <>
      <Head>
        <title>{`Buy ${productById.product.productname} Online - India's Largest Fashion Store`}</title>
        <meta
          name="description"
          content="SharmaStor - India's Largest Fashion Store Products By Id"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="Product Image"
              className="lg:w-1/2 w-full lg:h-2/4 px-24 object-cover object-top rounded"
              src={productById.product.productimages[0]}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {`${productById.product.productcategory}
                ${productById.product.productsubcategory}`}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productById.product.productname}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">1507 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {productById.product.productsizes.map((size: any) => {
                        return <option>{size}</option>;
                      })}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <span className="font-medium text-xl text-black">
                  Rs.{productById.product.productdiscountprice}
                </span>
                <span className=" text-xl text-gray-500 line-through">
                  Rs.{productById.product.productoriginalprice}
                </span>
                <span className=" text-xl font-medium text-orange-500">
                  {`(${(
                    ((productById.product.productoriginalprice -
                      productById.product.productdiscountprice) /
                      productById.product.productoriginalprice) *
                    100
                  ).toFixed(1)}% OFF)`}
                </span>
              </div>
              <span className="text-md font-semibold text-indigo-600">
                inclusive of all taxes
              </span>

              <div className="flex my-6 space-x-10">
                <button className="text-white bg-indigo-500 border-0 py-2 px-2 md:px-6  focus:outline-none hover:bg-indigo-600 rounded">
                  Buy Now
                </button>
                <button className="text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Bag
                </button>
              </div>
              <div className="flex space-x-3 text-black font-medium">
                <span>DELIVERY OPTIONS</span>
                <BsTruck className="text-2xl" />
              </div>
              <form
                onSubmit={checkServiceAbility}
                className="pin mt-4 flex text-sm"
              >
                <input
                  onChange={onChangePin}
                  placeholder="Enter your Pincode"
                  className="px-2  outline-none"
                  type="text"
                />
                <input
                  type="submit"
                  value="Check"
                  className="cursor-pointer outline-none font-medium text-indigo-500 py-2 px-2 "
                />
              </form>
              {!service && service != null && (
                <div className="text-red-700 text-sm mt-3">
                  Sorry! We do not delivered Here
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700 text-sm mt-3">
                  Yay! We delivered Here
                </div>
              )}
              <span className="text-xs">
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </span>
              <hr className="mt-3" />
              <div className="my-2 font-normal text-lg">
                <span>100% Original Products</span>
                <br />
                <span>Pay on delivery might be available</span>
                <br />
                <span>Easy 30 days returns and exchanges</span>
                <br />
                <span>Try & Buy might be available</span>
                <br />
              </div>
              <hr className="my-5" />
              <div className=" flex space-x-3 text-black font-medium">
                <span>PRODUCT DETAILS</span>
                <BiDetail className="text-xl" />
              </div>

              <p className="mt-3">{productById.product.productdescription}</p>
              <hr className="my-5" />
              <div className=" flex space-x-2 text-black font-medium">
                <span>RATINGS</span>
                <ImStarEmpty className="text-xl" />
              </div>
              <div className="rating mt-5">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-300 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                    4.95 out of 5
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  10.3k Verified buyers
                </p>
                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    5 star
                  </span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    5832
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    4 star
                  </span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: "17%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    2472
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    3 star
                  </span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: "8%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    1007
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    2 star
                  </span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: "4%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    346
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    1 star
                  </span>
                  <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div
                      className="h-5 bg-yellow-400 rounded"
                      style={{ width: "1%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-500">
                    625
                  </span>
                </div>
              </div>
              <hr className="my-5" />
              <span className=" text-black font-medium">
                Customer Photos (
                {productById.product.customerphotoreviews.length})
              </span>
              <div className="flex space-x-2">
                {productById.product.customerphotoreviews
                  .slice(0, 4)
                  .map((customerImage: any) => {
                    return (
                      <img
                        alt="Customer Review Image"
                        src={customerImage}
                        className="mt-3 w-20 h-20"
                      />
                    );
                  })}
              </div>
              <span
                className="text-indigo-600 font-semibold cursor-pointer btn"
                onClick={() => setShowCustomerPhotosModal(true)}
              >
                see all images
              </span>
              {showCustomerPhotosModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-xl text-black font-semibold">
                            Customer Photos
                          </h3>
                          <MdClose
                            className="text-2xl cursor-pointer"
                            onClick={() => setShowCustomerPhotosModal(false)}
                          />
                        </div>
                        {/*body*/}
                        <div className="relative p-6 gap-x-3.5 grid grid-cols-5 overflow-y-auto h-96 ">
                          {productById.product.customerphotoreviews.map(
                            (customerImages: any) => {
                              return (
                                <img
                                  alt="Customer Review Image"
                                  src={customerImages}
                                  className="mt-3 w-20 h-20"
                                />
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
              <hr className="my-5" />

              <span className="font-medium">Product Code: </span>
              <span className="font-semibold text-black">
                {productById.product._id}
              </span>
              <br />
              <span className="font-medium">Seller: </span>
              <span className="font-semibold text-indigo-500">SharmaStore</span>
            </div>
          </div>

          <span className="my-5 font-semibold text-black text-2xl">
            Similar Products
          </span>
          <div className="flex">
            {similarProducts.product.map((item: any) => {
              return (
                <Link passHref key={item._id} href={`/products/${item._id}`}>
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-6">
                    <a className="block relative  rounded overflow-hidden">
                      <img
                        alt="Product Image"
                        className="m-auto md:m-0 h-[30vh] md:h-[36vh] block"
                        src={item.productimages[0]}
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {`${item.productcategory}
                        ${item.productsubcategory}`}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.productname}
                      </h2>
                      <div className="flex space-x-2">
                        <p className="my-1  text-sm font-semibold text-black">
                          Rs.{item.productdiscountprice}
                        </p>
                        <span className="my-1 text-xs text-gray-500 line-through">
                          Rs.{item.productoriginalprice}
                        </span>
                        <span className="my-1 text-xs text-orange-500">
                          {`(${(
                            ((item.productoriginalprice -
                              item.productdiscountprice) /
                              item.productoriginalprice) *
                            100
                          ).toFixed(1)}% OFF)`}
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <p className="my-1  text-black text-sm">Sizes:</p>
                        <p className="mt-1 space-x-1 text-sm">
                          {`${item.productsizes},`}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export async function getStaticPaths() {
  const res = await getAllProducts();

  const paths = res.data.message.map((currELe: any) => {
    return {
      params: {
        product: currELe._id,
      },
    };
  });
  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps(context: any) {
  const productId = context.params.product;

  const productById = await getProductById(productId);
  const gender = productById.data.product.productcategory;
  const productType = productById.data.product.producttype;
  const similarProducts = await getProductByType(gender, productType);

  return {
    props: {
      productById: productById.data,
      similarProducts: similarProducts.data,
    },
  };
}

export default Product;
