<template >
<div>
<div class="row">

<div class="col-xs-10 col-md-11">
 <app-time></app-time>
</div>

<div class="col-xs-2 col-md-1">
 <app-weatherWidget></app-weatherWidget>
</div>

</div>





<div class="clearfix"></div>


 <app-answer></app-answer>
  
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
