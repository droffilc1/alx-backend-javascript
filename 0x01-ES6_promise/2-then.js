export default function handleResponseFromAPI(promise) {
  return promise
    .then((result) => ({ status: 'success', data: result }))
    .catch((error) => ({ status: 'error', error: error.message }))
    .finally(() => console.log('Got a response from the API'));
}
