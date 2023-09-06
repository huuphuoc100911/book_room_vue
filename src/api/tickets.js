import axiosAPI from ".";

export const getListTicketByUserAPI = (userId) => {
  return axiosAPI.get(`/api/tickets/by-user?userId=${userId}`);
};
