<script setup>
import Navbar from "./components/navbar/Navbar.vue";
import { SpeedInsights } from '@vercel/speed-insights/next';


const components = {
  Navbar,
};
</script>

<template>
  <div id="app" class="bg-gray-950">
    <Navbar />
    <SpeedInsights />
  </div>
</template>
