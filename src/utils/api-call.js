import axios from 'axios';

const baseURL = 'https://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/';

export const apiCall = (
  endUrl = '',
  method = 'GET',
  body = {}
) => {
  return new Promise((resolve, reject) => {
    axios({url: `${baseURL}${endUrl}`, method, data: body})
      .then(responce => resolve(responce))
      .catch(err => reject(err));
  });
};