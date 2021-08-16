<template>
  <main class="header-container">
   <div class="bg-img"></div>
   <div class="interduce">
    <div>Hi ,</div> 
    <div>Im Issac Razabi,</div> 
    <p :v-model="changeText">{{changeText}}</p> 
    <button>Download my resume</button>
   </div>
  </main>
</template>

<script>

export default {
  name: "app-header",
  data() {
    return {
     changeText : '',
     intervalAdd : null,
    word : 'Fullstack developer',
    index:0,
    reduceIndex : 0,
    speed: 350
    };
  },
  components: {
  
  },
  computed: {
    },
  methods: {
    changeWord(){
              this.intervalAdd  =  setInterval(() => {
                if(this.changeText.includes('|')) {
                  this.changeText = this.changeText.replace('|','');
                }
       this.changeText+=this.word[this.index]
     if(this.index<19) this.index++
     else {
       this.changeText=this.word.substr(0,this.word.length-this.reduceIndex) +'|'
    if(this.reduceIndex<9) {
      this.reduceIndex++
      } 
else{
  this.index=10
  this.reduceIndex=0
  }
       }
       }, this.speed);
    },

  },
  created(){

  this.changeWord()
 
  },
  destroy() {
    clearInterval(this.intervalAdd)
    this.intervalAdd = null
  }
}
</script>




<style scoped>
.header-container{
  /* display: flex; */
}
/* .bg-img{
  flex-basis: 50%;
 background-image: url("../assets/images/me.jpg");
 border-radius: 50%;
 height: 390px;
 width: 390px;
 background-repeat: no-repeat;
    background-size: cover;
} */
.interduce{
  /* flex-basis: 50%; */
  font-family: 'latoregular';
  /* font-family: 'latobold'; */
/* font-family: 'eurofbold'; */
  height: 250px;
    text-align: center;
    font-size: 40px;
}
button {background: white; font-family: 'latoregular';font-size: 40px;
    color: #fff;
    padding: 8px;
    align-items: center;
    background-color: #fc3549;
    border: none;
    height: 2.8125rem;
    box-shadow: 0 9px 29px rgb(252 53 73 / 22%);
    border-radius: 30px;
    padding: 0 10px;
    transition: background-color .2s ease-in-out;
}
</style>