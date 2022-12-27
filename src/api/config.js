import axios from "axios";

const authToken = localStorage.getItem("authToken");

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  //   timeout: 30000,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export const get = (url, params = {}, headers = {}) => {
  url += `?${new URLSearchParams(params).toString()}`;
  return instance.get(url, {
    headers,
  });
};

export const post = (url, params = {}, data, headers = {}) => {
  url += `?${new URLSearchParams(params).toString()}`;
  return instance.post(url, {
    headers,
    data,
  });
};

export const put = (url, params = {}, data, headers = {}) => {
  url += `?${new URLSearchParams(params).toString()}`;
  return instance.put(url, {
    headers,
    data,
  });
};

export const deleteMethod = (url, params = {}, data, headers = {}) => {
  url += `?${new URLSearchParams(params).toString()}`;
  return instance.delete(url, {
    headers,
    data,
  });
};

// import axios from 'axios';

// const fetchClient = () => {
//   const defaultOptions = {
//     baseURL: process.env.REACT_APP_API_PATH,
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   // Create instance
//   let instance = axios.create(defaultOptions);

//   // Set the AUTH token for any request
//   instance.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('token');
//     config.headers.Authorization =  token ? `Bearer ${token}` : '';
//     return config;
//   });

//   return instance;
// };

// export default fetchClient();
