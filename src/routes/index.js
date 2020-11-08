import {createRouter,createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue';   
import Faq from '../pages/Faq.vue';   
import Error404 from '../pages/404.vue';
import AppointmentDetails from '../pages/AppointmentDetails'
const routes = [
    {
        path: "/",
        
        component:Home
    },
    {
        path: "/Faq",
        component:Faq
    },
    {
        path:'/appointments',
        component:AppointmentDetails
    },
    {
        path:'/:pathMatch(.*)*',
        component:Error404
    },
    
     
     
]

//const history = createWebHistory();
const router = createRouter({
    history:createWebHistory(),routes 
})

export default router;