<template>
  <div class="background">
    <div class="background-text">Kontakt</div>
  </div>
  <div id="main">
    <div id="up">
      <div id="stayInTouch">
        <p>
        <img src="@/assets/Contact/here.png">
          Adres<br>
          Dworek Cykada, Komaszyce 55, <br>
          26-225 Komaszyce, Polska<br>
        </p>
        <p>
        <img src="@/assets/Contact/tele.png">
          Osoba Kontaktowa<br>
          Właścicielka: Jolanta Juszyńska<br>
          663-569-948
        </p>
        <p>
          <img src="@/assets/Contact/mail.png">
          Email:   <br>
          <a href="mailto:info@dworekcykada.pl">info@dworekcykada.pl</a>
        </p>
      </div>
      <div id="forms">
        <form id="contactform" action="https://formsubmit.io/send/dawid.games2121@gmail.com" method="POST">
          <label for="name">Imię:</label><br>
          <input type="text" id="name" name="name"><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email"><br>
          <label for="message">Wiadomość:</label><br>
          <textarea id="message" name="message"></textarea><br>
          <input type="submit" value="Wyślij">
        </form>
      </div>
    </div>
    <div id="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.4597457836776!2d20.451133711939484!3d51.247443971637516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719b619b0ef8b0b%3A0x3b6acdbef3f9795a!2sDworek%20Cykada%20-%20sala%20weselna%20Ko%C5%84skie%20-%20Komaszyce!5e0!3m2!1spl!2snl!4v1724058346112!5m2!1spl!2snl"
              style="border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<style scoped>
#main{
  position: absolute;
  top: 51%;
  left: 0;
  color: black;
  font-family: cursive;
  width: 100%;
  height: 100%;
}
#stayInTouch{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}
#forms{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
input[type="text"], input[type="email"], textarea{
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}
input[type="submit"]{
  width: 50%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type="submit"]:hover{
  background-color: #45a049;
}

p{
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 1vw;
  margin: 0;
}


.background{
  background-image: url("@/assets/ZdjęciaWWW/Kontakt.jpg");
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
#up{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw;
}
#map{
  width: 100%;
  height: 50%;
}
iframe{
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  #up {
    flex-direction: column;
  }
}
</style>
<script setup lang="ts">
</script>
