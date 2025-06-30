<script setup lang="ts">
import {onMounted} from "vue";
import setScene from './assets/spaceScene';
import HUDisplay from "./components/HUDisplay.vue";
import PlanetInfo from "./components/PlanetInfo.vue";
import {ref, nextTick} from "vue";

const currentPlanet = ref<string | null>(null);

const displayText = (el: Element) => {
  nextTick(() => {el.classList.add('expanded')})
}

const hideText = (el: Element) => {
  nextTick(() => {el.classList.remove('expanded')})
}

onMounted(() => {
  setScene((planetName: string | null) => {
    currentPlanet.value = planetName;
  });
});
</script>

<template>
  <div id="spaceScene"></div>
  <HUDisplay/>
  <Transition name="slide-down" @after-enter="displayText" @leave="hideText">
    <PlanetInfo
        v-if="currentPlanet"
        :visible="true"
        :planetName="currentPlanet"
        @close="currentPlanet = null"
    />
  </Transition>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
  color: rgba(200, 255, 255, 0.9);
}
.slide-down-enter-from,
.slide-down-leave-to {
  top: -50%;
  color: rgba(255,255,255,0);
}
</style>
