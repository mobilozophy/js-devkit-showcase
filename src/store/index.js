import { createStore } from 'vuex'

export default createStore({
  state: {
    mzcapiConfig: {
      domain: import.meta.env.VITE_MZCAPI_DOMAIN || '72dcc282-af85-4204-99c2-5abbae13f94d',
      api_url: import.meta.env.VITE_MZCAPI_API_URL || 'https://mzcapi.test/api',
      verboseLogging: import.meta.env.VITE_MZCAPI_VERBOSE_LOGGING === 'true' || true
    },
    formConfig: {
      account_uuid: import.meta.env.VITE_FORM_ACCOUNT_UUID || '87c556d0-aacc-4c08-8ae0-9ceaea494b64',
      form_uuid: import.meta.env.VITE_FORM_UUID || 'b853f243-6576-4fef-a1b5-d312928278b3',
      form_style: import.meta.env.VITE_FORM_STYLE || 'default'
    }
  },
  mutations: {
    updateMzcapiConfig(state, newConfig) {
      state.mzcapiConfig = { ...state.mzcapiConfig, ...newConfig }
      localStorage.setItem('mzcapiConfig', JSON.stringify(state.mzcapiConfig))
    },
    updateFormConfig(state, newConfig) {
      state.formConfig = { ...state.formConfig, ...newConfig }
      localStorage.setItem('formConfig', JSON.stringify(state.formConfig))
    },
    initializeStore(state) {
      if (localStorage.getItem('mzcapiConfig')) {
        state.mzcapiConfig = JSON.parse(localStorage.getItem('mzcapiConfig'))
      }
      if (localStorage.getItem('formConfig')) {
        state.formConfig = JSON.parse(localStorage.getItem('formConfig'))
      }
    }
  },
  actions: {
    updateMzcapiConfig({ commit }, newConfig) {
      commit('updateMzcapiConfig', newConfig)
    },
    updateFormConfig({ commit }, newConfig) {
      commit('updateFormConfig', newConfig)
    },
    initializeStore({ commit }) {
      commit('initializeStore')
    }
  }
})