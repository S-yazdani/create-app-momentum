<template>
<div>
  
<h2 class="clock">{{h}}:{{m}}</h2>


    <h1   class="text-welcome">{{welcome}},
 <input type="input" class="form__field" autocomplete=off :disabled="disable" @change="funcChange()" name="name" id='name' required :value="name"/>

   <button @click="editname()" class="btn edit-dots">
     <i v-if="disable" class="fa fa-ellipsis-h" aria-hidden="true"></i>
     <i v-if="!disable" class="fa fa-pencil-square-o" aria-hidden="true"></i>
   </button>
    </h1>


   <h1 class="question">{{$t('Question')}}</h1>
</div>
</template>


<script>
export default {
data(){
  return {
  
    disable:true,
    welcome:'',
    h : '',
    m :'',
    name:''
  }
},

methods:{
editname(){
 this.disable=!this.disable
},
funcChange(){
this.disable=!this.disable
this.name=document.getElementById('name').value
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
 else if(this.h<21){
this.welcome =" good evening"
 }

 else{
  this.welcome =" good night"
 }

},

mounted(){
if(localStorage.name)this.name= localStorage.name
},
watch: {
    name(newname) {
      localStorage.name = newname;
    }
},
}

</script>



<style scoped>
.form__field {
  font-family: inherit;
  max-width: 200px;
  border: 0;
  outline: 0;
  font-size: 3.3rem;
  color: #fff;
  padding: 2px 0;
  background: transparent;
  transition: border-color 0.2s;
}
 

.question {
  color: snow;
  font-family:"Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 35px;
  text-align: center;
   margin-left: 50px;
}


.clock{
  color: #fff;
  margin-top: 170px;
  margin-left: 60px;
  text-align: center;
  font-size: 120px;
  letter-spacing: 8px;
  font-weight: 300;
}
.text-welcome{
   color: #fff;
  font-weight: 250;
  letter-spacing: 1px;
  font-size: 45px;
  text-align: center;
  margin-top: 0;
  margin-left: 70px;
}

.edit-dots{
 text-align: center;
 text-decoration: none;
 border: none;
 outline: none;
cursor: pointer;
height: 40px;
color: gray;
border-radius: 100%;
padding-left: 14px;
padding-bottom: 10px;
font-size: 18px;
background: none;
background-image: linear-gradient(to bottom,rgba(25,25,25,0.10),rgba(25,25,25,0.30));
 transition:all .5s;
}
.edit-dots:hover{
  background-image: linear-gradient(to bottom,rgba(255,255,255,0.30),rgba(25,25,25,0.80));

}

</style>

