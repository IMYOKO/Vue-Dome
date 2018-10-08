<template>
  <div id="app" @click="aaa">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    aaa() {
      // console.log('aaa')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
