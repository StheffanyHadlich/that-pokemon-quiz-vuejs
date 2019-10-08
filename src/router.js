import EndGame from './views/EndGame'
import Quiz from './views/Quiz';

export default [
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
  },
];