import { axiosInstance } from "../../../config/axios";

export const getProductByType = async (gender: any, productType: any) => {
  const response = await axiosInstance.get(
    `api/products/${gender}/${productType}`
  );

  return response;
};

export const getAllProducts = async () => {
  const response = await axiosInstance.get("api/products/products");
  return response;
};

export const getProductById = async (productId: any) => {
  const response = await axiosInstance.get(`api/products/${productId}`);
  return response;
};
