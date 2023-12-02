<template>
  <div>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold">
          <RouterLink to="/" class="text-white"> Accueil </RouterLink>
        </div>

        <div class="flex space-x-4">
          <RouterLink
            to="/about"
            class="hover:bg-gray-600 px-4 py-2 rounded"
            active-class="bg-gray-600"
          >
            À propos
          </RouterLink>
          <RouterLink
            to="/competences"
            class="hover:bg-gray-600 px-4 py-2 rounded"
            active-class="bg-gray-600"
          >
            Compétences
          </RouterLink>
          <RouterLink
            to="/portfolio"
            class="hover:bg-gray-600 px-4 py-2 rounded"
            active-class="bg-gray-600"
          >
            Portfolio
          </RouterLink>
          <RouterLink
            to="/contact"
            class="hover:bg-gray-600 px-4 py-2 rounded"
            active-class="bg-gray-600"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
