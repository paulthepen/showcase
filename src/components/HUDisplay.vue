<script setup lang="ts">

</script>

<template>
  <div id="hud-container"></div>
  <div id="planet-selector-container">
    <div id="planet-selector"></div>
  </div>
</template>

<style scoped>
#hud-container {
  --size: 50px;
  clip-path: polygon(
      var(--size) 0,
      calc(100% - var(--size)) 0,
      100% var(--size),
      100% calc(100% - var(--size)),
      100% 100%,
      0 100%,
      0 calc(100% - var(--size)),
      0 var(--size)
  );
  width: 100%;
  max-width: 700px;
  height: 125px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;

  background: linear-gradient(310deg, rgba(10,55,100,0.4), rgba(100,200,255,0.4));
  backdrop-filter: blur(2px);
  border: 2px solid rgba(255,255,255,0.2);
  border-bottom: 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.8);
  transition: transform 0.5s, box-shadow 0.5s;
}

#planet-selector-container {
  width: 350px;
  height: 175px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  padding: 6px 6px 0 6px;
}

#planet-selector-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0,0.6);
  filter: blur(8px);
  clip-path: polygon(
      var(--size) 0,
      calc(100% - var(--size)) 0,
      100% var(--size),
      100% calc(100% - var(--size)),
      100% 100%,
      0 100%,
      0 calc(100% - var(--size)),
      0 var(--size)
  );
  z-index: -1;
  pointer-events: none;
}

#planet-selector {
  --size: 50px;
  clip-path: polygon(
      var(--size) 0,
      calc(100% - var(--size)) 0,
      100% var(--size),
      100% calc(100% - var(--size)),
      100% 100%,
      0 100%,
      0 calc(100% - var(--size)),
      0 var(--size)
  );

  width: 100%;
  height: 100%;
  overflow: visible;
  position: relative;
  background-image: linear-gradient(
      145deg,
      #646464,
      #a8a8a8,
      #646464
  );
  padding: 20px;
  border: 1px solid rgba(10,10,10,0.8);
  z-index: 1;

  box-shadow:
      inset -5px 3px 5px rgba(0,0,0,0.7),
      inset 5px 3px 5px rgba(0,0,0,0.7);
}


</style>