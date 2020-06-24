<template>
  <div id="weatherId">
  <main>
         <div class="search-box">
           <input type="text" class="search-bar"  v-model="query" placeholder="Search...">
           <button id="btn-show" class="btn btn-sm" @click="fetchweather()"> {{$t('ShowDetail')}} </button>
         </div>

         <div class="weather-wrap" v-if='typeof weather.main !="undefined"'>
           <div class="location-box">
             <div class="location"> {{ weather.name }},{{weather.sys.country}} </div>
           
           </div>

             <div class="weather-box">
               <div class="temp">{{Math.round( weather.main.temp )}} °c</div>
               <div class="weather">{{weather.weather[0].main}}</div>
             </div>


         </div>

  </main>

  </div>
</template>

<script>
  export default {
data(){
  return{
    api_key:'8ff0c4259ac6a12775296521834b7ef8',
    url_base:'https://api.openweathermap.org/data/2.5/',
    query:'',
    weather:{}
  }
},
methods:{
  fetchweather(){
  
  fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`).then(res=>{return res.json()})
  .then(this.setResults)

  },
  setResults(results){
    this.weather=results
  }
}
  }
</script>

