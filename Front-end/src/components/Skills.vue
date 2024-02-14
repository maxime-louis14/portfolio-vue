<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>

<template>
  <div class="h-screen">
    <div class="mx-auto w-1/2 text-white" id="Skills">
      <h1 class="text-5xl font-semibold text-center mb-4">
        Skills & Experience
      </h1>
      <p class="text-center text-lg justify-center">
        En tant que professionnel du DevOps, je suis spécialisé dans la mise en
        place d'environnements de développement et de déploiement fluides. Mes
        compétences couvrent un large éventail d'outils et de technologies pour
        garantir des processus automatisés et une gestion efficace du cycle de
        vie des applications.
      </p>
    </div>

    <div
      class="flex mx-auto max-w-screen-md columns-7 mt-5 flex-wrap place-content-center text-white"
    >
      <div
        v-for="(skill, index) in orderedSkills"
        :key="index"
        class="text-center mb-4"
      >
        <img
          class="w-20 pt-4 mr-4"
          :src="`/assets/images/logo-skills/${skill.icon}`"
          :alt="skill.name"
        />
        <p class="text-sm font-semibold">{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "Golang", icon: "go-svgrepo-com.svg", order: 1 },
        { name: "Vue", icon: "vue-js-svgrepo-com.svg", order: 2 },
        { name: "React", icon: "react-16-svgrepo-com.svg", order: 3 },
        { name: "Docker", icon: "docker-svgrepo-com.svg", order: 4 },
        { name: "Node", icon: "node-16-svgrepo-com.svg", order: 5 },
        { name: "JavaScript", icon: "js01-svgrepo-com.svg", order: 6 },
        { name: "GitHub", icon: "github-142-svgrepo-com.svg", order: 12 },
        { name: "Git", icon: "git-svgrepo-com.svg", order: 13 },
        { name: "Ansible", icon: "ansible-svgrepo-com.svg", order: 11 },
        { name: "CSS", icon: "css3-02-svgrepo-com.svg", order: 8 },
        { name: "HTML", icon: "html5-02-svgrepo-com.svg", order: 9 },
        { name: "MySQL", icon: "mysql-svgrepo-com.svg", order: 14 },
        { name: "MongoDB", icon: "mongodb-svgrepo-com.svg", order: 15 }
        // Ajoute d'autres compétences ici
      ]
    };
  },
  computed: {
    orderedSkills() {
      // Trie les compétences par l'ordre spécifié
      return this.skills.sort((a, b) => a.order - b.order);
    }
  }
};
</script>

<style scoped>
/* Ajoute des styles au besoin */
</style>
