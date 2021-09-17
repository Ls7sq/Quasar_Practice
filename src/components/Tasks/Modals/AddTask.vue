<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        
        <!-- :name = "taskToSubmit.name" used to pass to the child ModelTaskName, and :name.sync to get back the data from child-->
        <modal-task-name 
          :name.sync = "taskToSubmit.name"
          ref='modalTaskName'/>

        <modal-due-date
          :dueDate.sync = "taskToSubmit.dueDate"
          @clear="clearDueDate"/>

        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync = "taskToSubmit.dueTime"/>

      </q-card-section>
        <modal-buttons/>
    </form>
</q-card>
</template>

<script>

  import{ mapActions }from 'vuex'
  import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

  export default{
    mixins:[mixinAddEditTask],
    data(){
      return{
        taskToSubmit:{
            name: '',
            dueDate:'',
            dueTime:'',
            completed: false
        }
      }
    },
    methods:{
      //Here can trigger the anction called addTask in store-tasks.js
      ...mapActions('tasks',['addTask']),

      submitTask(){
        this.addTask(this.taskToSubmit)

        //triger the event in PageTodo.vue at <add-task/>
        this.$emit('close')      
      }
    },
    // directives:{
    //   autofocus:{
    //     inserted(el){
    //       el.focus()
    //     }
    //   }
    // }
  }
</script>

<style>
  
</style>