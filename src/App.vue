<template>
  <PhoneNav v-if="ShowNav" @link-clicked="handleLinkClick"/>
  <div id="asd" :class="{'open': ShowNav}">
    <div id="navi">
      <div class="naviIcon" v-if="MobileNav">
      <img src="@/assets/NavBar.png" @click="ShowNav=!ShowNav">
      </div>
      <ComputerNav v-if="!MobileNav"/>
    </div>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import ComputerNav from './components/ComputerNav.vue';
import { ref, onMounted, onUnmounted } from "vue";
import PhoneNav from "@/components/PhoneNav.vue";

const MobileNav = ref(window.innerWidth <= 900);

const ShowNav = ref(false);

const updateMobileNav = () => {
  MobileNav.value = window.innerWidth <= 900;
  if (window.innerWidth > 900) {
    ShowNav.value = false;
  }
};
const handleLinkClick = () => {
  ShowNav.value = false;
};

onMounted(() => {
  window.addEventListener('resize', updateMobileNav);
  updateMobileNav(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('resize', updateMobileNav);
});
</script>

<style>
body {
  margin: 0;
  background-color: ghostwhite;
}

#asd {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.naviIcon img{
  width: 50px;
  padding: 15px;
}
.open{
  transform: translateX(300px);
}
</style>



