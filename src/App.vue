<template>
  <main>
    <Header />
  </main>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
