import { defineStore } from 'pinia';

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    username: "",
    token: ""
  }),
  actions: {
    setToken(val) {
      this.token = val
    },
    setUser(val) {
      this.username = val
    }
  }
})