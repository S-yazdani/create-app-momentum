<template >
<div>
<div class="row">

  <div class="col-sm-3 pull-right">
    <app-weatherWidget></app-weatherWidget>
  </div>
<div class="col-sm-9 text-center ">
<app-time></app-time>
   <br>

   
   <h1 class="question">{{$t('Question')}} </h1>
   <br>


   <app-answer></app-answer>
  
</div>
</div>



</div>
</template>

<script>
import weatherWidget from './weatherWidget.vue'
import Time from './Time'
import Answer from './Answer'
export default {
  name: "app",

  components:{
       appTime: Time,
      appAnswer : Answer,
     appWeatherWidget :weatherWidget
  },
  }

</script>
<style scoped>

</style>
