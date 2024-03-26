import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: "Jon",
      last_name: "Snow",
      email: "jon@snow.com"
    },
    products: [
      {
        id: 1,
        name: "Ball",
        price: 100,
      },
      {
        id: 2,
        name: "Shoes",
        price: 200,
      },
      {
        id: 3,
        name: "Socks",
        price: 50,
      },
    ],
    cart: [],
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
    addProduct(state, data) {
      state.cart.push(data);
    },
    removeProduct(state, id) {
      const index = state.cart.findIndex(obj => obj.id === id);
      state.cart.splice(index, 1);
    }
  },
  getters: {
    total(state) {
      return state.cart.reduce(
        (total, item) => total += item.price, 0
      )
    }
  },
  actions: {
  },
})
