<template>
  <transition name="fade">
  <p v-if="show">100</p>
</transition>
</template>

<script>
export default {

}
</script>

<style>
.fade-leave {
    opacity: 1
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
    opcaity: 0
}
</style>
