import axios from "axios";

let headers = {
  "Content-Type": "application/json",
  Accept: `application/json`,
};
const { REACT_APP_APIHOST } = process.env;
console.log(REACT_APP_APIHOST)
const fetch = async (url, options = {}) => {
  try {
    const instance = axios.create({
      baseURL: REACT_APP_APIHOST,
      validateStatus: function (status) {
        return status < 400;
      },
    });

    instance.interceptors.response.use(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
    const result = await instance.request({
      url: url,
      data: options.data,
      params: options.params,
      method: options.method,
      headers: options.headers,
      /*       withCredentials: options.withCredentials,
      cancelToken: options.cancelFn
        ? new axios.CancelToken(options.cancelFn)
        : null, */
    });

    return result.data;
  } catch (err) {}
};
const get = async (url, options = {}) => {
  return await fetch(url, {
    method: "get",
    headers: headers,
    ...options,
  });
};

const post = async (url, options = {}) => {
  return await fetch(url, {
    method: "post",
    headers: headers,
    ...options,
  });
};

export { get, post };
