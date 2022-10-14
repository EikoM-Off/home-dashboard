import { getDatabase, onValue, ref, set } from 'firebase/database'

export default {
  actions: {
    updateShopToDoLists ({ state }) {
      const db = getDatabase()
      set(ref(db, 'shopToDoLists'), state.shopToDoLists).then(r => {})
    },
    getShopToDoLists ({ commit }) {
      const db = getDatabase()
      const starCountRef = ref(db, 'shopToDoLists')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        commit('setShopToDoLists', data)
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
    setShopToDoLists (state, data = []) {
      state.shopToDoLists = data
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
    ]
  },
  getters: {
    getShopToDoLists: state => state.shopToDoLists
  }
}
