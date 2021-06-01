<template>
  <header class="header">
    <strong class="logo">Fake Tweet Generator</strong>
    <ul class="languages">
      <li>Türkçe</li>
      <li>English</li>
    </ul>
    <button v-if="isShareSupport" type="button" class="share" @click="share">
      Paylaş
    </button>
  </header>
</template>

<script>
export default {
  props: {
    langList: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      isShareSupport: navigator.share !== undefined,
    };
  },
  methods: {
    share() {
      if (navigator.share) {
        navigator.share({
          title: "Fake Tweet Generator",
          text: "Free fake tweet generate and download",
          url: location.href,
        });
      } else {
        alert("Tarayıcınız paylaşım özelliğini desteklemiyor.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header.header {
  height: 54px;
}
</style>
