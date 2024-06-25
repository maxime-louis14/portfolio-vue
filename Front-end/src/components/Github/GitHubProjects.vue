<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-4">Mes projets GitHub</h2>
    <div v-if="loading" class="text-gray-600">Chargement...</div>
    <div v-if="error" class="text-red-600">{{ error }}</div>
    <ul v-if="projects.length > 0" class="mt-4 space-y-4">
      <li
        v-for="project in projects"
        :key="project.id"
        class="border-b border-gray-300 pb-2"
      >
        <a
          :href="project.html_url"
          target="_blank"
          class="text-blue-500 font-semibold hover:underline"
          >{{ project.name }}</a
        >
        <p class="text-gray-700">{{ project.description }}</p>
        <p v-if="project.language" class="text-gray-500">
          Langage: {{ project.language }}
        </p>
        <p v-if="project.stargazers_count" class="text-gray-500">
          Stars: {{ project.stargazers_count }}
        </p>
        <p v-if="project.forks_count" class="text-gray-500">
          Forks: {{ project.forks_count }}
        </p>
        <!-- Ajoutez d'autres informations selon vos besoins -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const projects = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await fetch(
      "https://api.github.com/users/maxime-louis14/repos",
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      }
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des projets");
    }
    projects.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

console.log('GitHub Token:', githubToken);
</script>

<style>
/* Styles Tailwind CSS ou personnalisés */
</style>
