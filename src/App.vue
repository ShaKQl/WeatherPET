<template>
  <div class="header">
    <div class="container">
      <Navbar></Navbar>
      <Main></Main>
      <Bottom></Bottom>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Bottom from "./components/Bottom.vue";
</script>

<style lang="scss" scoped>
.header {
  padding: 65px 80px;
  background: linear-gradient(135deg, #444444, #373636);
  font-family: "Poppins";
  height: 100vh;
}
</style>
