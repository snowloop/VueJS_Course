new Vue({
  el: '#app',
  data: {
    age: 25,
    x:1,
    y:1,
  },
  methods: {
    updateXY :function(event){
      this.x = event.offsetX
      this.y = event.offsetY
      this.age++
    }
  }
})
