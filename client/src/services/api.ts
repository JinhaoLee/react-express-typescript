const REACT_APP_ENDPOINT_URL = 'https://cab230.hackhouse.sh'

export function callAPI(params: string): any {
  return fetch(`${REACT_APP_ENDPOINT_URL}/${params}`, {
    method: 'GET',
  }).then(response => {
    if (!response.ok) {
      throw response
    }
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
}

export function search(param: string, filter: string) {
  return fetch(
    `${REACT_APP_ENDPOINT_URL}/search?offence=Armed Robbery&${param}=${filter}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }
  )
    .then(response => response.json())
    .catch(error => console.error(error))
}
