<template>
  <div class="background">
    <div class="background-text">Menu</div>
  </div>
  <div id="main">
    <h1>TUTAJ POWINNO BYC COS O MENU</h1>
  </div>
</template>

<style scoped>
#main{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 51%;
  left: 0;
  color: black;
}

.background{
  background-image: url("@/assets/ZdjęciaWWW/Menu.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: -1;
}
.background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.background-text {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2vw;
  z-index: 2;
  text-align: center;
  font-family: cursive;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
}
</style>
<script setup lang="ts">
</script>
