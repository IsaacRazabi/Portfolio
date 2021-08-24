<template>
<main class="about-wrapper">
  <p>About me</p>
<main class="about-container">
<img class="abuot-img" src="@/assets/images/me.jpg">
<main class="about-text-container">
<p>•  HI! I AM Issac Razabi</p>
<p>•	I'm Writing Single Page Applications using Advanced Web Technologies such as Vue, Vuex and NodeJs and much more </p>
<p>•	Quick learner, open minded, team player with excellent human relations. </p>
<p>•	I am very passionate to code and finding solutions to complicated logical problems.</p> 
<p>•  After career retraining from finance into web programming </p>
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
  font-size: 25px;
}
</style>