import { createStore } from 'vuex'

/* modules */
import auth from '@/store/modules/auth'

export const store = createStore({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    auth
  }
})
