<template>
  <div>
    <div id="navbar" class="fixed top-0 w-full z-10">
      <nav class="bg-gray-950 text-white">
        <div class="container flex justify-between items-center">
          <div class="text-2xl font-bold">
            <a href="#Home" class="text-white ml-16"> Accueil </a>
          </div>

          <div class="flex space-x-4">
            <a href="#Home" class="hover:bg-gray-600 px-4 py-2 rounded">
              Home
            </a>
            <a href="#me" class="hover:bg-gray-600 px-4 py-2 rounded"> Profil </a>
            <!-- <a href="#Skills" class="hover:bg-gray-600 px-4 py-2 rounded">
              Skills
            </a> -->
            <a href="#Projects" class="hover:bg-gray-600 px-4 py-2 rounded">
              Projects
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
