import { createRouter, createWebHistory } from 'vue-router'
import Restaurants from "../components/Restaurants.vue"
import Details from "../components/Details.vue"
import Success from "../views/Success.vue"
import Danger from "../views/Danger.vue"

const routes = [
  {
    path : "/",
    name : "Restaurants",
    component : Restaurants
  },
  {
    path : "/:id",
    name : "Details",
    component: Details
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  },
  {
    path: "/danger",
    name: "Danger",
    component: Danger
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
