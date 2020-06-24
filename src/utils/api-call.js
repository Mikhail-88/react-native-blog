const baseURL = 'https://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/';

export const apiCall = async (
  endUrl = '',
  method = 'GET',
  body = {}
) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method === 'POST') {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${baseURL}${endUrl}`, config);

  return await response.json();
};