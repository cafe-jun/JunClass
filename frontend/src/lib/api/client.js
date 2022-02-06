import axios from 'axios';
const client = axios.create();
/*
 * Axios Global Setting
 */
// client.defaults.baseURL = 'http://external-api-server.com/';
// client.defaults.headers.common['Authorization'] = 'Bearer abl1234';
//
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
//   /**
//    *
//    */
// );
//
export default client;
