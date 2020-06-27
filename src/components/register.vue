<template>
    <div class="container">
<br>
<div class="btn-group change-lang">
  <router-link to='/en' class="btn btn-default change-lang" active-class="active" exact>EN</router-link>
  <router-link to='/fa' class="btn btn-default change-lang" active-class="active" >FA</router-link>
</div>

<br>


<form class="form-horizontal col-md-4 col-xs-4 col-xs-offset-4">
    <br><br><br>
    <div class="form-group">

        <label class="control-lable" for="name">{{$t('name')}} :</label>

        <input type="text" id="name" class="form-control" placeholder="Enter your Name" v-model="name">
        
    </div>
      <div class="form-group">
        <label for="email">{{$t('email')}} : </label>
        <input type="email" id="email" class="form-control " placeholder="Enter your Family">
    </div>
    <hr>
  <router-link :to="`/${$i18n.locale}/mainpage`" class="btn btn-success">{{$t('Sumbit')}}</router-link>
  
</form>

    </div>
</template>


<script>
import CountryFlag from 'vue-country-flag'
export default {
  components: {
        CountryFlag
    },
    computed:{
        name:{
            get(){
          return this.$store.state.name
            },
            set(value){
        return this.$store.commit('changename',value)
            }
        },
    
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


<style  scoped>
h2{
 text-align: center;
}
label{
color: #fff;
font-family : "Nunito", sans-serif;
font-weight: 2000;
letter-spacing: 2px;

}


.change-lang{
  font-family : "Nunito", sans-serif;
  border-radius: 2px;
  font-weight: 800;
  outline: none;
 color: lawngreen;
}
 .change-lang:selected{
  background-color:rgba(0, 0, 0, 0.75);
  }
</style>