<template>
  <div>
<app-header></app-header>
<app-animals></app-animals>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Animals from './components/Animals.vue';

export default {
  name: 'app',
  data: () => {
    return {
      title :"Vue animals"
    }
  },
  methods: {},
  components: {
    "app-header" :Header,
    "app-animals" :Animals,
  }
}
</script>

<style>

</style>
