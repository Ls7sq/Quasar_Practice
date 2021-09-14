<template>
  <q-page padding>
    <button style="position: absolute; right: 10px;"
    @click=counter++>
      {{counter}}  
    </button>

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

      <hr>

      <p>Uppercase message: {{messageUppercase}}</p>
      <p>Lowercase message: {{message | messageLowercase}}</p>
  </q-page>
</template>

<script>
export default {

  data(){
    return{
      message:"check check",
      counter: 0
    }
  },
  computed:{
    messageUppercase(){
      console.log('messageUppercase was fired');
      return this.message.toUpperCase() + this.counter;
    }
  },
  methods: {  
    clearMessage(){
      this.message = '';
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
  },
  filters:{
    messageLowercase(value){
      console.log('messageLowercase was fired');//After button click still be active
      return value.toLowerCase();
    }
  }
}
</script>

<style type="text/css">
  .border-gray{
    border:  1px solid grey;
  }
</style>
