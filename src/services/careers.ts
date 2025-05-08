import api from "../api/instace";
import type { CareerForm } from "../types/global";

export async function getCareers() {
  try {
    const response = await api.get("");
    return response.data 
  } catch (error) {
    console.error(error);
  }
}

export async function postCareers({username, content, title}: CareerForm) {
  try {
    if (!content || !title || !username ) return 
    const response = await api.post("", {username, content, title})
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export async function editCareers(id: number){
  try {
    const response = await api.patch(`/${id}/`, {})
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export async function deleteCareers(id: number ){
  try {
    await api.delete(`/${id}/`)
  } catch (error) {
    console.error(error)
  }
}
