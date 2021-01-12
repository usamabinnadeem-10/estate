// export const URL = "http://127.0.0.1:8000/";
export const URL = "https://property-ru-backend.herokuapp.com/";

export const config = (access) => {
  const config = {
    headers: {
      Authorization: "Bearer " + access,
    },
  };
  return config;
};
