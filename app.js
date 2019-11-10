new Vue({
  el: '#app',
  data: {
    name: "ALex",
    age: 2,
  },
  methods: {
    updateName: function(event) {
      console.log(event)
      this.name = event.srcElement.value
    },
    updateAge: function(event) {
      this.age = event.srcElement.value
    }
  }
})
