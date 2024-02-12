<template>
  <div class="h-screen">
    <div class="flex flex-col items-center justify-center" id="Projects">
      <div class="w-1/3">
        <h1 class="text-6xl font-semibold text-white text-center">
          Portfolio & Previous Projects
        </h1>
      </div>
      <div class="w-1/3 mt-5">
        <p class="text-white text-lg text-center">
          Sur mon portfolio, vous découvrirez mes projets, à la fois issus de
          mes réalisations d'école et personnels, incluant le scraping web,
          l'hébergement d'images et le jeu du pendu.
        </p>
      </div>
    </div>
    <!-- C'est la section des projets -->
    <div class="flex justify-around mt-8">
      <div class="flex-1">
        <p class="text-white text-lg text-center">Scraping Web</p>
        <img
          src="../../public/assets/images/Projet_GitHub/Scraper-go.png"
          class="rounded-md border-2 border-white w-auto h-auto object-cover mt-5 ml-10"
        />
      </div>

      <div class="flex-1">
        <p class="text-white text-lg text-center">Hébergement d'Images</p>
        <img src="" class="object-contain" />
      </div>
      <div class="flex-1">
        <p class="text-white text-lg text-center">Jeu du Pendu</p>
        <img src="" class="object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
