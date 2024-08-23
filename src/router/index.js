import { createRouter, createWebHistory } from 'vue-router'
import AboutView from "@/views/AboutView.vue";
import GaleryView from "@/views/GaleryView.vue";
import MenuView from "@/views/MenuView.vue";
import OfferView from "@/views/OfferView.vue";
import ContactWeddingView from "@/views/ContactWeddingView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GaleryView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/offer',
    name: 'offer',
    component: OfferView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactWeddingView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
