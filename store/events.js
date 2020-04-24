import EventService from '@/services/EventService.js'
export const state = () => ({
  covid: {},
  covidData: []
})
export const mutations = {
  SET_COVID_DATA(state, covid) {
    state.covid = covid.Kerala.districtData
  }
}
export const actions = {
  fetchCovidDataEvent({ commit }, id) {
    return EventService.getCovidData().then((response) => {
      commit('SET_COVID_DATA', response.data)
    })
  }
}
