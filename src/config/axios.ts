import axios from "axios"

// Add config for axios (base url, proxy...) here
// More details on https://github.com/axios/axios#request-config
let backend = axios.create({
  // proxy: ...
})

backend.interceptors.response.use(
  response => {
    return response.data
  },

  error => {
    return Promise.reject(error)
  },
)

export default backend
