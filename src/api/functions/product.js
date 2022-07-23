import axios from "axios";
import { product } from "../apiEndPoints";

export const getAllProducts = async (categoryId, subCategories) => {
  let config = {
    method: "get",
    url: product.getAll,
    headers: {},
    params: {
      categoryId,
      subCategoryIds: subCategories
    }
  };
  return await axios(config);
};

export const getTrendingProducts = async () => {
  let config = {
    method: "get",
    url: product.getTrending,
    headers: {}
  };
  return axios(config);
};

export const getProductById = async (id) => {
  let config = {
    method: "get",
    url: product.getById(id),
    headers: {},
    params: {}
  };
  const response = await axios(config);
  return response.data.data;
};
