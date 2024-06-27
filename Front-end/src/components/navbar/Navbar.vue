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
              <a href="#Projects" class="hover:bg-gray-600 px-4 py-2 rounded"
                >Réalisations</a
              >

              <!-- Utilisation des images pour LinkedIn et GitHub -->
              <a
                href="https://www.linkedin.com/in/maxime-l-5530941b5/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white"
              >
                <img
                  src="/assets/images/logo-skills/skill-icons--linkedin.svg"
                  alt="LinkedIn"
                  class="w-6 h-6 hover:opacity-75 transition duration-300"
                />
              </a>

              <a
                href="https://github.com/maxime-louis14"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white"
              >
                <img
                  src="/assets/images/logo-skills/skill-icons--github-light.svg"
                  alt="GitHub"
                  class="w-6 h-6 hover:opacity-75 transition duration-300"
                />
              </a>
            </div>
          </div>
          <div v-show="menuOpen" class="md:hidden flex flex-col space-y-2 pb-4">
            <a href="#me" class="hover:bg-gray-600 px-4 py-2 rounded">Profil</a>
            <a href="#Projects" class="hover:bg-gray-600 px-4 py-2 rounded"
              >Réalisations</a
            >

            <!-- Utilisation des images pour LinkedIn et GitHub pour la version mobile -->
            <a
              href="https://www.linkedin.com/in/maxime-l-5530941b5/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              <img
                src="/assets/images/logo-skills/skill-icons--linkedin.svg"
                alt="LinkedIn"
                class="w-6 h-6 hover:opacity-75 transition duration-300"
              />
            </a>

            <a
              href="https://github.com/maxime-louis14"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white"
            >
              <img
                src="/assets/images/logo-skills/skill-icons--github-light.svg"
                alt="GitHub"
                class="w-6 h-6 hover:opacity-75 transition duration-300"
              />
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
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Ajout d'une règle CSS pour les images */
a {
  text-decoration: none;
}

/* Style pour les images */
img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
</style>
