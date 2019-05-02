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
