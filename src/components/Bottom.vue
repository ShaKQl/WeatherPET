<template>
  <div class="forecast container">
    <div class="forecast__wrapper">
      <div class="forecast__dayByDay">
        <div class="forecast__date">
          <img src="../assets/images/Cloudy.png" alt="" class="forecast__img" />
          <p class="forecast__temp">20°C</p>
          <p class="forecast__day">Friday, 1 Sep</p>
        </div>
        <div class="forecast__date">
          <img src="../assets/images/Clouds.svg" alt="" class="forecast__img" />
          <p class="forecast__temp">22°C</p>
          <p class="forecast__day">Saturday, 2 Sep</p>
        </div>
        <div class="forecast__date">
          <img src="../assets/images/sun.svg" alt="" class="forecast__img" />
          <p class="forecast__temp">27°C</p>
          <p class="forecast__day">Sunday, 3 Sep</p>
        </div>
        <div class="forecast__date">
          <img src="../assets/images/Rainy.svg" alt="" class="forecast__img" />
          <p class="forecast__temp">18°C</p>
          <p class="forecast__day">Monday, 4 Sep</p>
        </div>
        <div class="forecast__date">
          <img src="../assets/images/Snowy.svg" alt="" class="forecast__img" />
          <p class="forecast__temp">16°C</p>
          <p class="forecast__day">Tuesday, 5 Sep</p>
        </div>
      </div>

      <div class="hourly">
        <p class="hourly__header">Hourly Forecast:</p>

        <div class="hourly__wrapper">
          <div class="hourly__card">
            <p class="hourly__time">12:00</p>
            <img src="../assets/images/sun.svg" alt="" class="hourly__img" />
            <p class="hourly__temp">26°C</p>
            <img src="../assets/images/navigation.svg" alt="" class="hourly__drctn" />
            <p class="hourly__windSpeed">3km/h</p>
          </div>
          <div class="hourly__card">
            <p class="hourly__time">15:00</p>
            <img src="../assets/images/sun.svg" alt="" class="hourly__img" />
            <p class="hourly__temp">27°C</p>
            <img src="../assets/images/navigation.svg" alt="" class="hourly__drctn" />
            <p class="hourly__windSpeed">2km/h</p>
          </div>
          <div class="hourly__card">
            <p class="hourly__time">18:00</p>
            <img src="../assets/images/Cloudy.png" alt="" class="hourly__img" />
            <p class="hourly__temp">27°C</p>
            <img src="../assets/images/navigation.svg" alt="" class="hourly__drctn" />
            <p class="hourly__windSpeed">2km/h</p>
          </div>
          <div class="hourly__card">
            <p class="hourly__time">21:00</p>
            <img src="../assets/images/Cloudy.png" alt="" class="hourly__img" />
            <p class="hourly__temp">25°C</p>
            <img src="../assets/images/navigation.svg" alt="" class="hourly__drctn" />
            <p class="hourly__windSpeed">3km/h</p>
          </div>
          <div class="hourly__card">
            <p class="hourly__time">00:00</p>
            <img src="../assets/images/sun.svg" alt="" class="hourly__img" />
            <p class="hourly__temp">22°C</p>
            <img src="../assets/images/navigation.svg" alt="" class="hourly__drctn" />
            <p class="hourly__windSpeed">3km/h</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/main";
.forecast {
  margin-top: 50px;
  color: #fff;
  font-weight: 600;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__dayByDay {
    display: flex;
    flex-direction: column;
    max-width: 414px;
    width: 100%;
    border-radius: 30px;
    background: #444;
    
    padding: 20px 15px 2px 30px;
    font-size: 20px;
    @include underShadowMove;
}

&__date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

&__img {
    width: 60px;
    height: 60px;
}
}

.hourly {
    text-align: center;
    width: 100%;
    border-radius: 30px;
    background: #444;
    max-width: 870px;
    padding: 15px 80px;

    &__img {
        width: 80px;
        height: 80px;
    }
    
    &__card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    &__header{
        font-size: 32px;
    }
    
    &__wrapper {
        display: flex;
        align-items: center;
        margin-top: 20px;
        gap: 15px;
    }

    &__card{
        padding: 15px 30м имpx;
        background: #373636;
        border-radius: 40px;
        @include underShadow;
    }
    @include underShadowMove;
}
</style>
