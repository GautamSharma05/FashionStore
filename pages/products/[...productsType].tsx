import Head from "next/head";
import Link from "next/link";
import { getAllProducts, getProductByType } from "../api/products/products.api";

const Products = ({ productByType }: any) => {
  return (
    <>
      <Head>
        <title>SharmaStore - India's Largest Fashion Store </title>
        <meta
          name="description"
          content="India's Largest Fashion Store Sign Up Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {productByType.product.map((item: any) => {
              return (
                <Link passHref key={item._id} href={`/products/${item._id}`}>
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-6">
                    <a className="block relative  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
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
                      <p className="mt-1 font-semibold">₹{item.productprice}</p>
                      <p className="mt-1 font-semibold">{`Sizes:${item.productsizes}`}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export async function getStaticPaths() {
  const res = await getAllProducts();

  const paths = res.data.message.map((currELe: any) => {
    return {
      params: {
        productsType: [currELe.productcategory, currELe.producttype],
      },
    };
  });
  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const gender = context.params.productsType[0];
  const productType = context.params.productsType[1];
  const productByType = await getProductByType(gender, productType);
  return {
    props: { productByType: productByType.data },
  };
}

export default Products;
