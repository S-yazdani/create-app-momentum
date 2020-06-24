import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        name :"",
    },
    getters:{
        getname(state){
          return state.name
        },
    },
    mutations:{
        changename(state,newname){
         state.name = newname

        },
    },
    actions:{
        changename(context,newname){
       context.commit('changename',newname)
        },
  
    }
})