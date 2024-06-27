<template>
  <div class="flex flex-col md:flex-row items-center py-20 md:py-28" id="me">
    <div class="text-white w-full md:w-1/3 md:ml-36 px-4">
      <h1 class="text-4xl font-semibold">
        Bonjour, Je suis Maxime Développeur full stack
      </h1>
    </div>

    <div
      class="flex items-center justify-center mt-4 md:ml-64 w-full md:w-2/3 px-4"
    >
      <div>
        <p class="text-white text-lg">
          Je suis à la recherche d'une opportunité d'alternance en full-stack,
          avec une expertise particulière en Golang. Titulaire d'un Bac + 3 Chef
          de Projet Digital option Développeur web de Normandie Web School, je
          prévois de débuter un mastère en Lead Développeur full stack à partir
          de septembre 2024 pour approfondir mes compétences. Parallèlement, je
          développe divers projets personnels en Golang, C#, TypeScript, Vue.js
          et React.tsx, ce qui témoigne de ma polyvalence et de ma passion pour
          l'innovation technologique.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>

<style scoped>
/* Exemple de règle CSS pour rendre un composant responsive */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 3rem;
  }
}
</style>
