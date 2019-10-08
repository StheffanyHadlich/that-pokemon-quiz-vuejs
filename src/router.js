import EndGame from './views/EndGame'
import Quiz from './views/Quiz';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/quiz'
    },
    {
      path: '/quiz',
      component: Quiz,
    },
    {
      path: '/endgame',
      component: EndGame,
    }
  ]
})
