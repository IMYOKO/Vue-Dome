<template>
  <div class="components">
    123
    {{id}}
    <button @click="getId(1)">点击1</button>
    <button @click="getId(2)">点击2</button>
    <button @click="getId(3)">点击3</button>
    <com :id="id"></com>
  </div>
</template>

<script>
import com from './com'
export default {
  data () {
    return {
      id: 1
    }
  },
  mounted () {
    this.id = Number(this.$route.query.id);
    this.getId(this.$route.query.id);
    this.getData(this.id);
  },
  watch: {
    $route: function () {
      this.getData(this.id);
    }
  },
  methods: {
    getId(id) {
      this.id = Number(id);
      this.$router.push({ path: '/componentsVue', query:{ id: id } })
    },
    getData(id) {
      console.log(id)
    }
  },
  components: {
    com
  }
}
</script>

<style lang="scss" scoped>

</style>