import type { FormEvent } from "react";
import api from "../api/instace";
import type { CareerForm } from "../types/global";

export async function getCareers() {
  try {
    const response = await api.get("");
    return response.data 
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao buscar usuarios")
  }
}

export async function postCareers({username, content, title}: CareerForm) {
  try {
    if (!content || !title || !username ) return 
    const response = await api.post("", {username, content, title})
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao postar")
  }
}

export async function editCareers(event: FormEvent, id: number, title: string, content: string){
  try {
    event.preventDefault()
    const response = await api.patch(`/${id}/`, {title, content})
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao Editar")
  }
}

export async function deleteCareers(id: number ){
  try {
    await api.delete(`/${id}/`)
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao deletar")
  }
}
