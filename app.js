new Vue({
  el: '#app',
  data : {
    name : "Alexandre",
    job : "Web developper",
    website : "https://www.linkedin.com/in/alexandrejosse/",
    websiteTag : '<a href="https://www.linkedin.com/in/alexandrejosse/" target="_blank">My website bis</a>'
  },
  methods : {
    greet:time =>{
      return "Good " + time + this.name
    }
  }
})
