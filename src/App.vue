<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarPage from './components/NavbarPage.vue'

</script>

<template>
  <NavbarPage/>
  <RouterView :key="$route.fullPath"/>
</template>

<style scoped>

</style>
