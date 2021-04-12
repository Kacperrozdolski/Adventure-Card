<template>
  <img src="../assets/cloud.png" class="Once1" />
  <img src="../assets/cloud.png" class="Once2" />
  <img src="../assets/cloud.png" class="Infinite1" />
  <img src="../assets/cloud.png" class="Infinite2" />
  <img src="../assets/cloud.png" class="Infinite3" />
  <img src="../assets/cloud.png" class="Infinite4" />
</template>

<script>
export default {
  name: "CloudsAnimation",
};
</script>

<style>
.Once1 {
  top: 50px;
  position: absolute;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-name: cloudsOnce1;
  animation-fill-mode: forwards;
  width: 500px;
  height: auto;
}
.Once2 {
  top: 50px;
  position: absolute;
  animation-duration: 60s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-name: cloudsOnce2;
  width: 500px;
  height: auto;
}
.Infinite1 {
  top: 50px;
  position: absolute;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: cloudsInfinite;
  width: 500px;
  height: auto;
}
.Infinite2 {
  top: 50px;
  position: absolute;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 15s;
  animation-fill-mode: both;
  animation-name: cloudsInfinite;
  width: 500px;
}
.Infinite3 {
  top: 50px;
  position: absolute;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 30s;
  animation-fill-mode: both;
  animation-name: cloudsInfinite;
  width: 500px;
}
.Infinite4 {
  top: 50px;
  position: absolute;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 45s;
  animation-fill-mode: both;
  animation-name: cloudsInfinite;
  width: 500px;
}

@keyframes cloudsInfinite {
  0% {
    transform: translate3d(-1030px, 0px, 0px);
  }
  100% {
    transform: translate3d(calc(100% + 520px), 0px, 0px);
  }
}
@keyframes cloudsOnce1 {
  0% {
    transform: translate3d(300px, 0px, 0px);
  }
  100% {
    transform: translate3d(calc(100% + 1830px), 0px, 0px);
  }
}
@keyframes cloudsOnce2 {
  0% {
    transform: translate3d(-400px, 0px, 0px);
  }
  100% {
    transform: translate3d(calc(100% + 1230px), 0px, 0px);
  }
}
</style>
