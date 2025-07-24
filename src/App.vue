<script setup lang="ts">
import {onMounted} from "vue";
import setScene from './assets/spaceScene';
import PlanetInfo from "./components/PlanetInfo.vue";
import {ref, nextTick} from "vue";
import info from './components/info.vue';

const currentPlanet = ref<string | null>(null);
const showInfo = ref<boolean>(true);
const showPlanet = ref<boolean>(false);

const enterPlanet = () => {
    showInfo.value = false;
  setTimeout(() => {
    showPlanet.value = currentPlanet.value !== null;
  }, 500);
}

const leavePlanet = (el: Element) => {
  hideText(el);
  setTimeout(() => {
    showInfo.value = true;
  }, 500);
}

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

  <Transition name="slide-down" @enter="enterPlanet" @after-enter="displayText" @leave="leavePlanet">
    <PlanetInfo
        v-if="currentPlanet"
        :visible="true"
        :planetName="currentPlanet"
        @close="currentPlanet = null"
    />
  </Transition>
  <Transition name="slide-down2" @after-enter="displayText" @leave="hideText">
      <info v-if="showInfo" :visible="true"/>
  </Transition>
</template>

<style scoped>
body {
  overflow: hidden;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
  color: rgba(200, 255, 255, 0.9);
}

.slide-down2-enter-active,
.slide-down2-leave-active {
  transition: all 0.5s ease;
  color: rgba(200, 255, 255, 0.9);
}


.slide-down2-enter-from,
.slide-down2-leave-to {
  top:-100%;
  color: rgba(255,255,255,0);
}

.slide-down-enter-from,
.slide-down-leave-to {
  top: -100%;
  color: rgba(255,255,255,0);
}
</style>
