<template>
  <div id="navi">
    <ul>
      <li><router-link to="/" class="bor" @click="emitLinkClicked">STRONA GŁÓWNA</router-link></li>
      <li><router-link to="/aboutus" class="bor" @click="emitLinkClicked">O NAS</router-link></li>
      <li><router-link to="/menu" class="bor" @click="emitLinkClicked">MENU</router-link></li>
      <li><router-link to="/gallery" class="bor" @click="emitLinkClicked">GALERIA</router-link></li>
      <li>
        <router-link to="/offer" class="bor" @click="emitLinkClicked">OFERTA </router-link>
        <img src="@/assets/sub.png" @click="toggleDropdown" @mouseover="showDropdown" @mouseout="hideDropdown" ref="dropdownImg">
        <ul v-if="isDropdownVisible" class="dropdown">
          <li><router-link to="/offer" @click="emitLinkClicked">Submenu 1</router-link></li>
          <li><router-link to="/offer" @click="emitLinkClicked">Submenu 2</router-link></li>
        </ul>
      </li>
      <li><router-link to="/contact" class="bor" @click="emitLinkClicked">KONTAKT</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['link-clicked']);

const emitLinkClicked = () => {
  emit('link-clicked');
};

const isDropdownVisible = ref(false);
const dropdownImg = ref(null);

const showDropdown = () => {
  isDropdownVisible.value = true;
};

const hideDropdown = () => {
  isDropdownVisible.value = false;
};

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<style scoped>
#navi {
  display: flex;
  font-size: 20px;
  font-family: cursive;
}
ul {
  list-style: none;
}
li {
  padding: 3px;
  display: flex;
}
li img {
  width: 30px;
  padding-left: 10px;
}
a {
  text-decoration: none;
  color: black;
}
.dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown li {
  padding: 5px 10px;
}
.dropdown li a {
  color: black;
}
</style>
