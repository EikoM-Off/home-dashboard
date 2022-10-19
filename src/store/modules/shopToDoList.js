import { getDatabase, onValue, ref, set } from 'firebase/database'
import hash from 'object-hash'

export default {
  actions: {
    updateShopToDoLists ({ state, commit }) {
      const db = getDatabase()
      set(ref(db, 'shopToDoLists'), state.shopToDoLists).then(r => {})
    },
    getShopToDoLists ({ commit }) {
      const db = getDatabase()
      const starCountRef = ref(db, 'shopToDoLists')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        commit('setShopToDoLists', data)
        // commit('generateHashForLists')
      })
    }
  },
  mutations: {
    addList (state, title) {
      state.shopToDoLists
        ? state.shopToDoLists.push({ settings: { title: title }, items: [{ title: 'Введите наименование', isDone: false }] })
        : state.shopToDoLists = [{ settings: { title: 'Новый список' }, items: [{ title: 'Введите наименование', isDone: false }] }]
    },
    removeList (state, index) {
      state.shopToDoLists.splice(index, 1)
    },
    removeDone (state, index) {
      state.shopToDoLists[index].items = state.shopToDoLists[index].items.filter(el => !el.isDone)
    },
    setShopToDoLists (state, data = []) {
      state.shopToDoLists = data
    },
    generateHashForLists (state) {
      state.hashList = []
      state.shopToDoLists.forEach(el => {
        state.hashList.push(hash(el))
      })
    }
  },
  state: {
    shopToDoLists: [
      /* {
        settings: {
          title: 'First List'
        },
        items: [
          {
            title: 'milk',
            isDone: false
          },
          {
            title: 'bread',
            isDone: true
          },
          {
            title: 'tomatoes',
            isDone: false
          }
        ]
      },
      {
        settings: {
          title: 'Second List'
        },
        items: [
          {
            title: 'milk',
            isDone: true
          },
          {
            title: 'bread',
            isDone: true
          },
          {
            title: 'tomatoes',
            isDone: false
          }
        ]
      } */
    ],
    hashList: []
  },
  getters: {
    getShopToDoLists: state => state.shopToDoLists,
    getHashList: state => (index = undefined) => {
      if (index === undefined) return state.hashList
      return state.hashList[index]
    }
  }
}
