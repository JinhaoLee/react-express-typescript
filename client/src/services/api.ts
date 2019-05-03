const REACT_APP_ENDPOINT_URL = 'https://cab230.hackhouse.sh'

export function callAPI(params: string): any {
  // const BASE_URL = process.env.REACT_APP_ENDPOINT_URL
  return fetch(`${REACT_APP_ENDPOINT_URL}/${params}`, {
    method: 'GET',
  }).then(response => {
    if (!response.ok) throw response
    return response.json()
  })
}

export function register(email: string, password: string) {
  return fetch(`${REACT_APP_ENDPOINT_URL}/register`, {
    method: 'POST',
    body: `email=${email}&password=${password}`,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export function UserLogin(email: string, password: string) {
  return fetch(`${REACT_APP_ENDPOINT_URL}/login`, {
    method: 'POST',
    body: `email=${email}&password=${password}`,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => response.json())
    .catch(error => console.log(error))
  // .then(response => {
  //   if (!response.ok) throw new Error('Network response was not ok')
  //   return response.json()
  // })
  // .catch(error => {
  //   console.log('Problem with fetch ', error.message)
  // })
}
