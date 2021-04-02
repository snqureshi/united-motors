import api from "./api-config";

export const getAllMakes = async () => {
  const resp = await api.get("/makes");
  return resp.data;
};
