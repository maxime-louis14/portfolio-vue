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
  </div>
</template>

<script setup>
import Skills from "../components/Skills.vue";
import Me from "../components/me.vue";
import Home from "../components/Home.vue";
import Projets from "../components/Projects.vue";
</script>
