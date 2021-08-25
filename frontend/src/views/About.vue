<template>
<main class="about-wrapper">
  <p class="head-line">About me</p>
<main class="about-container">
<img class="abuot-img" src="@/assets/images/me.jpg">
<main class="about-text-container">
<p>HI! I AM <span>Issac Razabi </span> 
	I'm Writing Single Page Applications using Advanced Web Technologies such as <span> Vue, Vuex, NodeJs and much more. </span></p> 
	<p> I am a quick learner, open minded, team player with excellent human relations. 
	I am <span> very passionate </span> to code and finding solutions to complicated logical problems 
  After career retraining from finance into web programming </p>
</main>
</main>
</main>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
  }
  },
  components: {

  },

  computed: {
    
},
  methods: {

  }
}
</script>
<style scoped>
.about-container{
  display: flex;
      gap: 46px;
    align-items: center;
}
.abuot-img{
  border-radius: 50%;
  flex-basis: 50%;
}
.about-text-container{
  flex-basis: 50%;
  
}
.about-wrapper{
   font-family: "latoregular";
  font-size: 1.25rem;
  margin-bottom: 60px;
}
p span {
  color:  red;
  font-size: 1.5rem;
}
.head-line{
      font-family: 'latoregular';
    font-size: 1.5rem;
}
</style>