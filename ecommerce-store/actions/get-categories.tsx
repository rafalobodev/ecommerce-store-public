import { Category } from "@/types";


const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;

