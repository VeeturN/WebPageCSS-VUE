<template>
  <div class="background">
    <div class="background-text">Galeria</div>
  </div>
  <div id="main">
    <div class="gallery">
      <ul >
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg" alt="image" />
          </a>
        </li>

        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg" alt="image" />
          </a>

        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="../assets/back3.png" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="../assets/back4.png" alt="image" />
          </a>
        </li>
        <li style="float: left; margin: 5px;">
          <a href="https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg" class="glightbox">
            <img style="height: 105px;" src="../assets/back5.png" alt="image" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import  "glightbox/dist/css/glightbox.css";
import  "glightbox/dist/js/glightbox.js";
import GLightbox from 'glightbox';
export default {

  mounted(){
    //lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox"
    });

  }
}
</script>

<style scoped>
#main{
  position: absolute;
  top: 50%;
  left: 0;
  color: black;
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 50px 8%;
}
.gallery{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
.gallery img{
  width: 100%;
  border-radius: 10px;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}

li {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background{
  background-image: url("@/assets/ZdjęciaWWW/back5.jpg");
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

