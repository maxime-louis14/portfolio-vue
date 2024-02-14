<script setup>
import AOS from "aos";

AOS.init();
</script>

<template>
  <div class="flex justify-center pl-20" id="Home">
    <div class="text-white mt-64"  data-aos="flip-left" >
      <h1 class="text-4xl font-semibold ">Développeur Full Stack</h1>
      <p class="mt-6 mr-10 font-sans text-lg">
        Développement complet, du front-end au back-end, pour créer des
        applications Web intuitives et performantes.
      </p>
    </div>

    <div class="flex" data-aos="flip-right" data-aos-delay="450">
      <div class="w-full">
        <img
          src="/assets/images/Image-font/26760925_2112.i301.031.S.m004.c13.UI and UX designers concepts isometric composition.svg"
          alt="Full Stack Developer"
          class="w-screen h-screen object-contain"
        />
      </div>
    </div>
  </div>
</template>
