import api from "./api-config";

export const getAllModels = async () => {
  const resp = await api.get("/models");
  return resp.data;
};
