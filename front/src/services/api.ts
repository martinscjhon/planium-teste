import axios from 'axios'
import { CONFIG_ENVIRONMENT } from '../config/environment'

export const api = axios.create({
  baseURL: CONFIG_ENVIRONMENT.API,
})
