<script setup>
import Navbar from "../components/navbar/Navbar.vue";
import Skills from "../components/Skills.vue";
import Me from "../components/me.vue";
import Home from "../components/Home.vue";
import Projets from "../components/Projects.vue";
import GitHubProjects from "../components/Github/GitHubProjects.vue";
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <div id="app" class="bg-gray-950">
    <Navbar />
    <Home />
    <SpeedInsights />
    <div id="HomeView">
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
  </div>
</template>
