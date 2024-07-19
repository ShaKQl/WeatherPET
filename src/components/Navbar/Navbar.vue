
<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

onMounted(() => {
  isDarkMode.value = document.body.classList.contains("dark-mode");
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("dark-mode", isDarkMode.value);
};
</script>




<template>
  <div class="wrapper">
    <div class="dark-mode-toggle" @click="toggleDarkMode">
      <div
        :class="[
          'dark-mode-toggle__switch',
          { 'dark-mode-toggle__switch--dark': isDarkMode },
        ]"
      >
        <div class="dark-mode-toggle__circle"></div>
      </div>
      <span class="dark-mode-toggle__label">Dark Mode</span>
    </div>

    <div class="input">
      <img src="../../assets/images/search.svg" alt="" class="input__inImg" />
      <input
        type="text"
        placeholder="Search for your preffered city..."
        class="input__space"
      />
    </div>

    <div class="currentPlace">
      <button class="currentPlace__btn">
        <img
          src="../../assets/images/current-location.svg"
          alt=""
          class="currentPlace__logo"
        />
        <p class="currentPlace__txt">Current Location</p>
      </button>
    </div>
  </div>
</template>




<style lang="scss" scoped>


</style>
