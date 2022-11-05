import {getDatabase, onValue, push, ref} from 'firebase/database'

const db = getDatabase()
export default {
  actions: {
    // eslint-disable-next-line no-unused-vars
    pushNewRecipe ( { commit }, recipe ) {
      push(ref(db, 'recipes'), recipe).then(() => {
      })
    },
    getRecipes ( { commit }) {
      const starCountRef = ref(db, 'recipes')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        commit('setRecipesList', data)
      })
    }
  },
  mutations: {
    setRecipesList (state, data = []) {
      state.recipes = data
    }
  },
  state: {
    recipes: []
  },
  getters: {
    getRecipes: (state) => state.recipes,
    getRecipeById: (state) => (id) => state.recipes[id]
  }
}
