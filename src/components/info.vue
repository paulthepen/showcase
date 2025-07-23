<script setup lang="ts">

</script>

<template>
  <div class="info">
    <div class="body">
      <h1 style="text-align: center;">Welcome to Paul Charpie's Web Space</h1>
      <h3 style="text-align: center;">Directions</h3>
      <ul>
        <li>Use arrow keys to move forward, back, left, and right</li>
        <li>Use space to go up, and shift to go down</li>
        <li>Navigate to each planet for more information</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');
.body {
  font-family: "Doto", sans-serif;
}

h1 {
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.5;
  margin: 0.5rem;
}

.info {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(80, 100, 180, 0.7);
  backdrop-filter: blur(3px);
  width: 100%;
  max-width: 600px;
  padding: .25rem .25rem;
  border-radius: 12px 12px 0 0;
  color: rgba(200, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-bottom: none;
  z-index: 10;
}
</style>