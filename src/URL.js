export const URL = "http://127.0.0.1:8000/";

export const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access"),
  },
};
