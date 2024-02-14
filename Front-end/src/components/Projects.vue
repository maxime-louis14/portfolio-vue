<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
</script>

<template>
  <div class="h-full">
    <div class="flex flex-col items-center justify-center" id="Projects">
      <div class="w-1/3">
        <h1 class="text-6xl font-semibold text-white text-center">
          Portfolio & Previous Projects
        </h1>
      </div>
      <div class="w-1/3 mt-5">
        <p class="text-white text-lg text-center">
          Sur mon portfolio, vous découvrirez mes projets, à la fois issus de
          mes réalisations d'école et personnels, incluant le scraping web,
          l'hébergement d'images et le jeu du pendu.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-between px-12">
      <!-- Slide 1 -->
      <div class="flex items-center mb-8 pt-32" data-aos="zoom-in-up">
        <!-- Image -->
        <img
          src="../../public/assets/images/Projet_GitHub/Docker-Scraper.png"
          class="object-cover w-1/3 h-2/5 mr-4 rounded-lg"
        />

        <!-- Contenu -->
        <div class="flex-1">
          <h2 class="text-4xl font-semibold text-white ml-12">Scrappeur Web</h2>
          <!-- Paragraphe -->
          <p class="text-white text-lg whitespace-pre-line ml-12 mr-5 mt-5">
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
          <p class="text-white ml-12 mt-7">
            <strong>Construit avec:</strong> Golang, MySQL (SQL)
          </p>

          <!-- Bouton GitHub -->
          <a
            href="https://github.com/maxime-louis14/go_api__scrapper_mysql_docker"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gray-800 text-white px-4 py-2 rounded mt-5 hover:bg-gray-700 mx-auto ml-12"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="flex items-center mb-8 pt-32">
        <!-- Contenu -->
        <div class="flex-1">
          <h2 class="text-4xl font-semibold text-white">
            Formulaire de sondage
          </h2>
          <!-- Paragraphe -->
          <p class="text-white text-lg whitespace-pre-line mt-5 mr-24">
            Le projet IDK Solutions propose une approche novatrice pour
            améliorer l'expérience du trading pour les professionnels. L'équipe
            reconnaît l'importance de l'innovation dans ce domaine dynamique et
            vise à redéfinir complètement l'interface du trader. Leur mission
            stratégique consiste à comprendre en profondeur les besoins et les
            défis des traders professionnels. Ce site est un projet d'école et
            une première version pour recueillir des données des traders.
          </p>
          <p class="text-white mt-7">
            <strong>Construit avec:</strong> Vue.js, Golang, MongoDB (NoSQL)
          </p>

          <!-- Bouton GitHub -->
          <a
            href="https://github.com/maxime-louis14/fintech-IDK_Solutions"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gray-800 text-white px-4 py-2 rounded mt-4 hover:bg-gray-700 mx-auto ml-16"
          >
            Voir sur GitHub
          </a>
        </div>

        <!-- Image -->
        <img
          src="../../public/assets/images/Projet_GitHub/IDK-solutions.png"
          class="object-cover w-1/3 h-2/5 mr-4 rounded-lg"
        />
      </div>

      <!-- Slide 3 -->
      <div class="flex items-center pt-32 pb-10">
        <!-- Image -->
        <img
          src="../../public/assets/images/Projet_GitHub/Home-IDK.png"
          class="object-cover w-1/3 h-2/5 mr-4 rounded-lg"
        />

        <!-- Contenu -->
        <div class="flex-1">
          <!-- Paragraphe -->
          <h2 class="text-4xl font-semibold text-white ml-16">
            hébergement d'images
          </h2>

          <p class="text-white text-lg whitespace-pre-line px-16 mt-5">
            Ce projet consiste en un service d'hébergement d'images appelé "A3
            Dev - NWS ImageShack". L'objectif de ce service est de permettre aux
            utilisateurs de partager facilement leurs images drôles et leurs
            exemples de code. Les utilisateurs peuvent s'inscrire, uploader des
            images, les gérer et les rendre accessibles au public ou privées.
          </p>
          <p class="text-white ml-16 mt-7">
            <strong>Construit avec:</strong> Vue.js, Golang, MongoDB (NoSQL)
          </p>

          <!-- Bouton GitHub -->
          <a
            href="https://github.com/maxime-louis14/ImageShack"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gray-800 text-white px-4 py-2 rounded mt-4 hover:bg-gray-700 mx-auto ml-16"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
