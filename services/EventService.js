import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const apiCall = axios.create({
  baseURL: `https://api.covid19india.org/state_district_wise.json`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getCovidData() {
    return apiCall.get('')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
