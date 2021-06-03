<template>
  <header class="header">
    <div class="container">
      <strong class="logo">Fake Tweet Generator</strong>
      <ul class="languages">
        <li>
          <a :class="{ active: true }" @click.prevent href="#turkish">Türkçe</a>
        </li>
        <li>
          <a :class="{ active: false }" @click.prevent href="#english"
            >English</a
          >
        </li>
      </ul>
      <button v-if="isShareSupport" type="button" class="share" @click="share">
        Paylaş
      </button>
    </div>
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
  grid-column: 2 / 3;
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #2f3336;
  background: #090909;
  .container {
    flex-basis: 94%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      -webkit-text-stroke: 0.8px #f8f8f8;
      color: transparent;
      letter-spacing: 1px;
      font-weight: 700;
      font-size: 1.35rem;
    }
    .languages {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      list-style: none;
      li:not(:last-child) {
        margin-right: 14px;
      }
      a {
        border-radius: 3px;
        background: #141414;
        padding: 8px 12px;
        color: #959595;
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        transition: all 200ms ease-in-out;
        &:hover {
          background: #181818;
          color: #c7c7c7;
        }
        &.active {
          background: #222;
          color: #f7f7f7;
        }
      }
    }
  }
}
</style>
