<script setup lang="ts">
defineProps({
  planetName: String,
  visible: Boolean
});
const emit = defineEmits(["close"]);
const close = () => emit("close");
</script>

<template>
  <div class="planet-info" v-if="visible">
    <div class="planet-body">
      <h2>{{ planetName }}</h2>
      <p>This could be content about {{ planetName }}...</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');
.planet-body {
  opacity: 0;
  font-family: "Doto", sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.5;
  transition: opacity 0.7s ease;
}

.planet-info.expanded .planet-body {
  opacity: 1;
}

.planet-info {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(80, 100, 180, 0.7);
  backdrop-filter: blur(3px);
  margin-bottom: 20px;
  width: 600px;
  padding: 1rem 2rem;
  border-radius: 0 0 12px 12px;
  color: rgba(200, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-top: none;
  border-left: none;
  z-index: 10;
}
</style>