<template>
  <div id="app" class="bg-gray-950 min-h-screen flex flex-col">
    <Navbar />
    <div
      class="flex flex-col md:flex-row items-center justify-center flex-grow"
    >
      <div
        class="text-white w-full md:w-2/5 px-4 md:ml-16 text-center md:text-left"
      >
        <h1 class="text-6xl font-semibold">Développeur Full Stack</h1>
        <p class="mt-6 font-sans text-lg">
          Développement complet, du front-end au back-end, pour créer des
          applications Web intuitives et performantes.
        </p>
        <!-- Bouton CV -->
        <a
          href="../../assets/images/CV_Maxime_Developpeur_web_Alternance_full-stack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded mt-6 hover:bg-blue-500 transition duration-300"
        >
          Télécharger mon CV
        </a>
      </div>
      <div class="hidden md:flex w-full md:w-3/5 justify-center">
        <img
          src="/assets/images/Image-font/26760925_2112.i301.031.S.m004.c13.UI and UX designers concepts isometric composition.svg"
          alt="Full Stack Developer"
          class="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/navbar/Navbar.vue";
</script>

<style scoped>
/* Ajout d'une règle CSS pour le bouton */
a {
  text-decoration: none;
}

/* Styles personnalisés pour la mise en page responsive */
@media (min-width: 768px) {
  .md\:ml-16 {
    margin-left: 4rem; /* Ajustement de la marge gauche sur grand écran */
  }
}
</style>
