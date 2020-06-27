<template>
    <div class="col-sm-12">
  
    
  <div v-if="selected " class="col-sm-5 col-sm-offset-3">
  <input @change="selected=!selected" type="input" class="form__field" autocomplete=off  name="name" id='name' required v-model.lazy="result"/>
  </div>


  <div class="clearfix"></div>

   <div   v-if="!selected"  class="box-center">
    <h1 v-if="!selected" class="text-today" >{{$t('Today')}}</h1>
    <div @mouseover="showItems()" @mouseleave="collapseItems()" >

    <h3 id="text">
    <input id="todo" name="todo" value="todo" @change='disable=!disable'   @mouseover="showItems()" @mouseleave="collapseItems()"  v-show="!selected && show"  type="checkbox" class=" form-check-input big-checkbox animate__animated animate__fadeIn">
    <label  @mouseover="showItems()" @mouseleave="collapseItems()" for="todo" :data-content="result">{{result}}</label>

        <i  @click="closed()" v-if="!disable" class="fa fa-times edit-dots"   aria-hidden="false"></i>
        <i @click="closed()" v-if="disable" class="fa fa-plus  edit-dots" aria-hidden="false"></i>
 </h3>

   </div>

  </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value :'',
            result : '',
            selected:false,
            show :false,
             disable:true,
        }
    },
 created(){
document.getElementById('name').value=''
this.selected=true
 },


  mounted() {
    if (localStorage.result) {
      this.result = localStorage.result;
    }
 
  },
  watch: {
    result(newresult) {
      localStorage.result = newresult;
    },
 
  },

    methods:{
        closed(){
        this.selected=!this.selected
        this.result=''
       this.disable=!this.disable
        },
        showItems(){
          this.show=!this.show
        },
        collapseItems(){
          this.show=false
        },
    },

}
</script>
<style scoped>
.text-today{
  color:#fff;
  font-family :"Nunito", sans-serif;
  font-weight: 650;
  font-size: 25px;
  text-align: center;
  letter-spacing: 1px;
  margin-right: 20px;
}


.box-center{
text-align: center;
}
.big-checkbox {
   display: inline;
   width: 20px;
  height: 20px;
  }

label {
  position: relative;
  cursor: pointer;
  user-select: none;
}
  label::before {
    position: absolute;
    content: attr(data-content);
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
.big-checkbox:checked #text::before{
  opacity: 0;
}
  .big-checkbox:checked ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
.big-checkbox:hover{
  cursor: pointer;
}
#text{
 font-family:"Nunito", sans-serif;
 font-size: 3rem;
 max-width: 100px;
 letter-spacing: 2;
 font-weight: 10;
 padding: 5px;
 display: inline;
 color: #fff;
}


.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid snow;
  outline: 0;
  font-size: 3.3rem;
  color: white;
  padding: 2px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.edit-dots{
 text-align: center;
 text-decoration: none;
 border: none;
 outline: none;
cursor: pointer;
height: 30px;
width: 30px;
color: gray;
border-radius: 100%;
padding-top: 6px;
font-size: 18px;
background: none;
background-image: linear-gradient(to bottom,rgba(25,25,25,0.10),rgba(25,25,25,0.30));
 transition:all .5s;
}
.edit-dots:hover{
  background-image: linear-gradient(to bottom,rgba(255,255,255,0.30),rgba(25,25,25,0.80));

}
</style>