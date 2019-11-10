new Vue({
  el: '#app',
  data: {
    age: 0,
    x:0,
    y:0,
  },
  methods: {},
  computed :{
    returnAX : function(){
      return this.age + this.x
    },
    returnAY : function(){
      return this.age + this.y
    }
  }
})
