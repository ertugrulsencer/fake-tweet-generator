<template>
  <div class="wrapper">
    <Header />
    <Settings />
    <main>
      <Tweet />
    </main>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import SideBar from "@/components/shared/SideBar";
import Tweet from "./components/Tweet";
export default {
  name: "App",
  components: {
    Header,
    Settings: SideBar,
    Tweet,
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
