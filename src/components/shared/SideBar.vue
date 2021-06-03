<template>
  <aside class="side-bar">{{ getLang("aside_header") }}</aside>
</template>

<script>
export default {
  computed: {
    getLang() {
      return (text) => this.$store.getters.getLang(text);
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background: #090909;
  border-right: 1px solid #2f3336;
}
</style>
