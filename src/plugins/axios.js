import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer 612690be7c475048f24a99259a10c376`
  }
})

export default api
