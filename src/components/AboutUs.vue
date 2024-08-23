<template>
  <div class="background">
    <div class="background-text">O nas - Dworek Cykada</div>
  </div>
  <div id="main">
    <div class="view1">
      <div class="inside1">
        <h1>MIEJSCE BY ŚWIĘTOWAĆ NAJPIĘKNIEJSZE CHWILE W TWOIMŻYCIU</h1>
          <p>
             spotkania biznesowe, wesela, komunie, szkolenia, studniówki, przyjęcia plenerowe, imprezy okolicznościowe,
             bale inauguracyjne, wieczory panieńskie i kawalerskie, pokazy, chwile relaksu, grillowanie …
          </p>
      </div>
      <div class="inside2">
        <video class="responsive-video" controls>
          <source src="@/assets/Video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="view1">
      <div class="inside2">
        <video class="responsive-video" controls>
          <source src="@/assets/Video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="inside1">
        <h1>ZAPACHY I SMAKI TRADYCYJNEJ KUCHNI</h1>
        <p>
          Naszą specjalnością są dania kuchni polskiej i staropolskiej. Sięgamy do tradycyjnych polskich potraw szafranem pachnących, słodką konfiturą, muszkatołowym kwiatem i aromatycznym miodem. Ach, te domowym sposobem sarny, zające obchędożone, goździkami posypane… Polskich grzybów leśny zapach… Dla Państwa nasz dom weselny wskrzesza historię. W tradycji drzemie przecież potencjał najwspanialszych smaków i najlepszych aromatów. A wszystkiego pilnuje nasz arcy-zdolny szef kuchni.
        </p>
      </div>
    </div>

    <div class="view1">
      <div class="inside1">
        <h1>MIEJSCE BY ŚWIĘTOWAĆ NAJPIĘKNIEJSZE CHWILE W TWOIMŻYCIU</h1>
        <p>
          spotkania biznesowe, wesela, komunie, szkolenia, studniówki, przyjęcia plenerowe, imprezy okolicznościowe,
          bale inauguracyjne, wieczory panieńskie i kawalerskie, pokazy, chwile relaksu, grillowanie …
        </p>
      </div>
      <div class="inside2">
        <video class="responsive-video" controls>
          <source src="@/assets/Video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  </div>
</template>

<style scoped>
#main{
  display: inline-block;
  position: absolute;
  width: 100%;
  top: 51%;
  left: 0;
  color: black;
  font-family: cursive;
  overflow: auto;
}
.view1{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.inside1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
  font-family: cursive;
  padding: 1vw;
}
.inside2 {
  width: 60%;
  height: 100%;
  display: flex;
  padding: 1vw;
}
.responsive-video {
  width: 100%;
  height: 30.25vw; /* 16:9 aspect ratio */
  max-height: 100%;
}

.background{
  background-image: url("@/assets/ZdjęciaWWW/AboutUs.jpg");
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
