import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTI2OTBiZTdjNDc1MDQ4ZjI0YTk5MjU5YTEwYzM3NiIsInN1YiI6IjY1MDg1MjY2Mzk0YTg3MDBjNWJlODllNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rnaco4Pn6fBvhFka8HKauoms_H_g6EVpupZ04X4OKhY'`
  }
})

export default api
