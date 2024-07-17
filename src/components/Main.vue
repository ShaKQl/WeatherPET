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
            <p class="info__feelsLike">
              Feels like:
              <span class="info__feelsLike--numberUp">22°C</span>
            </p>
          </div>

          <div class="updown">
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

        <div class="infoWeather">
          <img src="../assets/images/sun.svg" alt="" class="infoWeather__img" />
          <p class="infoWeather__desc">Sunny</p>
        </div>

        <div class="otherInfo">
          <div class="otherInfo__card">
            <img src="../assets/images/humidity.svg" alt="" class="otherInfo__img" />
            <p class="otherInfo__desc">41%</p>
            <p class="otherInfo__name">Humidity</p>
          </div>
          <div class="otherInfo__card">
            <img src="../assets/images/windSpeed.svg" alt="" class="otherInfo__img" />
            <p class="otherInfo__desc">2km/h</p>
            <p class="otherInfo__name">Wind Speed</p>
          </div>
          <div class="otherInfo__card">
            <img
              src="../assets/images/pressure-white.svg"
              alt=""
              class="otherInfo__img"
            />
            <p class="otherInfo__desc">997hPa</p>
            <p class="otherInfo__name">Pressure</p>
          </div>
          <div class="otherInfo__card">
            <img src="../assets/images/uv-light.svg" alt="" class="otherInfo__img" />
            <p class="otherInfo__desc">8</p>
            <p class="otherInfo__name">UV</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/main";

.main {
  &__wrapper {
    display: flex;
    gap: 55px;
    align-items: center;
    color: #fff;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__today {
    text-align: center;
    font-weight: 700;
    max-width: 510px;
    width: 100%;
    border-radius: 30px;
    background-color: #444444;
    padding: 50px 107px;
    @include underShadowMove;
  }

  &__city {
    font-size: 36px;
    margin-bottom: 30px;
  }

  &__time {
    display: inline-block;
    vertical-align: center;
    // max-width: 285px;
    height: 85px;
    margin-bottom: 8px;
    // width: 100%;
    font-size: 96px;
    font-weight: 700;
    padding: -40px -15px;
  }
}

.info {
  display: flex;
  max-width: 780px;
  width: 100%;
  // justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #444444;
  padding: 15px 25px;
  border-radius: 30px;
  flex-wrap: wrap;

  @include underShadowMove;

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 330px;
    gap: 20px;
  }

  &__tempo {
    font-size: 80px;
    font-weight: 800;

    display: inline-block;
    vertical-align: text-top;
    @include linearGradient;

    height: auto;
    line-height: 70px;
  }

  &__feelsLike {
    padding: 0;
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 10px;

    &--numberUp {
      @include linearGradient;
      font-size: 32px;
      font-weight: 700;
    }
  }
}

.zenit {
  display: flex;
  margin-top: 10px;
}

.nadir {
  margin-top: 10px;
  display: flex;
}

.otherInfo {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  max-width: 247px;
  width: 100%;

  &__card {
    max-width: 108px;
    width: 100%;
    height: 138px;
  }
}


.updown{
  display: flex;
  flex-direction: column;
  gap: 10px;
}



</style>
