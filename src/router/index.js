import { createRouter, createWebHistory } from "vue-router";
import Register from '../components/Register.vue'; 
import RegisterNext from '../components/RegisterNext.vue'; 
import Reussir from '../components/Reussir.vue'; 
import Accueil from '../components/Accueil.vue'; 
import Inscription from '../components/Inscription.vue'; 
import Connexion from '../components/Connexion.vue'; 

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
        name:'ReussirNext',
        component:Reussir
    },
    {
        path:'/signup',
        name:'Inscription',
        component:Inscription
    },
    {
        path:'/signin',
        name:'Connexion',
        component:Connexion
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
}
)

export default router