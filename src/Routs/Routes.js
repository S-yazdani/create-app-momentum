import register from '../components/register.vue'
import mainPage from '../components/mainPage.vue'
import {i18n} from '../plugins/i18n'

export const Routes = 
[
    {path:'/' , redirect :`/${i18n.locale}`},

        {path:'/:lang',component:register},
            {path:'/:lang/mainpage',component:mainPage},
  
      
]