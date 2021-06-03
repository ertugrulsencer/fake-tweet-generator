<template>
  <div class="wrapper">
    <Header />
    <Settings />
    <main></main>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import SideBar from "@/components/shared/SideBar";
export default {
  name: "App",
  components: {
    Header,
    Settings: SideBar,
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
