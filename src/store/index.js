import { createStore } from 'vuex'

/* modules */
import auth from '@/store/modules/auth'
import shopToDoList from '@/store/modules/shopToDoList'

export const store = createStore({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    auth,
    shopToDoList
  }
})
