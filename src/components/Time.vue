<template>
<div>
  <br>
<h1 class="clock">{{h}}:{{m}}</h1>
<br>
 
  <h1>{{welcome}} {{name}}</h1>

</div>
  
</template>


<script>


export default {
data(){
  return {
    welcome:'',
    h : '',
    m :'',
   
 
  
  }
},

      computed:{
        name:{
            get(){
          return this.$store.state.name
            },
            set(value){
        return this.$store.commit('changename',value)
            }
        }
    },
  


created(){
 
 setInterval(() => this.m = new Date().getMinutes(), 1000)
 setInterval(() => this.h = new Date().getHours(), 1000)
 
  if(this.h<12){
   this.welcome = "Good Morning"
 }

 else if(this.h<18){
this.welcome ="good afternoon"
 }
 else{
  this.welcome =" good evening"
 }

},


mounted(){
if(localStorage.name){
  this.name= localStorage.name
}
},

watch: {
    name(newname) {
      localStorage.name = newname;
    }

},

}
</script>







