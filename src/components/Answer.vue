<template>
    <div>
  <div class="col-sm-6 col-sm-offset-2">
   
 <input v-if="selected" @change="selected= !selected" class="form-control inputfile" type="text"  v-model.lazy="result">

        </div>
   <br>
  
   <div v-if="!selected" class="alert alert-dark alert-dismissible show" role="alert">
       <h1 class="text-today">{{$t('Today')}}</h1>
  
  <h2 ><input v-show="!selected"  type="checkbox" class="form-check-input big-checkbox" @click="changemode()">
   <strong id="text"  v-show="!selected">{{result}}</strong>
 
    <span  v-show="!selected" @click="closed()" >&times;</span>
 
  </h2>
</div>


    </div>
</template>

<script>
export default {
    data(){
        return{
            value :'',
            result : '',
            selected:true,
           
            
        }
    },


  mounted() {
    if (localStorage.result) {
      this.result = localStorage.result;
    }
    if(localStorage.selected){
      this.selected =false
    }
  },
  watch: {
    result(newresult) {
      localStorage.result = newresult;
    },
      selected(newselected) {
      localStorage.selected = newselected;
    }
  },


    methods:{
        closed(){

        this.selected=!this.selected
        this.result=''
        },
        changemode(){
         if(document.getElementById('text').style.color==="green"){
         document.getElementById('text').style.color="white"
         }else{
            document.getElementById('text').style.color="green"
         }
           
        },
   
    },

}
</script>
