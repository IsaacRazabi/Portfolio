<template>
 <section>
      <section class="list-section">
    <main class="main-list-container">
    
 
  <ul class="ul-clean preview-container">
      <li v-for="project in projects" :key="project._id">
        <projectPreview :project="project"></projectPreview>
      </li>
    </ul>



  
    </main>
    
  </section>

 </section>
</template>

<script>
import projectPreview from "./project-preview.vue";

export default {
  data() {
    return {
     
    };
  },
  props: {
    projects: {
      type: Array,
    },
  },
  methods: {
   
  },
  computed:{
  
  },
  components: {
    projectPreview,
  
  },
  created() {
    window.scrollTo(0, 0);
  },
};

</script>

<style scoped>
.ul-clean{
  list-style-type : none
}

.preview-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;

}
</style>
