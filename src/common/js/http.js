export function getData(url) {
  return fetch(url, {
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET',
    mode: 'cors',
  })
  .then(response => response.json())
  .catch(error => error)
}