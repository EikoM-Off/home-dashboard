import { getDatabase, onValue, ref, push, update, remove } from 'firebase/database'
import hash from 'object-hash'
import app from '@/main'

const db = getDatabase()

export default {
  actions: {
    createFromIngredientsOrNewList (state, data = { title: 'Новый список', ingredients: ['Введите наименование'] }) {
      const list = {
        settings: {
          title: data.title
        },
        items: data.ingredients.map(el => {
          return { title: el, isDone: false }
        })
      }
      push(ref(db, 'shopToDoLists'), list).then(() => {
        app.config.globalProperties.$toast.add({ severity: 'success', summary: 'Ура!', detail: `Успешно создан список "${data.title}"`, group: 'br', life: 3000 })
      })
    },
    /* updateShopToDoLists ({ state }) {
      set(ref(db, 'shopToDoLists'), state.shopToDoLists).then(r => {})
    }, */
    updateShopToDoLists ({ state }, data) {
      update(ref(db, 'shopToDoLists/' + data.listId), data.items).then(r => {})
    },
    addShopItem ({ state }, listId) {
      push(ref(db, `shopToDoLists/${listId}/items`), { title: 'Введите наименование', isDone: false })
    },
    removeShopItem ({ state }, data) {
      remove(ref(db, `shopToDoLists/${data.listId}/items/${data.itemId}`)).then(r => {})
    },
    removeShopToDoLists ({ state }, listId) {
      remove(ref(db, 'shopToDoLists/' + listId)).then(r => {})
    },
    getShopToDoLists ({ commit }) {
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
