import { createRouter, createWebHistory } from "vue-router";
import Register from '../components/Register.vue'; 
import RegisterNext from '../components/RegisterNext.vue'; 
import Reussir from '../components/Reussir.vue'; 
import Accueil from '../components/Accueil.vue'; 

const routes = [
    {
        path:'/',
        name:'Reussir',
        component:Accueil
    },
    {
        path:'/register',
        name:'Register',
        component:Register
    },
    {
        path:'/next',
        name:'RegisterNext',
        component:RegisterNext
    },
    {
        path:'/reuss',
        name:'RegisterNext',
        component:Reussir
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
}
)

export default router