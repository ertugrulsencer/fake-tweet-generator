<template>
  <aside class="side-bar">
    <header>
      {{ getLang("aside_header") }}
    </header>
    <form>
      <fieldset>
        <strong> {{ getLang("user_profile_image") }} </strong>
        <input type="file" />
      </fieldset>
      <fieldset>
        <strong>{{ getLang("settings_user_name") }}</strong>
        <input
          autofocus
          type="text"
          :placeholder="getLang('user_name_placeholder')"
        />
      </fieldset>
      <fieldset>
        <strong> {{ getLang("settings_tweet_header") }} </strong>
        <input type="text" :placeholder="getLang('tweet_header_placeholder')" />
      </fieldset>
      <fieldset>
        <strong> {{ getLang("settings_tweet_content") }} </strong>
        <textarea
          rows="8"
          :placeholder="getLang('tweet_content_placeholder')"
        ></textarea>
      </fieldset>
      <button type="button">
        {{ getLang("generate_tweet") }}
      </button>
    </form>
  </aside>
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
  header {
    padding: 20px 18px;
    color: #ffffff;
    opacity: 0.8;
  }
  form {
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    fieldset {
      border: 2px solid #ffffff22;
      border-radius: 4px;
      padding: 12px;
      width: 100%;
      margin-bottom: 14px;
      strong {
        font-size: 0.95rem;
      }
      input,
      textarea {
        margin-top: 12px;
        width: 100%;
        transition: border-color 250ms ease-in-out, background 250ms ease-in-out;
        &::placeholder {
          color: rgb(29, 161, 242);
          font-weight: 500;
        }
        &:not([type="file"]) {
          padding: 6px 8px;
          font-size: 0.9rem;
          color: #f8f8f8;
          background: transparent;
          border-radius: 3px;
          border: 2px solid #2f3336;
        }
        &:hover {
          border-color: #646464;
        }
        &:focus {
          background: rgba(29, 161, 242, 0.1);
          border-color: rgb(29, 161, 242);
        }
      }
      textarea {
        resize: vertical;
        max-height: 250px;
      }
    }
    button {
      border: 2px solid #333;
      background: transparent;
      border-radius: 24px;
      text-align: center;
      color: #f8f8f8;
      font-weight: 600;
      cursor: pointer;
      padding: 12px 0;
      font-size: 1rem;
      width: 100%;
      transition: all 250ms ease-in-out;
      &:hover {
        border-color: #646464;
        background: rgba(29, 161, 242, 0.15);
      }
      &:focus {
        background: rgba(29, 161, 242, 0.45);
        border-color: rgba(29, 161, 242, 0.8);
        color: #f8f8f8;
      }
      &:active {
        background: rgb(29, 161, 242);
        border-color: rgb(29, 161, 242);
        color: #f8f8f8;
        transform: scale(0.98);
      }
    }
  }
}
</style>
