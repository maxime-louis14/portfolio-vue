<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-4 text-white">Mes projets GitHub</h2>

    <!-- Affichage du chargement -->
    <div v-if="loading" class="text-white">Chargement...</div>

    <!-- Affichage des erreurs -->
    <div v-if="error" class="text-red-600">{{ error }}</div>

    <!-- Grille de projets -->
    <div
      v-if="projects.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-gray-800 rounded-lg p-4"
      >
        <a
          :href="project.html_url"
          target="_blank"
          class="text-blue-500 font-semibold hover:underline"
          >{{ project.name }}</a
        >
        <p class="text-gray-300 mt-2">{{ project.description }}</p>
        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center text-gray-400 space-x-2">
            <p v-if="project.language">Langage: {{ project.language }}</p>
            <p v-if="project.stargazers_count">
              Stars: {{ project.stargazers_count }}
            </p>
            <p v-if="project.forks_count">Forks: {{ project.forks_count }}</p>
          </div>
          <!-- Ajoutez d'autres informations selon vos besoins -->
        </div>
      </div>
    </div>

    <!-- Si aucun projet n'est chargé -->
    <div v-else class="text-white">Aucun projet trouvé.</div>
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

console.log("GitHub Token:", githubToken);
</script>

<style>
/* Aucun style Tailwind spécifique nécessaire ici, utilisez si nécessaire */
</style>
