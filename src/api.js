import axios from 'axios'

const BASE_URL = 'https://aviasales-test-api.kata.academy'
const TIMEOUT = 5000

export function createApi() {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {},
  })

  return api
}
