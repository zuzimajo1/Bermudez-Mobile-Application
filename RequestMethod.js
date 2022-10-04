import axios from 'axios'

const BASE_URL = 'https://bermudez-backend.herokuapp.com/api/'

export const PublicRequest = axios.create({
  baseURL: BASE_URL,
})
