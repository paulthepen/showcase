<script setup lang="ts">
import {onMounted} from "vue";
import setScene from './assets/spaceScene';

onMounted(() => {
  setScene();
});
</script>

<template>
  <div id="spaceScene"></div>
</template>

<style scoped>
</style>
