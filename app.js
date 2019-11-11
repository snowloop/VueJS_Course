Vue.component('hellocomp', {
  template: '<p>Hello my name is {{ name }}.<button v-on:click="changeName">Change my name</button></p>',
  data: function() {
    return {
      name: "Yoshi"
    }
  },
  methods: {
    changeName: function() {
      this.name = "Mario"
    }
  }

})

var appOne = new Vue({
  el: '#app-one',
  methods: {},
  computed: {}
})


var appTwo = new Vue({
  el: '#app-two',
  methods: {},
  computed: {}
})
