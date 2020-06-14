import Home from '../views/Home.vue';
import Explore from '../views/Explore.vue';
import About from '../views/About.vue';
import Detail from '../views/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/explore', component: Explore },
    { path: '/about', component: About },
    { path: '/detail', component: Detail },
];
export default routes;

// export default new VueRouter({

//     routes
// })

