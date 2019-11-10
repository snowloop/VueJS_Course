new Vue({
  el: '#app',
  data: {
    health: 100,
    damage: 0,
    destroyed : false
  },
  methods: {
    punch: function() {
      if (this.damage< 90) {
        this.damage +=10;
      } else {
        this.damage +=10;
        this.destroyed = true
      }
    },
    restart:function(){
      this.destroyed = false;
      this.damage = 0;
    }
  },
  computed: {
    getHealth: function() {
      return this.health - this.damage
    }
  }
})
