import { getAuth, signInWithEmailAndPassword, getRedirectResult, signOut } from 'firebase/auth'

export default {
  actions: {
    loginWithEmailAndPassword ({ commit }, { email, password }) {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          commit('setUser', userCredential.user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.error(errorCode, errorMessage)
        })
    },
    loginWithGoogle ({ commit }) {
      const auth = getAuth()
      getRedirectResult(auth)
        .then((result) => {
          commit('setUser', result.user)
        }).catch((error) => {
        // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          console.error(errorCode, errorMessage)
        })
    },
    tryLogin ({ commit }) {
      const auth = getAuth()
      const user = auth.currentUser
      if (user !== null) {
        commit('setUser', user)
      }
      console.dir(auth.currentUser)
    },
    signOut ({ commit }) {
      const auth = getAuth()
      signOut(auth).then(() => {
        commit('setUser')
      }).catch((error) => {
        console.error(error)
      })
    }
  },
  mutations: {
    setUser (state, data = null) {
      state.user = data
    }
  },
  state: {
    user: null
  },
  getters: {
    getUser: state => state.user
  }
}
