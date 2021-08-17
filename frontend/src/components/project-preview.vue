<template>
<section  class="preview-container">
  <div >
  <div class="img-preview">
    <!-- <img class="card" @click="showModal" src="@/assets/images/proj/mine-swippers/2.png"> -->
     <!-- <img class="card" @click="showModal" :src="require(getImg)">  -->
      <img :src="require(`../assets/${project.imgsUrl}.png`)" >
  </div>
  </div>
    <div @click="closeModal" v-bind:class="{ pageBackground:isActive}">
  <section v-bind:class="{show:!isActive}" v-if="project">
    <h1 class="head-line"> {{ project.title }} </h1>
    <div v-bind:class="{projectModal:isActive}">
       <div class="main-display">

        <!-- <p> <img class="arrow-img" src="@/assets/images/floor-graphic-ARROW.jpg"/>{{ project.content }}</p> -->
      <!-- <router-link :to="'/projectApp/' + project._id"
        >Continue Reading</router-link
      > -->
   
  
<span class="main-disaply-text">
   <p> 🟦 about:  {{ project.content }}</p> 
<div> 🟦 Tecnolegies i have been using in this project :</div>
              <ul class="main-disaply-text-list">
                <li class="tech-txt">CANVAS, </li>
                <li class="tech-txt">HTML5, </li>
                <li class="tech-txt">CSS3, </li>
                <li class="tech-txt">MVC, </li>
                <li class="tech-txt">JAVASCRIPT</li>
              </ul>
                 <div class="links">
                   <p>🟦 Go visit : </p>
            <button class="git-btn"> Github</button
            ><button class="blue bg txt"> View the Website</button>
            <!-- <youtube :url=url></youtube> -->
              <!-- <iframe rel=0 autoplay=1 controls=0 width="500" height="320" src="https://www.youtube.com/embed/Rwh7XChd8Mg"> 
 </iframe> -->

 <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/Rwh7XChd8Mg?controls=0" frameborder="0" allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
<!-- <iframe  src="https://vimeo.com/585256386?controls=0?background=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe> -->
    <!-- <iframe data-v-cec65ac8="" src="http://www.youtube.com/embed/Rwh7XChd8Mg?autoplay=1?background=1" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen"></iframe> -->
    <!-- <iframe width="420" height="345" src="http://www.youtube.com/embed/Rwh7XChd8Mg?autoplay=1" frameborder="0" allow='autoplay' allowfullscreen></iframe> -->
                                                                                                                 
       <!-- <iframe  src="//www.youtube.com/embed/Rwh7XChd8Mg?autoplay=1&mute=1&controls=0&loop=1&start=15"  frameborder="0" name="youtube embed" allow="autoplay;fullscreen;encrypted-media" allowfullscreen></iframe> -->
<div class="video">
 <iframe width="100%" height="100%" src="https://res.cloudinary.com/dg6yaccvn/video/upload/v1629139428/mine-swiper-video_toox3e.mp4?autoplay=1&mute=1&controls=0&loop=1&start=25"  frameborder="0" name="youtube embed" allow="autoplay;fullscreen;encrypted-media" allowfullscreen></iframe>
</div>
       <!-- <iframe
            src="https://player.vimeo.com/video/541299038?background=1"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe> -->
          </div>
   </span>
   <div  class="wraaper-display-img">
       <!-- <div    v-for="(img,idx) in project.imgsUrl" :key="idx" class="wraaper-display-img"> -->
   <!-- <img class="main-display-img" :src=getImg> -->
   <!-- <img class="main-display-img" :src=getImg > -->
   <!-- <div v-for="(n,idx) in project.imgsUrl" :key="idx">
    <img v-bind:src="`${n}`"/>
</div> -->
   </div>
    </div>




       
      

    <div>
      <div>
        <div class="image-item placeholder"></div>
        <div class="image-item placeholder1"></div>
        <div class="image-item placeholder2"></div>
      </div>
    </div>
     </div>
  </section>
  </div>
</section>
</template>

<script>
// import youtube from '../components/video-player.vue'
export default {
  props: {
    project: {
      type: Object,
    },
  },
  components: {},
  computed: {
      getImg(){
        let src =  `${this.project.imgsUrl[0]}`
      return src
    },

  },
  methods: {
    showModal(){
      this.isActive=!this.isActive
    },
    closeModal(){
this.isActive=!this.isActive
    }
  },
  data() {
    return {
      isActive:false,
url : this.project.url

    };
  },
  created(){
// window.onclick= ()=>{
//   this.closeModal()
// }
  },

}
</script>

<style scoped>
.img-container{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20% ;
   grid-template-rows: 20% 20% 20% 20% 20% ;
}
.img-container> div:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 5;
    
}
/* .preview-container {
  display: grid;
   grid-template-columns: 20% 20% 20% 20% 20% ;
   grid-template-rows: 33% 33% 33% ;
  grid-gap: 20px;

}
.preview-container > img:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 5;
    
} */
.projectModal {
  background-color: #fff;
  background-image: url(/static/media/element_mountains_flip.b1e12ffb.jpg);
  background-repeat: no-repeat;
  background-position: 100% -25%;
  max-height: 90%;
  overflow-y: scroll;
       opacity: 1;
        transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        z-index: 100;
    pointer-events: none;
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
      font-family: 'latoregular';
font-size: 25px;
max-width: 1240px;
}
.pageBackground{
   top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;

    position: fixed;
    z-index: 1300;
    inset: 0px;


}
.show{  
  display: none;
}
.card{
      grid-column-end: span 2;
    grid-row-end: span 2;
}
.head-line{
        font-family: 'latoregular';
font-size: 40px;
background-color: gainsboro;
max-width: 100%;
margin: 0;
text-align: center;
}
.main-display{
  display: flex;
  gap: 15px;
  /* text-align: center; */
  /* grid-auto-columns: 1fr,1fr,1fr; */
  
}
@media (max-width: 740px) {
  .main-display{
  display: flex;
  flex-direction: column;
}
}
.main-display-img{
  flex-basis: 25%;
  width: 400px;
  height: 300px;
  
  /* width: 100px; */
}
.main-disaply-text{
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
}
.main-disaply-text-list{
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
.arrow-img{
  width: 50px;
  height: 50px;
}

.wraaper-display-img{
  flex-basis: 40%;
}
.video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
   
}

.video iframe {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
}
</style>



  
