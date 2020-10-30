import { create } from 'apisauce'

const baseApi = create({
  baseURL: "http://localhost:8000/api/v1/",
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Permitted-Cross-Domain-Policies': 'none',
  },
  timeout: 1200000,
})

const createApi = () => {
  return baseApi
}

const api = createApi()

export default api
