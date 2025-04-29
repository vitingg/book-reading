import axios from "axios"

// Recuperando o back
export const api = axios.create({
  baseURL: "http://localhost:3000"
})
