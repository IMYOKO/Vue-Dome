<template>
  <div class="components">
    zhel
    <div>{{id}}</div>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  },
  data () {
    return {
      text: ''
    }
  },
  watch: {
    id: function() {
      this.getid(this.id);
    }
  },
  mounted () {
    this.getid(this.id);
  },
  methods: {
    getid(id) {
      this.text = id + '内容'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>