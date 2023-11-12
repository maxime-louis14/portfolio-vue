<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="flex justify-between items-center">
      <div class="flex space-x-4">
        <RouterLink
          to="/"
          class="hover:bg-gray-600 px-4 py-2 rounded"
          active-class="bg-gray-600"
        >
          Accueil
        </RouterLink>
        <RouterLink
          to="/About"
          class="hover:bg-gray-600 px-4 py-2 rounded"
          active-class="bg-gray-600"
        >
          About
        </RouterLink>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
