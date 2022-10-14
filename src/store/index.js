import { createStore } from 'vuex'

/* modules */
import auth from '@/store/modules/auth'
import shopToDoList from '@/store/modules/shopToDoList'
import posts from '@/store/modules/posts'

export const store = createStore({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    auth,
    shopToDoList,
    posts
  }
})
