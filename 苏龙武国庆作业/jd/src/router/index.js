import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'



Vue.use(Router)

export default new Router({
  linkActiveClass:'navactive',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    }
    
  ]
})

const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}