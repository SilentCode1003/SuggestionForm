import Axios from 'axios'
import { VITE_API_URL } from '../config'

// Axios.defaults.withCredentials = true

export const axios = Axios.create({
  baseURL: VITE_API_URL,
})
