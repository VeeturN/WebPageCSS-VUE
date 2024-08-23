<template>
  <nav>
    <div id="contact">
      <div id="contactLeft">
        <b>Masz pytanie?</b>
        <img src="../assets/phone.png"> 123-456-7890
        <img src="../assets/mail.png"> info@dworekcykada.pl
      </div>
      <div id="contactRight">
        <b>Social</b>
        <a href="https://www.facebook.com/dworekcykada/?locale=pl_PL"><img src="../assets/facebook.png"></a>
        <a href="https://www.instagram.com/dworekcykada/"> <img src="../assets/instagram.png"></a>
        <a href="https://www.youtube.com/@dworekcykada"><img src="../assets/youtube.png"></a>
      </div>
    </div>
    <hr>
    <div id="navi">
      <ul>
        <li><router-link to="/" class="bor">STRONA GŁÓWNA</router-link></li>
        <li><router-link to="/aboutus" class="bor">O NAS</router-link></li>
        <li><router-link to="/menu" class="bor">MENU</router-link></li>
        <li><router-link to="/" class="bor"><img src="../assets/LogoB.png" id="logo"></router-link></li>
        <li><router-link to="/gallery" class="bor">GALERIA</router-link></li>
        <li>
          <router-link to="/offer" class="bor">OFERTA</router-link><img src="@/assets/subW.png" id="down">
            <ul class="sub">
              <li><router-link to="/offer">Submenu</router-link></li>
              <li><router-link to="/offer">Submenu</router-link></li>
            </ul>
        </li>
        <li><router-link to="/contact" class="bor">KONTAKT</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
#contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: whitesmoke;
  font-family: cursive;
}
#contactLeft, #contactRight {
  display: flex;
  align-items: center;
}
#contact img {
  width: 20px;
  padding-left: 20px;
  padding-right: 5px;
}
hr {
  border: 1px solid whitesmoke;
}
#navi {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cursive;
}
#down {
  width: 30px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  position: relative;
  display: flex;
  padding-right: 3px;
  padding-left: 3px;
}

.sub {
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  background-color: transparent;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:hover .sub {
  display: block;
}
#logo{
  width: 300px;
}

.bor::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #fff;
  transform: scaleX(0);
  transition: all .5s ease;
  bottom: 0;
  left: 0;
}
.bor:hover::before {
  transform: scaleX(1);
}

nav {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
}

nav a {
  font-weight: bold;
  color: whitesmoke;
  margin: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: grey;
}
</style>
<script setup lang="ts">
</script>
