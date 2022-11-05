import {
  getDatabase,
  onValue,
  push,
  ref,
  update,
  remove
} from 'firebase/database'

const db = getDatabase()
export default {
  actions: {
    // eslint-disable-next-line no-unused-vars
    pushNewRecipe({ commit }, recipe) {
      push(ref(db, 'recipes'), recipe).then(() => {})
    },
    // eslint-disable-next-line no-unused-vars
    updateRecipe({ state }, data) {
      update(ref(db, `recipes/${data.id}`), data.recipe).then(() => {})
    },
    // eslint-disable-next-line no-unused-vars
    removeRecipe({ state }, id) {
      remove(ref(db, `recipes/${id}`)).then(() => {})
    },
    getRecipes({ commit }) {
      const starCountRef = ref(db, 'recipes')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        commit('setRecipesList', data)
      })
    }
  },
  mutations: {
    setRecipesList(state, data = []) {
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
