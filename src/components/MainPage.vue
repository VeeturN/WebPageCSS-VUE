<template>
  <div v-for="(background, index) in backgrounds" :key="index"
       :class="background"
       class="background"
       :style="{ opacity: currentBackground === index ? 1 : 0 }">
    <div class="background-text">{{ backgroundTexts[index] }}</div>
  </div>
  <div id="buttons">
    <button @click="nextBackground"><img src="@/assets/Left.png"></button>
    <button @click="prevBackground"><img src="@/assets/Right.png"></button>
  </div>
  <div id="main">

  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';

const backgrounds = ['background1', 'background2', 'background3', 'background4', 'background5'];
const backgroundTexts = ['Wesela', 'Przyjęcia okolicznościowe', 'Sala bankietowa', 'Chrzciny', 'Komunie'];

onMounted(() => {
  setInterval(() => {
    currentBackground.value = (currentBackground.value + 1) % backgrounds.length;
  }, 3000);
});

const currentBackground = ref(0);

const nextBackground = () => {
  currentBackground.value = (currentBackground.value + 1) % backgrounds.length;
};

const prevBackground = () => {
  currentBackground.value = (currentBackground.value - 1 + backgrounds.length) % backgrounds.length;
};
</script>

<style scoped>
#main{
  position: absolute;
  top: 101%;
  left: 0;
  color: white;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 1s ease-in-out;
  opacity: 0;
  background-position: center;
}
.background-text {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 5vw;
  z-index: 2;
  text-align: center;
  font-family: cursive;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
}
.background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
#buttons {
  position: absolute;
  right: 20px;
  top: 60%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}
button{
  display: flex;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2%;
  margin: 10px;
  cursor: pointer;
  transition: 0.5s;

}
button img{
  width: 4vw;
}

.background1 {
  background-image: url('../assets/ZdjęciaWWW/back1.png');
}

.background2 {
  background-image: url('../assets/ZdjęciaWWW/back2.jpg');
}

.background3 {
  background-image: url('../assets/ZdjęciaWWW/back3.jpg');
}
.background4 {
  background-image: url('../assets/ZdjęciaWWW/back4.jpg');
}
.background5 {
  background-image: url('../assets/ZdjęciaWWW/back5.jpg');
}
</style>
