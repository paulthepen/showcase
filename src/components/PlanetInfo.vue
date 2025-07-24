<script setup lang="ts">
import family from '@/assets/imgs/family.jpg'

defineProps({
  planetName: String,
  visible: Boolean
});
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="planet-info" v-if="visible">
    <div class="planet-body">
      <h1 style="text-align: center;">{{ planetName }}</h1>
      <div v-if="planetName === 'Portfolio'">
        <a href="https://github.com/paulthepen">View coding projects/samples</a>
        <h3 style="text-align: center">Website Examples</h3>
        <hr/>
        <div style="display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;">
          <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <img
                src="https://image.thum.io/get/https://colonialproperties.com"
                alt="Colonial Properties Screenshot"
                style="width: 50%; max-width: 400px; max-height: 300px; margin: 6px;"
            />
            <h4 style="width: 50%"><a href="https://colonialproperties.com">Colonial Properties</a></h4>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <img
                src="https://image.thum.io/get/https://bearcampcabins.com/"
                alt="Bear Camp Cabins"
                style="width: 50%; max-width: 400px; max-height: 300px; margin: 6px;"
            />
            <h4 style="width: 50%"><a href="https://bearcampcabins.com/">Bear Camp Cabins</a></h4>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <img
                src="https://image.thum.io/get/https://www.compassvacationproperties.com/"
                alt="Compass Properties"
                style="width: 50%; max-width: 400px; max-height: 300px; margin: 6px;"
            />
            <h4 style="width: 50%"><a href="https://www.compassvacationproperties.com/">Compass Properties</a></h4>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <img
                src="https://image.thum.io/get/https://erasmokies.com/"
                alt="ERA"
                style="width: 50%; max-width: 400px; max-height: 300px; margin: 6px;"
            />
            <h4 style="width: 50%"><a href="https://erasmokies.com/">ERA In The Smokies</a></h4>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <img
                src="https://image.thum.io/get/https://www.smcrentals.com/"
                alt="SMCR"
                style="width: 50%; max-width: 400px; max-height: 300px; margin: 6px;"
            />
            <h4 style="width: 50%"><a href="https://www.smcrentals.com/">Smoky Mountain Chalet Rentals</a></h4>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <img
                src="https://image.thum.io/get/https://www.destinrvresort.com"
                alt="Destin RV Beach Resort"
                style="width: 50%; max-width: 400px; max-height: 300px; margin: 6px;"
            />
            <h4 style="width: 50%"><a href="https://www.destinrvresort.com">Destin RV Beach Resort</a></h4>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <img
                src="https://image.thum.io/get/https://totaltruck.parts/"
                alt="Total Truck"
                style="width: 50%; max-width: 400px; max-height: 300px; margin: 6px;"
            />
            <h4 style="width: 50%"><a href="https://totaltruck.parts/">Total Truck Outfitter</a></h4>
          </div>
        </div>
      </div>
      <div v-else-if="planetName === 'About Me'">
        <img :src="family" alt="Family" style="width: 100%; max-width: 400px; margin: 0 auto; display: block;"/>
        <p>Hi, there! I'm Paul, and I’m a tech generalist with a soft spot for clean code, problem-solving, and helping people figure things out. I’ve worked as a full-stack developer, IT support lead, and general-purpose tech guy, and sometimes all of them at once.
          I love getting my hands into systems and making them work better, and I'm always looking for different ways to do that, whether it's spinning up a Docker stack, fixing a stubborn printer, or building my own tools from scratch.
          I enjoy learning, teaching, and taking complex things and making them feel simple. I’ve supported hundreds of devices, built web apps from scratch, and helped small businesses feel a little less overwhelmed by their tech.
          When I’m not solving problems, you’ll usually find me playing guitar, working in the garden, or trying to make my kids laugh. If you’re looking for someone who loves both people and technology, you’re in the right place!</p>
      </div>
      <div v-else-if="planetName === 'Resume'">
        <iframe src="https://registry.jsonresume.org/paulthepen" width="100%" height="600px"></iframe>
      </div>
      <p v-else>{{ planetName }} is currently under construction...</p>
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');
.planet-body {
  opacity: 0;
  font-family: "Doto", sans-serif;
  transition: opacity 0.7s ease;
  font-size: 1.2rem;
  max-height: 90vh;
  overflow-y: auto;
  padding: 0 .5rem;
  margin-bottom: .1rem;
  max-width: 100%;
}

a {
  text-decoration: underline;
  color: #ccc;
}

a:hover {
  color: #fff;
}

li {
  list-style: none;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
}


h1 {
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.5;
  margin: 0.5rem;
}

h3 {
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.5;
  margin: 0.5rem;
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
  max-width: 90%;
  padding: 1rem .25rem;
  border-radius: 0 0 12px 12px;
  color: rgba(200, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-top: none;
  border-left: none;
  z-index: 10;
}

@media (max-width: 800px) {
  .planet-info {
    max-height: calc(100vh - 200px);
  }
  .planet-body {
    max-height: calc(100vh - 225px);
  }
}
</style>