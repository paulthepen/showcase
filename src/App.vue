<script setup lang="ts">
import {onMounted} from "vue";
import setScene from './assets/spaceScene';
import HUDisplay from "./components/HUDisplay.vue";

onMounted(() => {
  setScene();
});
</script>

<template>
  <div id="spaceScene"></div>
  <HUDisplay/>
</template>

<style scoped>
</style>
