<template>
<main class="container">
 <navBar></navBar>
 <router-view :key="$route.path"/>
      
 <appHeader></appHeader> 
<appMain></appMain>
<projectApp></projectApp>
<About></About>
 <Content></Content>
 
<appFooter></appFooter>  
      
</main>
</template>

<script>
import navBar from '../components/nav-bar.vue'
import appFooter from '../components/app-footer.vue'
import projectApp from '../views/projectApp.vue'
import appHeader from '../components/app-header.vue'
import appMain from '../components/app-main.vue'
import About from '../views/About.vue'
import Content from '../views/Content.vue'

export default {
  name: 'Home',
  components: {
    appFooter,
navBar,
projectApp,
appHeader,
appMain,
About,
Content
  }
}
</script>

<style scoped>
     
.container {
  max-width: 1500px;
  margin: 0 auto; }
  @media (max-width: 980px) {
    .container {
      max-width: 740px; } }
  @media (max-width: 740px) {
    .container {
      max-width: 100%; } }
</style>