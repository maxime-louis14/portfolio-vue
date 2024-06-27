<template>
  <div class="flex flex-col items-center py-20 md:py-28" id="Skills">
    <div class="w-full md:w-1/2 text-center px-4">
      <h1 class="text-5xl font-semibold text-white">
        Compétences et Expérience
      </h1>
      <p class="mt-5 text-lg text-white">
        En tant que spécialiste des langages back-end, je possède une solide
        expertise dans des technologies telles que Golang, Node.js et C#. Je
        suis actuellement en transition vers le domaine du DevOps et je vais
        débuter un mastère à la rentrée pour approfondir mes compétences.
        Parallèlement, je m'engage activement dans une veille technologique
        approfondie, explorant de nouvelles plateformes et logiciels pour rester
        à jour et anticiper les évolutions du domaine.
      </p>
    </div>

    <div class="flex flex-wrap justify-center max-w-screen-lg mt-5 px-4">
      <div v-for="(skill, index) in orderedSkills" :key="index" class="mb-5">
        <img
          class="w-20 mr-4"
          :src="`/assets/images/logo-skills/${skill.icon}`"
          :alt="skill.name"
        />
        <p class="text-sm text-center pt-3 font-semibold">{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const skills = ref([
  { name: "Golang", icon: "go-svgrepo-com.svg", order: 1 },
  { name: "Node", icon: "node-16-svgrepo-com.svg", order: 2 },
  { name: "C#", icon: "skill-icons--cs.svg", order: 3 },
  { name: "Docker", icon: "docker-svgrepo-com.svg", order: 4 },
  { name: "Vue", icon: "vue-js-svgrepo-com.svg", order: 5 },
  { name: "React", icon: "react-16-svgrepo-com.svg", order: 6 },
  { name: "JavaScript", icon: "js01-svgrepo-com.svg", order: 7 },
  { name: "Linux", icon: "devicon--debian.svg", order: 8 },
  { name: "HTML", icon: "html5-02-svgrepo-com.svg", order: 9 },
  { name: "CSS", icon: "css3-02-svgrepo-com.svg", order: 10 },
  { name: "TDD", icon: "file-icons--test-go.svg", order: 11 },
  { name: "Test Unitaires", icon: "vscode-icons--file-type-vscode-test.svg", order: 12 },
  { name: "GitHub", icon: "github-142-svgrepo-com.svg", order: 13 },
  { name: "Git", icon: "git-svgrepo-com.svg", order: 14 },
  { name: "MySQL", icon: "mysql-svgrepo-com.svg", order: 15 },
  { name: "MongoDB", icon: "mongodb-svgrepo-com.svg", order: 16 }
]);

const orderedSkills = computed(() => {
  return skills.value.sort((a, b) => a.order - b.order);
});
</script>

<style scoped>
/* Styles spécifiques pour le composant Skills */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 3rem; /* Réduire la taille du titre sur mobile */
  }
}
</style>
