<template>
  <div class="main">
    <div class="main__wrapper">
      
      <div class="main__today">
        <p class="main__city">Athens</p>
        <p class="main__time">09:03</p>
        <p class="main__date">Thursday, 31 Aug</p>
      </div>

      <div class="info">
        <div class="info__data">
          <div class="info__temperature">
            <p class="info__tempo">24°C</p>
            <p class="info__feelsLike">Feels like: 22°C</p>
          </div>

          <div class="zenit">
            <img src="../assets/images/Sunrise.svg" alt="" class="zenit__riseImg" />
            <div class="zenit__riseInfo">
              <p class="zenit__riseHeader">Sunrise</p>
              <p class="zenit__riseTime">06:37 AM</p>
            </div>
          </div>
          <div class="nadir">
            <img src="../assets/images/Sunset.svg" alt="" class="nadir__Img" />
            <div class="nadir__Info">
              <p class="nadir__Header">Sunset</p>
              <p class="nadir__Time">20:37 AM</p>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/main'; 

.main {
  &__wrapper {
    display: flex;
    gap: 55px;
    align-items: center;
    color: #fff;
}

&__today {
      text-align: center;
      font-weight: 700;
    max-width: 510px;
    width: 100%;
    border-radius: 30px;
    background-color: #444444;
    padding: 50px 107px;
    @include underShadowMove
  }

  &__city{
    font-size: 36px;
    margin-bottom: 30px;
  }

  &__time{
    font-size: 96px;
    font-weight: 700;
    padding: -40px -15px;
  }
}
</style>
