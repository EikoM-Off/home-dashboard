import {
  getDatabase,
  set,
  onValue,
  ref,
  push,
  update,
  remove
} from 'firebase/database'
import hash from 'object-hash'
import app from '@/main'

const db = getDatabase()

export default {
  actions: {
    createFromIngredientsOrNewList(
      state,
      data = { title: 'Новый список', ingredients: ['Введите наименование'] }
    ) {
      const list = {
        settings: {
          title: data.title
        },
        items: data.ingredients.reduce(
          (o, val, key) => ({
            ...o,
            ['item' + key]: { title: val, isDone: false }
          }),
          {}
        )
      }
      console.log(list)
      push(ref(db, 'shopToDoLists'), list).then(() => {
        app.config.globalProperties.$toast.add({
          severity: 'success',
          summary: 'Ура!',
          detail: `Успешно создан список "${data.title}"`,
          group: 'br',
          life: 3000
        })
      })
    },
    /* updateShopToDoLists ({ state }) {
      set(ref(db, 'shopToDoLists'), state.shopToDoLists).then(r => {})
    }, */
    // eslint-disable-next-line no-unused-vars
    updateListSettings({ state }, data) {
      update(
        ref(db, `shopToDoLists/${data.listId}/settings`),
        data.listSettings
      ).then(() => {})
    },
    // eslint-disable-next-line no-unused-vars
    updateShopItems({ state }, data) {
      update(ref(db, `shopToDoLists/${data.listId}/items`), {
        ...data.listData
      }).then(() => {})
    },
    // eslint-disable-next-line no-unused-vars
    addShopItem({ state }, listId) {
      push(ref(db, `shopToDoLists/${listId}/items`), {
        title: 'Введите наименование',
        isDone: false
      })
    },
    // eslint-disable-next-line no-unused-vars
    removeShopItem({ state }, data) {
      remove(ref(db, `shopToDoLists/${data.listId}/items/${data.itemId}`)).then(
        () => {}
      )
    },
    // eslint-disable-next-line no-unused-vars
    removeDoneItems({ state }, data) {
      set(ref(db, `shopToDoLists/${data.listId}/items`), data.listData).then(
        () => {}
      )
    },
    // eslint-disable-next-line no-unused-vars
    removeShopToDoLists({ state }, listId) {
      remove(ref(db, 'shopToDoLists/' + listId)).then(() => {})
    },
    getShopToDoLists({ commit }) {
      const starCountRef = ref(db, 'shopToDoLists')
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        commit('setShopToDoLists', data)
        // commit('generateHashForLists')
      })
    }
  },
  mutations: {
    addList(state, title) {
      state.shopToDoLists
        ? state.shopToDoLists.push({
            settings: { title: title },
            items: [{ title: 'Введите наименование', isDone: false }]
          })
        : (state.shopToDoLists = [
            {
              settings: { title: 'Новый список' },
              items: [{ title: 'Введите наименование', isDone: false }]
            }
          ])
    },
    removeList(state, index) {
      state.shopToDoLists.splice(index, 1)
    },
    removeDone(state, index) {
      state.shopToDoLists[index].items = state.shopToDoLists[
        index
      ].items.filter((el) => !el.isDone)
    },
    setShopToDoLists(state, data = []) {
      state.shopToDoLists = data
    },
    generateHashForLists(state) {
      state.hashList = []
      state.shopToDoLists.forEach((el) => {
        state.hashList.push(hash(el))
      })
    }
  },
  state: {
    shopToDoLists: null,
    hashList: []
  },
  getters: {
    getShopToDoLists: (state) => state.shopToDoLists,
    getShopToDoListsById: (state) => (id) => {
      return state.shopToDoLists[id]
    },
    getHashList:
      (state) =>
      (index = undefined) => {
        if (index === undefined) return state.hashList
        return state.hashList[index]
      }
  }
}
