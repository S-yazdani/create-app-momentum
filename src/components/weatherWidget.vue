<template>
  <div>


     <div class="box-degree">

     <span class=" icon fa fa-cloud"></span>
     <div id="temp" class="degree" >{{Math.round( weather.main.temp )}}°</div>

     </div>
     <a class="link" @click="fetchweather()"> {{$t('Tehran')}} </a>

     <div class="clearfix"></div>

<div v-if="!showDetail" @click="showIcon" class="div-collapse pull-right animate__animated animate__fadeIn">
  <p class="city-name">{{ weather.name }}</p>
  <p class="temp-name">{{weather.weather[0].main}} sky</p>
  
    <div class="box-degree">
      <p>{{item}}</p>
     <span class="icon  fa fa-cloud"> <div class="degree " >{{Math.round( weather.main.temp )}}°</div></span>
    </div>
    <hr>
</div>

  </div>
</template>

<script>
  export default {
data(){
  return{
    api_key:'8ff0c4259ac6a12775296521834b7ef8',
    url_base:'https://api.openweathermap.org/data/2.5/',
    id_city:112931,
    query:'tehran',
    weather:{
      main : {
        temp : 0
      }
    },
    showDetail:true,
    url_icon:'http://openweathermap.org/img/wn/10d@2x.png',
  }
},
created(){
     fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`).then(res=>{
       return res.json()
       })
  .then(this.setResults)
},
methods:{

     setResults(results){
    this.weather=results
  },
 fetchweather(){
   this.showDetail = !this.showDetail
 },

},
  }
</script>

<style scoped>
.link{
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 1px;
  margin-left: 8px;
}
.degree{
  font-family:  "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 600;
  display: inline;
}
.box-degree{
margin-top:8px ;
width: 100px;
color: #fff;
}
.icon{
  display: inline;
}
.div-collapse{
  padding: 20px;
  margin-right: 10px;
  margin-top: 10px;
 width: 400px;
  height: 200px;
  background-image: linear-gradient(to bottom,rgba(0,0,0,0.70),rgba(0,0,0,0.80));
  border-radius: 5px;
}
.city-name{
  font-size: 18px;
  color: #fff;
}
.temp-name{
  font-size: 15px;
  color:darkgray;
  margin-top: -5px;
}
.div-collapse .box-degree{
margin-top:8px ;
width: 500px;
color: snow;
}
.div-collapse .degree{
  font-family:  "Nunito", sans-serif;
  font-size: 60px;
  font-weight: 600;
  display: inline;
  margin-left: 15px;
}
.div-collapse .icon{

 font-size: 45px;
  display: inline;

}
</style>