<template>
  <q-page padding>
    <button style="position: absolute; right: 10px;"
    @click=counter++>
      {{counter}}  
    </button>

    <input 
      v-model="message"
      v-autofocus
      @keyup.esc="clearMessage"
      @keyup.enter="aleartMessage"
      :style="errorStyle"
      />

    <div>{{message.length}}</div>

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
      console.log('message.length: '+ this.message.length);
      return this.message.toUpperCase() + this.counter;
    },
    errorStyle(){
      if (this.message.length>20 || this.message === "luoshiqi") {
        return{
          'color':'red',
          'background-color':'pink'
        }
      }
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
      //console.log('messageLowercase was fired');//After button click still be active
      return value.toLowerCase();
    }
  },
  directives:{
    autofocus:{
      inserted(el){
        //console.log('input insterted')
        el.focus();
      }
    }
  }
}
</script>

<style type="text/css">
  .border-gray{
    border:  1px solid grey;
  }
  input , button{
    font-size: 24px;
  }
  .error{
    color: red;
    background-color: pink;
  }
</style>
