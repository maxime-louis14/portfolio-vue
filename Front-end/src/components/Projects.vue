<template>
  <div class="flex flex-col items-center py-20 md:py-28" id="Projects">
    <div class="w-full md:w-1/2 text-center px-4">
      <h1 class="text-4xl font-semibold text-white">
        Projets personnels
      </h1>
      <p class="mt-5 text-white text-lg">
        Sur mon portfolio, vous découvrirez mes projets, à la fois issus de mes
        réalisations d'école et personnels, incluant le scraping web,
        l'hébergement d'images et IDK Solution une réalisation d'école.
      </p>
    </div>

    <div class="flex flex-col justify-between space-y-16">
      <!-- Slide 1 -->
      <div class="flex flex-col md:flex-row items-center mb-8 mt-28">
        <!-- Image -->
        <img
          src="../../public/assets/images/Projet_GitHub/Docker-Scraper.png"
          class="object-cover w-full md:w-1/3 h-auto rounded-lg"
        />

        <!-- Contenu -->
        <div
          class="flex-1 md:w-1/2 bg-gray-800 p-6 rounded-lg mt-4 md:mt-0 md:ml-6"
        >
          <h2 class="text-2xl font-semibold text-white">Scrappeur Web</h2>
          <p class="text-white text-sm whitespace-pre-line mt-5 w-">
            Voici mon scrappeur réalisé en Golang avec l'API. Ce projet a été
            réalisé dans un cadre scolaire. Le scrappeur est un programme
            informatique conçu pour extraire des données d'un site web de
            manière automatisée. En utilisant le langage de programmation Golang
            et l'API, nous avons développé un outil capable de récupérer des
            informations spécifiques à partir de différentes sources en ligne.
            Cette expérience nous a permis d'approfondir nos compétences en
            programmation, de comprendre les concepts liés au web, aux
            protocoles HTTP, ainsi que de nous familiariser avec le traitement
            de données. Ce projet a été une opportunité d'apprentissage pratique
            enrichissante dans un environnement scolaire.
          </p>
          <p class="text-white text-sm mt-7">
            <strong>Construit avec:</strong> Golang, MySQL (SQL)
          </p>

          <!-- Bouton GitHub -->
          <a
            href="https://github.com/maxime-louis14/go_api__scrapper_mysql_docker"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gray-700 text-white px-4 py-2 rounded mt-5 hover:bg-gray-600"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="flex flex-col md:flex-row items-center mb-8 pt-28">
        <!-- Contenu -->
        <div
          class="flex-1 md:w-1/2 bg-gray-800 p-6 rounded-lg mt-4 md:mt-0 md:mr-6"
        >
          <h2 class="text-2xl font-semibold text-white">
            Formulaire de sondage
          </h2>
          <p class="text-white text-sm whitespace-pre-line mt-5">
            Le projet IDK Solutions propose une approche novatrice pour
            améliorer l'expérience du trading pour les professionnels. L'équipe
            reconnaît l'importance de l'innovation dans ce domaine dynamique et
            vise à redéfinir complètement l'interface du trader. Leur mission
            stratégique consiste à comprendre en profondeur les besoins et les
            défis des traders professionnels. Ce site est un projet d'école et
            une première version pour recueillir des données des traders.
          </p>
          <p class="text-white text-sm mt-7">
            <strong>Construit avec:</strong> Vue.js, Golang, MongoDB (NoSQL)
          </p>

          <!-- Bouton GitHub -->
          <a
            href="https://github.com/maxime-louis14/fintech-IDK_Solutions"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gray-700 text-white px-4 py-2 rounded mt-4 hover:bg-gray-600"
          >
            Voir sur GitHub
          </a>
        </div>

        <!-- Image -->
        <img
          src="../../public/assets/images/Projet_GitHub/IDK-Solutions.png"
          class="object-cover w-full md:w-1/3 h-auto rounded-lg mt-4 md:mt-0"
        />
      </div>

      <!-- Slide 3 -->
      <div class="flex flex-col md:flex-row items-center mb-8 pt-28">
        <!-- Image -->
        <img
          src="../../public/assets/images/Projet_GitHub/Home-IDK.png"
          class="object-cover w-full md:w-1/3 h-auto rounded-lg mt-4 md:mt-0"
        />

        <!-- Contenu -->
        <div
          class="flex-1 md:w-1/2 bg-gray-800 p-6 rounded-lg mt-4 md:mt-0 md:ml-6"
        >
          <h2 class="text-2xl font-semibold text-white">
            Hébergement d'images
          </h2>
          <p class="text-white text-sm whitespace-pre-line mt-5">
            Ce projet consiste en un service d'hébergement d'images appelé "A3
            Dev - NWS ImageShack". L'objectif de ce service est de permettre aux
            utilisateurs de partager facilement leurs images drôles et leurs
            exemples de code. Les utilisateurs peuvent s'inscrire, uploader des
            images, les gérer et les rendre accessibles au public ou privées.
          </p>
          <p class="text-white text-sm mt-7">
            <strong>Construit avec:</strong> Vue.js, Golang, MongoDB (NoSQL)
          </p>

          <!-- Bouton GitHub -->
          <a
            href="https://github.com/maxime-louis14/ImageShack"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gray-700 text-white px-4 py-2 rounded mt-4 hover:bg-gray-600"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2rem;
  }
}
</style>
