import axios from "axios";

const API = 'http://localhost:3000/api'

export const getPercentagesRequest = (course) => axios.get(`${API}/percentages/${course}`)
