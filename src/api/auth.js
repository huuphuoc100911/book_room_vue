import axiosAPI from ".";

export const signUpAPI = (userRegister) => {
  return axiosAPI.post("/api/auth/register", userRegister);
};
