import {
  getAuth,
  signInWithEmailAndPassword,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import router from '@/router'

export default {
  actions: {
    loginWithEmailAndPassword({ commit }, { email, password }) {
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
    loginWithGoogle({ commit }) {
      const auth = getAuth()
      getRedirectResult(auth)
        .then((result) => {
          commit('setUser', result.user)
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          console.error(errorCode, errorMessage)
        })
    },
    tryLogin({ commit }) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit('setUser', user)
        } else {
          router.push('/auth')
        }
      })
    },
    signOut({ commit }) {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          commit('setUser')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  mutations: {
    setUser(state, data = null) {
      state.user = data
    }
  },
  state: {
    user: null
  },
  getters: {
    getUser: (state) => state.user
  }
}
