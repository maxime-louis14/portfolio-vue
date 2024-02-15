<template>
  <div class="flex items-center pt-28" id="Skills">
    <div class="w-1/3 text-white ml-36 pt-8">
      <h1 class="text-5xl font-semibold">Compétences et Expérience</h1>
      <p class="text-lg justify-center mt-5">
        En tant que professionnel du DevOps, je suis spécialisé dans la mise en
        place d'environnements de développement et de déploiement fluides. Mes
        compétences couvrent un large éventail d'outils et de technologies pour
        garantir des processus automatisés et une gestion efficace du cycle de
        vie des applications.
      </p>
    </div>

    <div
      class="flex mx-10 max-w-screen-md mt-5 ml-28 flex-wrap place-content-center text-white"
    >
      <div
        v-for="(skill, index) in orderedSkills"
        :key="index"
        class=" mb-5"
      >
        <img
          class="w-20  mr-4"
          :src="`/assets/images/logo-skills/${skill.icon}`"
          :alt="skill.name"
        />
        <p class="text-sm text-center pt-3 font-semibold">{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>

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

<style scoped></style>
