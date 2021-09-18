// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files

import {LocalStorage} from 'quasar'
export default  ( { router } ) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn')
    
    if(!loggedIn && to.path !== '/auth'){
      next('/auth')
    }else if(loggedIn && to.path == '/auth'){
      next('/')
    }else{
      next()
    }
    // else if(loggedIn==true && to.path !== '/auth'){ 
    //   next()
    //   // console.log('to', to)
    //   // console.log('from', from)
    // }
  })
}
