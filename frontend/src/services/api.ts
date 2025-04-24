import axios from "axios"

// Recuperando o back
const api = axios.create({
  baseURL: "http://localhost:3000"
})

export { api }