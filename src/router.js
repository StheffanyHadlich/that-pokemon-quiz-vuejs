import EndGame from './views/EndGame'
import Quiz from './views/Quiz';
import StartGame from './views/StartGame'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: StartGame
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
