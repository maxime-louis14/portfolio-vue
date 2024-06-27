<template>
  <div>
    <div id="navbar" class="fixed top-0 w-full z-10">
      <nav class="bg-gray-950 text-white">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <div class="text-2xl font-bold">
              <a href="#Home" class="text-white">Accueil</a>
            </div>
            <button
              @click="toggleMenu"
              class="md:hidden text-white focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div class="hidden md:flex space-x-4">
              <a href="#me" class="hover:bg-gray-600 px-4 py-2 rounded"
                >Profil</a
              >
              <!-- <a href="#Skills" class="hover:bg-gray-600 px-4 py-2 rounded">Skills</a> -->
              <a href="#Projects" class="hover:bg-gray-600 px-4 py-2 rounded"
                >Réalisations</a
              >
      
            </div>
          </div>
          <div v-show="menuOpen" class="md:hidden flex flex-col space-y-2 pb-4">
            <a href="#me" class="hover:bg-gray-600 px-4 py-2 rounded">Profil</a>
            <!-- <a href="#Skills" class="hover:bg-gray-600 px-4 py-2 rounded">Skills</a> -->
            <a href="#Projects" class="hover:bg-gray-600 px-4 py-2 rounded"
              >Réalisations</a
            >
          
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
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Exemple de règle CSS pour rendre un composant responsive */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 3rem;
  }
}
</style>
