export default {
  actions: {

  },
  mutations: {
    addList (state, title) {
      state.shopToDoLists.push({ title: title, items: [] })
    }
  },
  state: {
    shopToDoLists: [
      {
        title: 'First List',
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
        title: 'Second List',
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
      }
    ]
  },
  getters: {
    getShopToDoLists: state => state.shopToDoLists
  }
}
