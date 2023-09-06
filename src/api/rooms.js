import axiosAPI from ".";

export const getRoomListByLocationAPI = (locationId) => {
  return axiosAPI.get(`/api/rooms?locationId=${locationId}`);
};

export const getRoomDetailAPI = (roomId) => {
  return axiosAPI.get(`/api/rooms/${roomId}`);
};

export const getReviewRoomAPI = (roomId) => {
  return axiosAPI.get(`/api/reviews/byRoom?roomId=${roomId}`);
};

export const bookingRoomAPi = (data) => {
  const { token } = JSON.parse(localStorage.getItem("userLogin"));
  return axiosAPI.post(`/api/rooms/booking`, data, {
    headers: {
      token,
    },
  });
};
