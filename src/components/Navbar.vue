
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
      <img src="../assets/images/search.svg" alt="" class="input__inImg" />
      <input
        type="text"
        placeholder="Search for your preffered city..."
        class="input__space"
      />
    </div>

    <div class="currentPlace">
      <button class="currentPlace__btn">
        <img
          src="../assets/images/current-location.svg"
          alt=""
          class="currentPlace__logo"
        />
        <p class="currentPlace__txt">Current Location</p>
      </button>
    </div>
  </div>
</template>




<style lang="scss" scoped>

@import '../assets/main'; 



.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  gap: 25px;
}

.dark-mode-toggle {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  
  &__switch {
    margin-top: 10px;
    width: 100px;
    height: 40px;
    border-radius: 40px;
    background-color: #333;
    position: relative;
    transition: background-color 0.3s ease;

    &--dark {
      background-color: #ccc;

      .dark-mode-toggle__circle {
        background-color: #000;
        transform: translateX(58px);
      }
    }

  }

  &__circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  &__label {
    margin-left: 10px;
    font-size: 18px;
    color: #fff;
    font-weight: 900;
  }
}

.input {
  max-width: 803px;
  width: 100%;

  display: flex;
  padding: 8px 33px;
  background: #444444;
  gap: 30px;
  border-radius: 40px;

  @include underShadow;

  &__space {
    background: none;
    outline: none;
    border: none;
    min-width: 621px;
    width: 100%;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
}




.currentPlace{
  max-width: 292px;
  width: 100%;
  
  &__btn{
      max-width: 292px;
      width: 100%;
        
        display: flex;
        align-items: center;
        padding: 14px 27px;
        border-radius: 40px;
        background: #4CBB17;
        color: #fff;
        font-size: 22px;
        font-weight: 700;
        border: none;
        justify-content: space-between; 

        @include underShadow();
    }

}
</style>
