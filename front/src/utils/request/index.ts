import { api } from '../../services/api'
import { endpoint } from '../endpoints'
import { ICreateProposta } from '../interface/ICreateProposta'

const GetAllPlans = async () => {
  try {
    const url = endpoint.planos

    const response = await api.get(url)

    return response.data
  } catch (err: any) {
    throw new Error(err.response.data.message)
  }
}

const CreateProposta = async (payload: ICreateProposta) => {
  try {
    const url = endpoint.createProposta

    const response = await api.post(url, payload)
    
    return response.data
    
  } catch (err: any) {    
    throw new Error(err.response.data.message)
  }
}

const DownloadJson = async () => {
  try {
    const url = endpoint.download

    const response = await api.get(url)
    
    return response.data
    
  } catch (err: any) {    
    throw new Error(err.response.data.message)
  }
}

export const handleRequest = {
  GetAllPlans,
  CreateProposta,
  DownloadJson
}
