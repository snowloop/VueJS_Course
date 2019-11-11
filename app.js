new Vue({
  el: '#app-one',
  data :{
    output : "It's empty"
  },
  methods: {
    readRefs : function(){
      console.log(this.$refs)
      this.output = this.$refs.input.value
    }
  },
  computed: {}
})
