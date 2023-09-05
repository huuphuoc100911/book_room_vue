import axiosAPI from ".";

export const getListLocationAPI = (location) => {
  return axiosAPI.get(`/api/locations?location=${location}`);
};
