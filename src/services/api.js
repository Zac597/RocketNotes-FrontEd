import axios from 'axios'

export const api = axios.create({
  baseURL: "https://api-rocketnotes-o3c8.onrender.com"
})

api.get("/users/:id")