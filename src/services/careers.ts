import api from "../api/instace";
import type { Careers } from "../types/global";

export async function getCareers() {
  try {
    const response = await api.get("");
    return response.data 
  } catch (error) {
    console.error(error);
  }
}

export async function postCareers({username, content, title}: Careers) {
  try {
    if (!content || !title || !username ) return 
    const response = await api.post("", {username, content, title})
    console.log("foi")
    return response.data
  } catch (error) {
    console.error(error)
  }
}

