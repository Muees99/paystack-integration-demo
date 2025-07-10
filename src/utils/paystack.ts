import axios from "axios";

export const verifyTransaction = async (ref: string) => {
  const res = await axios.get(`/api/verify?ref=${ref}`);
  return res.data;
};
