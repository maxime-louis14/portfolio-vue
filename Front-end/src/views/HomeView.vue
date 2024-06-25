<template>
  <div id="HomeView">
    <section>
      <Home />
    </section>
    <section>
      <Me />
    </section>
    <section>
      <Skills />
    </section>
    <section>
      <Projets />
    </section>
    <section>
      <GitHubProjects />
    </section>
  </div>
</template>

<script setup>
import Skills from "../components/Skills.vue";
import Me from "../components/Me.vue";
import Home from "../components/Home.vue";
import Projets from "../components/Projects.vue";
import GitHubProjects from "../components/Github/GitHubProjects.vue";

import { SpeedInsights } from "@vercel/speed-insights/next";

// Initialisation de SpeedInsights
const speedInsights = new SpeedInsights();

// Exemple d'utilisation : obtenir les résultats des insights
(async () => {
  try {
    const url = "https://portfolio-maxime-louis-hazel.vercel.app/";
    const results = await speedInsights.getResults(url);
    console.log("Résultats des insights :", results);
  } catch (error) {
    console.error("Erreur lors de la récupération des résultats des insights :", error);
  }
})();
</script>
