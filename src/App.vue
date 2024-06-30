<template>
  <div class="header">
    <Navbar></Navbar>
    <Main></Main>
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
  import Main from './components/Main.vue'
</script>

<style lang="scss" scoped>
  .header{
    padding: 65px 80px;
    background: linear-gradient(135deg, #1a1a1a, #3a3a3a);
    font-family: 'Poppins';
  }
</style>