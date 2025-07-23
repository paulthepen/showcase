<script setup lang="ts">
import {onMounted} from "vue";
import setScene from './assets/spaceScene';
import PlanetInfo from "./components/PlanetInfo.vue";
import {ref, nextTick} from "vue";
import info from './components/info.vue';

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

  <Transition name="slide-down" @after-enter="displayText" @leave="hideText">
    <PlanetInfo
        v-if="currentPlanet"
        :visible="true"
        :planetName="currentPlanet"
        @close="currentPlanet = null"
    />
  </Transition>
  <Transition name="slide-down2" @after-enter="displayText" @leave="hideText">
    <div style="position: relative">
      <info v-if="!currentPlanet" :visible="true"/>
    </div>
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
  transition: all 0.25s ease;
  color: rgba(200, 255, 255, 0.9);
}


.slide-down2-enter-from,
.slide-down2-leave-to {
  bottom:-50%;
  color: rgba(255,255,255,0);
}

.slide-down-enter-from,
.slide-down-leave-to {
  top: -50%;
  color: rgba(255,255,255,0);
}
</style>
