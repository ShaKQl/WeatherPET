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
              <img src="../../assets/images/Sunrise.svg" alt="" class="zenit__riseImg" />
              <div class="zenit__riseInfo">
                <p class="zenit__riseHeader">Sunrise</p>
                <p class="zenit__riseTime">06:37 AM</p>
              </div>
            </div>
            <div class="nadir">
              <img src="../../assets/images/Sunset.svg" alt="" class="nadir__Img" />
              <div class="nadir__Info">
                <p class="nadir__Header">Sunset</p>
                <p class="nadir__Time">20:37 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div class="infoWeather">
          <img src="../../assets/images/sun.svg" alt="" class="infoWeather__img" />
          <p class="infoWeather__desc">Sunny</p>
        </div>

        <div class="otherInfo">
          <div class="otherInfo__card">
            <img src="../../assets/images/humidity.svg" alt="" class="otherInfo__img" />
            <p class="otherInfo__desc">41%</p>
            <p class="otherInfo__name">Humidity</p>
          </div>
          <div class="otherInfo__card">
            <img src="../../assets/images/windSpeed.svg" alt="" class="otherInfo__img" />
            <p class="otherInfo__desc">2km/h</p>
            <p class="otherInfo__name">Wind Speed</p>
          </div>
          <div class="otherInfo__card">
            <img
              src="../../assets/images/pressure-white.svg"
              alt=""
              class="otherInfo__img"
            />
            <p class="otherInfo__desc">997hPa</p>
            <p class="otherInfo__name">Pressure</p>
          </div>
          <div class="otherInfo__card">
            <img src="../../assets/images/uv-light.svg" alt="" class="otherInfo__img" />
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

</style>
