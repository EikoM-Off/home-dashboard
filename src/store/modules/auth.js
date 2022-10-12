import { getAuth, signInWithEmailAndPassword, getRedirectResult } from 'firebase/auth'

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
          // This gives you a Google Access Token. You can use it to access Google APIs.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          commit('setUser', result.user)
          // The signed-in user info.
          // const user = result.user
        }).catch((error) => {
        // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          console.error(errorCode, errorMessage)
          /*        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ... */
        })
    }
  },
  mutations: {
    setUser (state, data) {
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
