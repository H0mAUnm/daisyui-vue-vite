<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="flex-1">
      <a class="text-xl normal-case btn btn-ghost">daisyUI</a>
    </div>
    <div class="flex-none">

      <div class="text-xl normal-case btn btn-ghost">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="text-xl normal-case btn btn-ghost">
        <RouterLink to="about">About</RouterLink>
      </div>

    </div>
  </div>


  <RouterView />
</template>

<style scoped></style>
