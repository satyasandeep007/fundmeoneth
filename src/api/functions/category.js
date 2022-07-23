import axios from "axios";
import { category } from "../apiEndPoints";

export const getAllCategories = async () => {
  let config = {
    method: "get",
    url: category.getAll,
    headers: {}
  };
  return axios(config);
};
