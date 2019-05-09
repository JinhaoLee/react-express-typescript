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

export function search(params: IParams): Promise<{ result: ISearchRes[] }> {
  let queries = ''
  for (const [key, value] of Object.entries(params)) {
    if (value !== '' && value !== 'all') {
      queries += `${key}=${value}&`
    }
  }
  return fetch(`${REACT_APP_ENDPOINT_URL}/search?${queries}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  })
    .then(response => response.json())
    .catch(error => console.error(error))
}

export function queryAPI(query: string): Promise<{ [key: string]: string[] }> {
  return fetch(`${REACT_APP_ENDPOINT_URL}/${query}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export interface IParams {
  offence: string
  area: string
  age: string
  gender: string
  year: string
}

export interface ISearchRes {
  LGA: string
  total: number
  lat: number
  lng: number
}
