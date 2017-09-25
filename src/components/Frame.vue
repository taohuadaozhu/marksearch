<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}

@import '../assets/common.css';
</style>
