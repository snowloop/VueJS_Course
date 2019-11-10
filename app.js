new Vue({
  el: '#app',
  data: {
available :true,
empty :true
  },
  methods: {},
  computed :{
    compClass:function(){
      return {
        empty : this.empty
      }
    }
  }
})
