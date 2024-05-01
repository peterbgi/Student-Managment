<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div class="container text-center mt-2">
    <div class="row">
      <div class="col  lh-3 fs-1">
        <RouterLink class="text-black fw-semibold" to="/">Tanulók</RouterLink>
      </div>
      <div class="col lh-3 fs-1">
        <RouterLink class="text-black fw-semibold" to="/add">Hozzáad</RouterLink>
      </div>
    </div>
  </div> 
  <RouterView />

</template>

