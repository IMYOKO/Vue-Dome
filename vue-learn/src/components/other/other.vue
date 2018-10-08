<template>
  <div class="other">
    <button @click="aaa">点击</button>
    <button @click="setType({name: 'dtype', id: true})">aaa</button>
    <button @click="setType({name: 'dtype2', id: false})">bbb</button>
    <div v-if="dtype">显示</div>
    <div v-show="dtype2">显示2</div>
  </div>
</template>

<script>
import store from "@/vuex/store"
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['dtype', 'dtype2'])
  },
  methods: {
    ...mapMutations(['setType']),
    aaa() {
      this.$router.go(-1)
    }
  },
  store
}
</script>

<style lang="scss" scoped>

</style>