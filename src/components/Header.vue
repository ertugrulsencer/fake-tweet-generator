<template>
  <header class="header">
    <strong class="logo">Fake Tweet Generator</strong>
    <ul class="languages">
      <li>Türkçe</li>
      <li>English</li>
    </ul>
    <a href="javascript:return false;" class="share">Paylaş</a>
  </header>
</template>

<script>
export default {
  props: {
    langList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
header.header {
  height: 54px;
}
</style>
