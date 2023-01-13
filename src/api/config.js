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
  if (Object.keys(params).length > 0)
    url += `?${new URLSearchParams(params).toString()}`;
  let authToken = localStorage.getItem("authToken");
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  return instance.get(url, {
    headers,
  });
};

export const post = (url, params = {}, data, headers = {}) => {
  if (Object.keys(params).length > 0)
    url += `?${new URLSearchParams(params).toString()}`;
  let authToken = localStorage.getItem("authToken");
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  return instance.post(url, data, {
    headers,
  });
};

export const put = (url, params = {}, data, headers = {}) => {
  if (Object.keys(params).length > 0)
    url += `?${new URLSearchParams(params).toString()}`;
  let authToken = localStorage.getItem("authToken");
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  return instance.put(url, data, {
    headers,
  });
};

export const patch = (url, params = {}, data, headers = {}) => {
  if (Object.keys(params).length > 0)
    url += `?${new URLSearchParams(params).toString()}`;
  let authToken = localStorage.getItem("authToken");
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  return instance.patch(url, data, {
    headers,
  });
};

export const deleteMethod = (url, params = {}, data, headers = {}) => {
  if (Object.keys(params).length > 0)
    url += `?${new URLSearchParams(params).toString()}`;
  let authToken = localStorage.getItem("authToken");
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
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
