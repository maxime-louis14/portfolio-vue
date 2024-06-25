<script setup>
import Navbar from "./components/navbar/Navbar.vue";
import GitHubProjects from './components/Github/GitHubProjects.vue';

const components = {
  Navbar,
  GitHubProjects
};
</script>

<template>
  <div id="app" class="bg-gray-950">
    <Navbar />
    <GitHubProjects />
  </div>
</template>
