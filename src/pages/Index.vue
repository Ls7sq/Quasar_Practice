<template>
  <q-page padding>
    <input v-model="message" 
      @keyup.esc="clearMessage"
      @keyup.enter="aleartMessage"
      />
    <button @click="clearMessage">clear</button>
    <h5 
      v-if="message.length"
      class="border-gray" >{{message}}</h5>
    <h6
      v-else>No Message entered</h6>

  </q-page>
</template>

<script>
export default {

  data(){
    return{
      message:"check check"
    }
  },
  methods: {  
    clearMessage(){
      this.message = ''
    },
    // handleKeyup(e){
    //   console.log(e)
    //   if (e.keyCode === 27) {
    //     this.clearMessage()
    //   }else if(e.keyCode === 13){
    //     this.aleartMessage()
    //   }
    // },
    aleartMessage(){
      alert(this.message);
    }
  }
}
</script>

<style type="text/css">
  .border-gray{
    border:  1px solid grey;
  }
</style>
