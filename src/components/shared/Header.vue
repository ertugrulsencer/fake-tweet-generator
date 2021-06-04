<template>
  <header class="header">
    <div class="container">
      <strong class="logo">{{ getLang("title") }}</strong>
      <ul class="languages">
        <li>
          <a
            :class="{ active: $store.state.app_lang == 'turkish' }"
            @click.prevent="changeLang('turkish')"
            href="#turkish"
          >
            Türkçe
          </a>
        </li>
        <li>
          <a
            :class="{ active: $store.state.app_lang == 'english' }"
            @click.prevent="changeLang('english')"
            href="#english"
          >
            English
          </a>
        </li>
      </ul>
      <button v-if="isShareSupport" type="button" class="share" @click="share">
        Paylaş
      </button>
    </div>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isShareSupport: navigator.share !== undefined,
    };
  },
  methods: {
    ...mapMutations(["changeLang"]),
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
  computed: {
    getLang() {
      return (lang) => this.$store.getters.getLang(lang);
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
      -webkit-text-stroke: 0.8px rgb(29, 161, 242);
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
        font-weight: 500;
        font-size: 0.8rem;
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
          color: rgb(29, 161, 242);
        }
      }
    }
  }
}
</style>
