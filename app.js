new Vue({
  el: '#app',
  data : {
    name : "Alexandre",
    job : "Web developper"
  },
  methods : {
    greet:time =>{
      return "Good " + time + this.name
    }
  }
})
