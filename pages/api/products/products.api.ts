import { axiosInstance } from "../../../config/axios";

export const getProductByType = async (gender: any, productType: any) => {
  const response = await axiosInstance.get(
    `api/products/${gender}/${productType}`
  );

  return response.data;
};

export const getAllProducts = async () => {
  const response = await axiosInstance.get("api/products/products");
  return response.data;
};

export const getProductById = async (productId: any) => {
  const response = await axiosInstance.get(`api/products/${productId}`);
  return response.data;
};
